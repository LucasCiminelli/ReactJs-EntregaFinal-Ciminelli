import React from "react";

import { Link } from "react-router-dom";


const Item = ({ producto }) => {


  return (
    <div className="producto col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-2 d-flex flex-column ">
      <div className="card-container d-flex flex-column mx-1">
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${producto.image})`,
            minWidth: "240px",
            maxWidth: "250px",
            height: "350px",
            width: "250px",
          }}
        >
          <div className="content text-center d-flex flex-column">
            <h5
              className="d-flex flex-column flex-wrap"
              style={{
                maxWidth: "250px",
              }}
            >
              {producto.title}
            </h5>

            <i class="cart1 bi bi-bag-plus"></i>
            <Link className="info" to={`/item/${producto.id}`}>
              <i class=" bi bi-info-lg"></i>
            </Link>
          </div>
        </div>
        <h5
          className="mt-3 d-flex flex-column flex-wrap text-center"
          style={{
            maxWidth: "250px",
          }}
        >
          {producto.title}
        </h5>
        <p>$ {producto.price}</p>
      </div>
    </div>
  );
};

export default Item;
