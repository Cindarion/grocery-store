import Navbar from './components/UI/navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import './styles/App.css'

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;