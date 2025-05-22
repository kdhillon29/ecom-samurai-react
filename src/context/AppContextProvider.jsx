import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data } = await axios.get(
      "https://ecommerce-samurai.up.railway.app/product"
    );

    const productsData = data.data;

    setProducts(productsData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  );
}
export default AppContext;
