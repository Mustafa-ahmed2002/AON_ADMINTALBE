import React, { useEffect, useState } from "react";
import AdminTable from "./Components/adminTable/admintable.jsx";
import Header from "./Components/Header/header.jsx";
import "./App.css";
import Container1 from "./Components/container/container.jsx";
import AddProduct from "./Components/addProduct/AddProduct.jsx";

const App = () => {
  const [api, setApi] = useState([]);
  const APIF = async () => {
    try {
      let apiFetch = await fetch("https://dummyjson.com/products");
      let data = await apiFetch.json();
      setApi(data.products);
      console.log(data.products);
    } catch (error) {
      console.log("Error fetching API:", error);
    }
  };

  useEffect(() => {
    APIF();
  }, []);

  return (
    <div>
      <Header />
      <Container1>
        <AddProduct />
        <AdminTable API_DATA={api} />
      </Container1>
    </div>
  );
};

export default App;
