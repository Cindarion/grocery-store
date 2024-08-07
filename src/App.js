import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/context/cartContext';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import './styles/global.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Navbar/>
          <div class="mainContainer">
            <AppRouter/>
          </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;