// jsx is a template-like syntax with the full power of JS
// JSX produces 'react elements'
// markup and logic in same file (a component)
// any valid JS expression can go inside the curly braces in JSX
// wrapping jsx elements in parens avoids automatic semicolon insertion issues but is not required
// jsx expressions evaluate to normal JS f() calls and return an object -> can use in if statements, for loops, use as parameter


const element = <h1>Hello, world!</h1>;
const sum = 2 + 2;



function getName() {
  const people = {
    name: 'shane',
    title: 'dev'
  };
  return Object.create(people);
}


const myName = 'shane';
const name = (
<p>Hello, {getName().name}. You're older than {sum}</p>
);

// root Dom node created and everything w/i is managed by React
ReactDom.render(name, document.getElementById('root'));

// use quotes to designate a string literal inside of jsx

const element = <h1 tabIndex="0"></h1>;

const element = <h1 className="greeting">Hello World</h1>

// babelified
element = React.createElement('h1', {
  className: 'greeting'},
  'Hello world');

// HOW to think about React elements as objects
// description of what you want to see on screen
// react reads these elements and uses them to construct the virtual DOM and keep it up to date

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};

// Components are made of element objects
// React elements are immutable
  // can't change its children or attributes
  // element is like a single frame in a movie that reps the UI at one point in time

// most apps only call ReactDOM.render() once and then encapsulate stateful components

// **useful to thing about how how app will look at any given moment as opposed to how to change it over time

function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}

  // same as the following except you utilize the this keyword to point to the newed up Welcome object after called that will have a props property and be filled with key/value pairs such as name
  // render method is attached to prototype obj Welcome f()
class Welcome extends React.Component {
  render(){
   return <h1>Welcome, {this.props.name}</h1>
  }
}

// using lowercase signifies to React you're making a basic DOM element
let element = <div />


// user defined elements have to start with capital letter so React knows what's up
let filledUp = <ShaneElement style={{backgroundColor: 'green'}} />

// creating a function component that will accept a props object passed in when called and assigned to the myEyes variable

function tellEyeColor(props) {
  return (
    <h1>My eyes are definity not {props.color} </h2>
  )
}

// calls the ReactDOM.render method and passes the props object to tellEyeColor as it is now called
let myEyes = <tellEyeColor color = 'blue' />;

// called by myEyes gets back the requested HTML and efficiently updates the DOM
ReactDOM.render(myEyes, document.getElementById('root'));


// function component that will be used to render multiple howdies
function Howdy(props) {
  return <h1> Howdy, {props.name} </h1>
}

// returns many howdies each with a different props object passed in
// note consecutive components need to be wrapped in an html element
function ManyHowdies() {
  return (
    <div>
  <Howdy name='shane' />
  <Howdy name='taryn' />
   </div>
  )
}

// ReactDOM.render is called the contained ManyHowdies()
ReactDOM.render(<ManyHowdies />,document.getElementById('root'));

// name props from the components POV i.e. user instead of author

// props are read only, and function components or classes can't operate on their props #pureFunctions -> don't change inputs and return same outputs for same inputs

