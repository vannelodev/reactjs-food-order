import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <Cart />
      <h1>Hola</h1>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
