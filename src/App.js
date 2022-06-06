import logo from './logo.svg';
import './App.css';
import SlidingTab from './components/SlidingTab/SlidingTab';
import Button from './components/AddToCart/Button';
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';

function App() {
  return (
    <div className="App">
      <SlidingTab />
      <Button />
      <ScrollAnimation />
    </div>
  );
}

export default App;
