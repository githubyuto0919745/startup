import './graph.css';

export function Graph(){
    return(

      
        <main>
            <div className="graph-set">
                <h1>Graph</h1>
                <select className="graph">
                    <option>bar chart</option>
                    <option>line chart</option>
                    <option>pie chart</option>
                </select>
                <img src="/image/graph.png" alt="graph" width="300px" height="300px" />
            </div>
            
            
            {/* <canvas id="calorieChart" width ="500" height="300"></canvas>
              
            <p> Chat with Yuto from user</p>
            <section id = "chat"> Chat</section> */}
            
            <div className="chat-board">
                <div id="textspace">
                    <p><strong>User:</strong> Hi, I want to talk about diet goals!</p>
                    <p><strong>Yuto:</strong> Sure! How was your breakfast?</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>
                    <p><strong>User:</strong> I had an apple and some toast.</p>

                    
                </div> 
                <input id="textbox" type="text" placeholder="Type your message..." />
                <div className="chat-buttons">
                    <button id="send">Send</button>
                    <button id="delete">delete</button>
                </div>
            </div>
            
            
            {/* <p> Websocket data placeholder with real time chat</p> */}
        </main>




       
    



    );
}