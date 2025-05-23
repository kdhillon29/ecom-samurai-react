import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";

const AppContext = createContext();

export const useProduct = () => useContext(AppContext);

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
  return <AppContext value={{ products }}>{children}</AppContext>;
}
