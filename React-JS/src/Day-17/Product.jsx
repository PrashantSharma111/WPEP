import React, { useEffect, useState } from "react";

function Product() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      <ul>
        {items.map((data, index) => (
          <li key={index}>{JSON.stringify(data)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
