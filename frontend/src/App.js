import React from "react";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            <img
              src="./images/newvictorialogo.png"
              className="vrlogo"
              alt="logo"
            />
            <br />
            <span style={{ color: "red" }}>Victoria</span>
            <span style={{ color: "blue" }}>Mart</span>
          </a>
        </div>
        <div>
          <a href="/cart">
            <img
              src="./images/shopping-cart.png"
              style={{ width: "4rem", height: "4rem" }}
              alt="Cart"
            ></img>
          </a>
          <a href="/signin">
            <img
              src="./images/user.png"
              style={{ width: "4rem", height: "4rem" }}
              alt="Sign In"
            ></img>
          </a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>{" "}
                    </span>
                    <span>
                      <i className="fa fa-star"></i>{" "}
                    </span>
                    <span>
                      <i className="fa fa-star"></i>{" "}
                    </span>
                    <span>
                      <i className="fa fa-star"></i>{" "}
                    </span>
                    <span>
                      <i className="fa fa-star"></i>{" "}
                    </span>
                  </div>
                  <div className="price">$120</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
