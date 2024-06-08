import './App.css';
import TODO from './components/todo';

function App() {
  return (
    <section className="hero">
      <div className="App">
        <h1 className="welcome-heading">WELCOME TO THE TASK BUD</h1>
        <TODO />
      </div>
    </section>
  );
}

export default App;
