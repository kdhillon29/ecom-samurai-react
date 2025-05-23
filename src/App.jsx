import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import { AppContextProvider } from "./context/AppContextProvider";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </AppContextProvider>
  );
}

export default App;
