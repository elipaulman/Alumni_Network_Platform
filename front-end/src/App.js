import './App.css';
import Navbar from './components/Navbar';
import CenteredTitle from './components/CenteredTitle';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <CenteredTitle text="LMCC Alumni Network" />
      </div>
    </div>
  );
}

export default App;
