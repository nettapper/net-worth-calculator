import './App.css';
import Header from './components/header';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="app">
      <Header text="Net Worth Calculator" />
      <Calculator />
    </div>
  );
}

export default App;
