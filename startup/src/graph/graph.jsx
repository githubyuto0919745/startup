import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { io } from 'socket.io-client';
import './graph.css';


export default function Graph() {
  const [chartData, setChartData] = useState([]);
  const [hasData, setHasData] = useState(false);
  const [joke, setJoke] = useState('Loading joke...');
  const navigate = useNavigate();

  useEffect(() => {
    let socket;

    const processGraph = (graph) => {
      if (!graph || !graph.profile || !graph.intake) {
        setHasData(false);
        return;
      }

    const chart = [
    {
        name: 'Calories (kcal)',
        profile: graph.profile.calories || 0,
        intake: graph.intake.calories || 0,
    },
    {
        name: 'Protein (g)',
        profile: graph.profile.protein || 0,
        intake: graph.intake.protein || 0,
    },
    {
        name: 'Carbs (g)',
        profile: graph.profile.carbs || 0,
        intake: graph.intake.carbs || 0,
    },
    {
        name: 'Fats (g)',
        profile: graph.profile.fats || 0,
        intake: graph.intake.fats || 0,
    },
    ];

      setChartData(chart);
      setHasData(chart.some((d) => d.profile > 0 || d.intake > 0));
    };
const fetchGraphHttp = async () => {
      try {
        const res = await fetch('/api/graph', { credentials: 'include' });
        if (res.ok) {
          const graph = await res.json();
          processGraph(graph);
          return true;
        }
      } catch (err) {
        // fall through to websocket fallback
      }
      return false;
    };

    const connectSocketFallback = () => {
      const backendUrl =
        window.location.hostname === 'localhost'
          ? 'http://localhost:4000'
          : '/';
      socket = io(backendUrl, { withCredentials: true });

      socket.on('connect', () => {
        socket.emit('getGraph', localStorage.getItem('userName'));
      });

      socket.on('graphData', (graph) => {
        processGraph(graph);
      });

      socket.on('disconnect', () => {
        console.log('Graph socket disconnected');
      });
    };

    (async () => {
      const ok = await fetchGraphHttp();
      if (!ok) connectSocketFallback();
    })();

    const fetchJoke = async () => {
      try {
        const response = await fetch(
          'https://official-joke-api.appspot.com/jokes/random'
        );
        const data = await response.json();
        setJoke(`${data.setup} ${data.punchline}`);
      } catch {
        setJoke('Could not fetch a joke!');
      }
    };

    fetchJoke();

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);
  return (
    <main>
      <div className="main-graph">
        <div className="graph-set">
          <h1>Graph</h1>
          <h2> Macronutrient Distribution</h2>
          {hasData ? (
            <BarChart width={500} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                label={{ value: 'Grams', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="profile" fill="#e094acff" />
              <Bar dataKey="intake" fill="#82ca9d" />
            </BarChart>
          ) : (
            <p>No data yet.</p>
          )}

          <p className="joke">
            <em>{joke}</em>
          </p>
        </div>
      </div>
    </main>
  );
}