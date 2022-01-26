// import logo from './logo.svg';
// import './App.css';

const Task = () => {
  const arr = ['JavaScripto', 'HTML', 'CSS', 'React'];
  return (
    arr.map((element) => {
     return <li>{element}</li>;
    })
  );
}

function App() {
  return <Task />;
}

export default App;
