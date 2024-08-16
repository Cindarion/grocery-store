import { CartProvider } from './components/context/cartContext';
import AppRouter from './components/AppRouter';
import './styles/global.css'

function App() {
  return (
    <CartProvider>
      <div className="mainContainer">
        <AppRouter/>
      </div>
    </CartProvider>
  );
}

export default App;