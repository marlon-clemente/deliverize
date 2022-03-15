import { useEffect, useState } from "react";
import Header from "./components/Header";
import ShowProduct from "./components/ShowProduct";
import api from "./services/api";
import "./styles/global.css";
import { TypeProduct } from "./types";

function App() {
  const [product, setProduct] = useState<TypeProduct>();

  const fetch = async () => {
    const { data } = await api.get("/test-frontend/products");
    setProduct(data[0]);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header />
      {product && <ShowProduct product={product} />}
    </>
  );
}

export default App;
