import React from 'react';
import ReactStars from "react-stars/dist/react-stars";
import {Link} from "react-router-dom";
const ProductCard = () => {
    return <div className="col-3">
        <Link className="product-card">
            <div className="product-image">
                <img src="/images/watch.jpg" alt="product" />
            </div>
            <div className="product-details">
                <h6 className="brand">Apple</h6>
                <h5 className="product-title">Watch 8</h5>
                <p className="mb-0">Stylish Inside Out.</p>
                <ReactStars count={5} size={24} value={4} edit={false}/>
                <span className="price">$799</span>
            </div>

        </Link>
    </div>
}

export default ProductCard;