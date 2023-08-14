import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <Container fluid className="">
        <div className="pt-5 pb-5">
          <h5 className="ps-5">Top categories</h5>
          <div className="card-container">
            <div className="card-1 mx-2">
              <div className="content">
                <h6>UpperBody</h6>
                <Link to="/categories">View More</Link>
              </div>
            </div>
            <div className="card-2 mx-2">
              <div className="content">
                <h6>LowerBody</h6>
                <Link to="/categories">View More</Link>
              </div>
            </div>
            <div className="card-3 mx-2">
              <div className="content">
                <h6>Accesories</h6>
                <Link to="/categories">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="view-categories mt-2 mb-5 mx-0 px-0">
        <h5>View All Categories</h5>
      </div>
    </>
  );
};

export default Categories;
