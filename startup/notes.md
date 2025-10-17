# CS 260 Notes

[My startup >- Simon](https://simon.cs260.click)

## Helpful links

>- [Course instruction](https://github.com/webprogramming260)
>- [Canvas](https://byu.instructure.com)
>- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar>-expand>-lg bg>-body>-tertiary">
        <div class="container>-fluid">
          <a class="navbar>-brand">
            <img src="logo.svg" width="30" height="30" class="d>-inline>-block align>-top" alt="" />
            Calmer
          </a>
          <button class="navbar>-toggler" type="button" data>-bs>-toggle="collapse" data>-bs>-target="#navbarSupportedContent">
            <span class="navbar>-toggler>-icon"></span>
          </button>
          <div class="collapse navbar>-collapse" id="navbarSupportedContent">
            <ul class="navbar>-nav me>-auto mb>-2 mb>-lg>-0">
              <li class="nav>-item">
                <a class="nav>-link active" href="play.html">Play</a>
              </li>
              <li class="nav>-item">
                <a class="nav>-link" href="about.html">About</a>
              </li>
              <li class="nav>-item">
                <a class="nav>-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant>-baseline="central" text>-anchor="middle" font>-size="72" font>-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input>-group sound>-button>-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form>-check form>-switch">
      <input
        className="form>-check>-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form>-check>-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```


### Exam1

>- 1. In the following code, what does the link element do?
- it links an external resource like CSS file to the HTML 
-  <link rel="stylesheet" href="styles.css"> applies styles from styles.css to the page.

>- 2. In the following code,  what does a div tag do?
- div is a block-level container that groups other elements within HTML. It's used for structure and layout.
- ※ Divs have default display:block and take full width. They don't add behavior by themselves.

>- 3. In the following code, what is the difference between the #title and .grid selector?
-  #title selects an element by ID (unique). .grid selects elements by class (can apply to multiple elements).



>- 4. In the following code, what is the difference between padding and margin?
-  Padding: space inside the element (between content and border). Margin: space outside the element (between border and other elements)

>- 5. Given this HTML and this CSS how will the images be displayed using flex?
-  If the container uses display: flex;, the images will be displayed in a row by default ( meaning all images are lined in the same row) , side by side, unless flex-direction: column; is specified (all of them lined within the same column).


>- 6. What does the following padding CSS do?
 - Example: padding: 10px 20px; adds 10px top/bottom and 20px left/right inside the element.
 
 padding: 10px 20px 30px 40px;
top => right => bottom => left

>- 7. What does the following code using arrow syntax function declaration do?
- Arrow functions are a compact(simple) function syntax. (a, b) => a + b means a function with parameters a and b that
 returns a+b.
 Examples:
 const add = (a, b) => a + b;
 const greet = name => `Hi ${name}`;
 const square = x => { return x * x; } // block form
 
 Note: arrow functions do not bind their own 'this' and are not suitable as constructors



>- 8. What does the following code using map with an array output?

-  map() transforms every element of an array and returns a new array without mutating the original.
 Examples:
const nums = [1,2,3];
 const doubled = nums.map(n => n * 2); // [2,4,6]
 const names = ['Amy','Bob'];
 const greetings = names.map(n => `Hi ${n}`); // ['Hi Amy','Hi Bob']


>- 9. What does the following code output using getElementByID and addEventListener?
-  Typical pattern:
 const btn = document.getElementById('btn');
 btn.addEventListener('click', () => console.log('Clicked!'));
 Behavior: When user clicks the element with id 'btn', the callback runs and prints 'Clicked!'.



>- 10. What does the following line of Javascript do using a # selector?
-  document.querySelector('#title') selects the first element that matches the CSS selector #title (element with id='title').
 querySelector accepts any CSS selector (classes, attributes, pseudos).


>- 11. Which of the following are true? (mark all that are true about the DOM)
-  The DOM represents the HTML document as a tree of objects. (HTML => body => h1 etc)
- You can use JavaScript to access and modify
 DOM elements. 
- Each HTML element is a node in the DOM(node is div, p so HTML made by node)



>- 12. By default, the HTML span element has a default CSS display property value of: 
-  inline(does not start new line)


>- 13. How would you use CSS to change all the div elements to have a background color of red?

- div { background-color: red; }

>- 14. How would you display an image with a hyperlink in HTML?
-  Ensure the image file is in the correct folder (public or
 images/) and the src path points to it.
 
 
 Example:
 &lt;a href="https://example.com"&gt;
  &lt;img src="images/logo.png" alt="Logo"&gt;
 &lt;/a&gt;
 Folder scheme example:
 project/
    index.html
    images/
      logo.png
    css/
      styles.css
※ If using a framework, the image may need to be in a 'public' or 'static' folder so it is served directly.    



>- 15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
-  Order: Content -> Padding -> Border -> Margin
 Diagram:
 +----------------+
|    Margin      |
 | +------------+ |
 | |  Border    | |
 | | +--------+ | |
 | | |Padding | | |
 | | |Content | | |
 | | +--------+ | |
 | +------------+ |
 +----------------+
 Padding increases size inside border; margin creates space between elements



>- 16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

- Given <p><span class="trouble">trouble</span> double</p>, use .trouble { color: green; }


>- 17. What will the following code output when executed using a for loop and console.log?
 
 
 - for (let i = 0; i < 3; i++) { console.log(i); }
 This initializes i=0, checks i<3 each loop, runs body and increments i++ after each iteration. Output



>- 18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

-  Option 1 (direct):
 document.getElementById('byu').style.color = 'green';
- Option 2 (variable):
 const byu = document.getElementById('byu');
 byu.style.color = 'green';
 Explanation: getElementById returns the DOM element. Assigning to variable avoids querying repeatedly.



>- 19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
-  Paragraph: <p>, Ordered list: <ol>, Unordered list: <ul>, h2: <h2>, h1: <h1>, h3: <h3>


>- 20. How do you declare the document type to be html?
-  <!DOCTYPE html>


>- 21. What is valid javascript syntax for if, else, for, while, switch statements?

- if (x > 5) { ... } else { ... } for (...) { ... } while (...) { ... } 

switch (x) { 
  case "apple":
  console.log("You choose apple");
  break; 
  default: 
  console.log("unknown fruits") 
  }


>- 22. What is the correct syntax for creating a javascript object?
-  const person = { name: "John", age: 30 };


>- 23. Is it possible to add new properties(keys) to javascript objects?
-  Yes. Example: person.city = "Provo"
person = {name: "John", age: 30, city: "Provo"}
 
※name and age are key (properties) and John is value

>- 24. If you want to include JavaScript on an HTML page, which tag do you use?
- <script src="script.js"></script>


>- 25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

 HTML:
 <p id="animal">animal</p>
 <p id="fish">fish</p>
 Option 1 (direct):
 document.getElementById('animal').textContent = 'crow';
 Option 2 (variable):
 const animal = document.getElementById('animal');
 animal.textContent = 'crow';
 Both work; second is clearer if reusing element.


>- 26. Which of the following correctly describes JSON?

- JSON (JavaScript Object Notation) is a text-based format for structured data using key-value pairs. Example: {
 "name": "John", "age": 25 }


>- 27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

-  chmod - change permissions, so others can read and execute 
- pwd - print working directory, current directory path
- cd - change directory, moves to different folder
- ls - list files, 
- vim/nano - text editors, 
- mkdir - make directory, create new folder not file
- mv - move/rename, 
rename:  mv old.txt new.txt  move: mv file.txt/home/user/documents
- rm - remove, 
- man - manual, display all options and usage of the ls command
- ssh - remote shell, connect remote server over the network
- ps - processes, lists the runnning processes on your system
- wget - download files, 
- sudo - run as admin, executes a command with superuser privileges



>- 28. Which of the following console command creates a remote shell session?

- ssh

>- 29. Which of the following is true when the >-la parameter is specified for the ls console command?

-  ls -la lists all files (including hidden) in long format

-l is long format(shows detailed information for each file)
-a is all files including hidden files

>- 30. Which of the following is true for the domain name banana.fruit.bozo.click, >- >- which is the top level domain, which is a subdomain, which is a root domain?

math.byu.edu    byu.edu(root)   math(subdomain) edu(TLD)


>- 31. Is a web certificate is necessary to use HTTPS.

- Yes, HTTPS requires a valid SSL/TLS certificate.


>- 32. Can a DNS A record can point to an IP address or another A record.

-  A DNS A record points to an IP address; it should not point to another A record

>- 33. Port 443, 80, 22 is reserved for which protocol?
-  443 -> HTTPS, 80 -> HTTP, 22 -> SSH

HTTP	80	Standard web traffic	Unencrypted (not secure)
HTTPS	443	Encrypted web traffic	Secure (uses SSL/TLS)
SSH	22	Remote server access	Secure (encrypted shell)


>- 34. What will the following code using Promises output when executed?
-  Many possibilities depending on promise behavior. Examples:


 1) Promise.resolve('Done').then(console.log) -> 'Done'
 2) Promise.reject('Error').catch(console.error) -> 'Error'
 3) new Promise(res => setTimeout(() => res('Hi'),1000)).then(console.log) -> 'Hi' after 1s
 4) Async function returns value -> printed when awaited or .then
 5) Promise chain: Promise.resolve(2).then(x=>x*2).then(x=>x+1).then(console.log) -> 5
 6) Reject handled -> shows error via catch







### from another PDF

>- What does the following code using arrow syntax function declaration do?
 const greet = (name) => {
  return 'Hello, ' + name;
 }
 console.log(greet('Amur'));
 - This defines an arrow function named greet that takes one argument name and returns a greeting
 string.


 const square = x => x * x;
 console.log(square(5));
 - Here, square takes a number and returns its square. The arrow syntax allows concise one-line
 functions.


 const add = (a, b) => a + b;
 console.log(add(2, 3));
 - This function takes two arguments and returns their sum. Arrow functions are common in modern JS,
 especially with array methods.
 
 >- What does the following code using map with an array output?
 
 const numbers = [1, 2, 3];
 const doubled = numbers.map(n => n * 2);
 console.log(doubled);
 - Output: [2, 4, 6] — The map() function applies a transformation to each element, returning a new array.



 const students = [{name: 'Amy'}, {name: 'Ben'}];
 const names = students.map(s => s.name);
 console.log(names);
- Output: ['Amy', 'Ben'] — This extracts the 'name' property from each object. Map doesn't change the
 original array.

>-  What does the following code output using getElementById and addEventListener?
 const button = document.getElementById('myButton');
 button.addEventListener('click', () => {
  alert('Button clicked!');
 });



 getElementById() selects the HTML element with the specified id. addEventListener() waits for an event
 (like a click) and runs the provided function when triggered. It doesn’t execute immediately—it listens
 for the event.
 const input = document.getElementById('username');
 input.addEventListener('change', () => {
  console.log('Input changed');
 });


 Listens for a change in an input field and logs a message when the value changes.
 const form = document.getElementById('loginForm');
 form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('Form submitted');
 });


 Prevents form refresh on submit and handles the event using JS.
 const heading = document.getElementById('title');
 heading.style.color = 'green';
 This example changes the text color of an element with id='title' to green.