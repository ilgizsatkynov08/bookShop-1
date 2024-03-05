import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../ProductContext/Context";
import "./Detal.css";

interface Book {
    id: string;
    name: string;
    price: number;
    type: string;
    description: string;
    image: string;
}

const Detail = () => {
  const { id } = useParams();
  const {  readProduct, product } = useProduct();
  const [book, setBook] = useState<Book | null>(null); 

console.log(product);


  useEffect(() => {
    if (product && product.length > 0 && id) {
      const selectedBook = product.find((book: Book) => book.id === id); 
      if (selectedBook) {
        setBook(selectedBook);
      }
    }
  }, [product, id]);



  return (
    <div id="detal">
    <div className="container">
      <div className="bookDetal">
        {book ? (
          <div style={{ display: "flex", gap: "100px" }}>
            <img
              style={{ width: "450px", height: "600px" }}
              src={book.image}
              alt=""
            />


            <div
              style={{
                width: "700px",
                display: "flex",
                flexDirection: "column",
                gap: "48px",
              }}
              className="dis"
            >
              <h2 className="a2">{book.name}</h2>
              <h2 className="a3">{book.price}</h2>
              <h2 className="a5">{book.type}</h2>
              <p className="a1">{book.description}</p>
              <button className="weroBtn">Добавить в корзину</button>
              <button className="weroBtn">Купить сейчас</button>
            </div>

          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Detail;
