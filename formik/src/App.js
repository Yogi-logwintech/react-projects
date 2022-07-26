import './App.css';
import BasicForm from './components/BasicForm';

function App() {
  return (
    <div className="App">
      <main>
        <div className="heading">
          <h3>Basic</h3>
          <h3>Advanced</h3>
        </div>
        <BasicForm />
      </main>
    </div>
  );
}

export default App;
