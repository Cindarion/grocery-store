import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <div class="mainContainer">
          <AppRouter/>
        </div>
    </BrowserRouter>
  );
}

export default App;