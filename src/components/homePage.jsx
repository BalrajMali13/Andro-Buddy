import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";

import {
    addToCart
} from "../features/counter/counterSlice";

const HomePage = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState("all");
    const dispatch = useDispatch();
     const count = useSelector((state) => state.counter.value);

     console.log("categories----------", categories);

    const fetchData = () => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }
     const fetchCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }


    useEffect(() => {
        fetchData();
        fetchCategories();
    }, [])

    return (
        <div className="home-page">
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="category-header">
                            <h2>Categories</h2>
                            <div className="category-list">
                                {categories === "all" ? (
                                    <button className="btn btn-outline-primary">
                                        All
                                    </button>
                                ) : (
                                    <button className="btn btn-outline-primary" >
                                        All
                                    </button>
                                )}
                                {categories !== "all" && categories?.map((category) => {
                                    return (
                                        <button className="btn btn-outline-primary" key={category}>
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {allProducts?.map((product) => {
                        return (
                            <div className="col-md-4">
                                <div class="card" style={{ width: "18rem" }}>
                                    <img src={product.image} class="card-img-top" alt={product.title} />
                                    <div class="card-body">
                                        <p class="card-title">{product.title}</p>
                                        <p class="card-text">${product.price.toFixed(2)}</p>
                                        <button class="btn btn-primary" onClick={() => dispatch(addToCart())}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div> </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default HomePage;