import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


function Menu() {

    const [allProducts, setAllProducts] = useState([])
    const [lsData, setLsData] = useState(
        JSON.parse(localStorage.getItem("loginuser")) || {}
    );
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://cafue-e-com-backend.onrender.com/product/getAllProducts")
            .then((res) => {
                setAllProducts(res.data.productData)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err.response?.data || err.message);
                setLoading(false)

            });
    }, []);


    console.log(allProducts)


    const filterProductsByCategory = (category) => {
        return allProducts.filter((ele) => ele.category === category);
    };


    const addCartHandler = useCallback(async (product) => {
        if (!lsData.token) {
            alert("You must log in to add items to the cart!");
            navigate("/Login");
            return;
        }

        try {
            const response = await axios.post(
                "https://cafue-e-com-backend.onrender.com/cart/addcart",
                {
                    productId: product._id,
                    productImage: product.image,
                    productName: product.productname,
                    productPrice: product.price,
                    quantity: 1
                }, // Modify based on backend requirements
                {
                    headers: {
                        Authorization: `Bearer ${lsData.token}`,
                    },
                }
            );

            alert(response.data.message || "Item added to cart successfully!");
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert("Failed to add item to cart. Check Login");
        }
    }, lsData, navigate);



    return (
        <div className='menu-back-img py-5 h-auto'>
            <div className='container pt-5 text-center'>
                <h5 className="font2 redcolor mb-3">Special Menu</h5>
                <h2 className='fw-bold'>Our Specials Menu</h2>
            </div>
            <div className='d-flex flex-column align-items-center mt-3'>
                <ul className="nav nav-pills mb-5 gap-2 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/7.png" alt="All" /> <span className='font2 fs-5'>All</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Pizza-tab" data-bs-toggle="pill" data-bs-target="#pills-Pizza" type="button" role="tab" aria-controls="pills-Pizza" aria-selected="false"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/1.png" alt="Pizza" /> <span className='font2 fs-5 '>Pizza</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Asian-tab" data-bs-toggle="pill" data-bs-target="#pills-Asian" type="button" role="tab" aria-controls="pills-Asian" aria-selected="false"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/2.png" alt="Asian" /> <span className='font2 fs-5 '>Asian</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Burger-tab" data-bs-toggle="pill" data-bs-target="#pills-Burger" type="button" role="tab" aria-controls="pills-Burger" aria-selected="false"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/1.png" alt="Burger" /> <span className='font2 fs-5 '>Burger</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Salad-tab" data-bs-toggle="pill" data-bs-target="#pills-Salad" type="button" role="tab" aria-controls="pills-Salad" aria-selected="false"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/1.png" alt="Salad" /> <span className='font2 fs-5 '>Salad</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Bakery-tab" data-bs-toggle="pill" data-bs-target="#pills-Bakery" type="button" role="tab" aria-controls="pills-Bakery" aria-selected="false"><img width={"70px"} src="https://cafeu-react.netlify.app/img/category/icon/1.png" alt="Bakery" /> <span className='font2 fs-5 '>Bakery</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link d-flex flex-column align-items-center text-secondary p-2 pb-1" id="pills-Drink-tab" data-bs-toggle="pill" data-bs-target="#pills-Drink" type="button" role="tab" aria-controls="pills-Drink" aria-selected="false"><img src="https://cafeu-react.netlify.app/img/category/icon/1.png" alt="Drink" /> <span className='font2 fs-5 '>Drink</span></button>
                    </li>

                </ul>
                <div className="container tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                        <div className='d-flex justify-content-center flex-wrap  gap-5'>
                            {loading ? <p>Loading products...</p> : (allProducts.map((ele) =>
                                <div key={ele._id} className="card border-0 rounded-0" style={{ width: "24rem", boxShadow: " 0 6px 20px 1px #ddd " }}>
                                    <img src={ele.image} className="card-img-top rounded-0" alt={ele.productName} />
                                    <div className="card-body p-4">
                                        <h5 className="card-title fs-6 fw-bold mb-3">{ele.productname}</h5>
                                        <p className="card-text graycolor">{ele.productdetails}</p>
                                        <span className='d-flex justify-content-between'>
                                            <p className='redcolor'>Price : {ele.price}</p>
                                            <span className='d-flex gap-1'>
                                                <button onClick={() => addCartHandler(ele)} href="#" className="btn btn-dark rounded-0"><i className="fa-solid fa-cart-shopping fa-sm" style={{ color: "#ffffff" }}></i></button>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Pizza" role="tabpanel" aria-labelledby="pills-Pizza-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            {loading ? <p>Loading products...</p> : (filterProductsByCategory("Pizza").map((ele) =>
                                <div key={ele._id} className="card border-0 rounded-0" style={{ width: "24rem", boxShadow: " 0 6px 20px 1px #ddd " }}>
                                    <img src={ele.image} className="card-img-top rounded-0" alt={ele.productname} />
                                    <div className="card-body p-4">
                                        <h5 className="card-title fs-6 fw-bold mb-3">{ele.productname}</h5>
                                        <p className="card-text graycolor">{ele.productdetails}</p>
                                        <span className='d-flex justify-content-between'>
                                            <p className='redcolor'>Price : {ele.price}</p>
                                            <span className='d-flex gap-1'>
                                                <button onClick={() => addCartHandler(ele)} href="#" className="btn btn-dark rounded-0"><i className="fa-solid fa-cart-shopping fa-sm" style={{ color: "#ffffff" }}></i></button>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Asian" role="tabpanel" aria-labelledby="pills-Asian-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            {loading ? <p>Loading products...</p> : (filterProductsByCategory("Asian").map((ele) =>
                                <div key={ele._id} className="card border-0 rounded-0" style={{ width: "24rem", boxShadow: " 0 6px 20px 1px #ddd " }}>
                                    <img src={ele.image} className="card-img-top rounded-0" alt={ele.productname} />
                                    <div className="card-body p-4">
                                        <h5 className="card-title fs-6 fw-bold mb-3">{ele.productname}</h5>
                                        <p className="card-text graycolor">{ele.productdetails}</p>
                                        <span className='d-flex justify-content-between'>
                                            <p className='redcolor'>Price : {ele.price}</p>
                                            <span className='d-flex gap-1'>
                                                <button onClick={() => addCartHandler(ele)} href="#" className="btn btn-dark rounded-0"><i className="fa-solid fa-cart-shopping fa-sm" style={{ color: "#ffffff" }}></i></button>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Burger" role="tabpanel" aria-labelledby="pills-Burger-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            {loading ? <p>Loading products...</p> : (filterProductsByCategory("Burger").map((ele) =>
                                <div key={ele._id} className="card border-0 rounded-0" style={{ width: "24rem", boxShadow: " 0 6px 20px 1px #ddd " }}>
                                    <img src={ele.image} className="card-img-top rounded-0" alt={ele.productname} />
                                    <div className="card-body p-4">
                                        <h5 className="card-title fs-6 fw-bold mb-3">{ele.productname}</h5>
                                        <p className="card-text graycolor">{ele.productdetails}</p>
                                        <span className='d-flex justify-content-between'>
                                            <p className='redcolor'>Price : {ele.price}</p>
                                            <span className='d-flex gap-1'>
                                                <button onClick={() => addCartHandler(ele)} href="#" className="btn btn-dark rounded-0"><i className="fa-solid fa-cart-shopping fa-sm" style={{ color: "#ffffff" }}></i></button>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Salad" role="tabpanel" aria-labelledby="pills-Salad-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            {loading ? <p>Loading products...</p> : (filterProductsByCategory("Salad").map((ele) =>
                                <div key={ele._id} className="card border-0 rounded-0" style={{ width: "24rem", boxShadow: " 0 6px 20px 1px #ddd " }}>
                                    <img src={ele.image} className="card-img-top rounded-0" alt={ele.productname} />
                                    <div className="card-body p-4">
                                        <h5 className="card-title fs-6 fw-bold mb-3">{ele.productname}</h5>
                                        <p className="card-text graycolor">{ele.productdetails}</p>
                                        <span className='d-flex justify-content-between'>
                                            <p className='redcolor'>Price : {ele.price}</p>
                                            <span className='d-flex gap-1'>
                                                <button onClick={() => addCartHandler(ele)} href="#" className="btn btn-dark rounded-0"><i className="fa-solid fa-cart-shopping fa-sm" style={{ color: "#ffffff" }}></i></button>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Bakery" role="tabpanel" aria-labelledby="pills-Bakery-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            {loading ? <p>Loading products...</p> : (filterProductsByCategory("Bakery").map((ele) =>
                                <div key={ele._id} className="card border-0 rounded-0" style={{ width: "24rem", boxShadow: " 0 6px 20px 1px #ddd " }}>
                                    <img src={ele.image} className="card-img-top rounded-0" alt={ele.productname} />
                                    <div className="card-body p-4">
                                        <h5 className="card-title fs-6 fw-bold mb-3">{ele.productname}</h5>
                                        <p className="card-text graycolor">{ele.productdetails}</p>
                                        <span className='d-flex justify-content-between'>
                                            <p className='redcolor'>Price : {ele.price}</p>
                                            <span className='d-flex gap-1'>
                                                <button onClick={() => addCartHandler(ele)} href="#" className="btn btn-dark rounded-0"><i className="fa-solid fa-cart-shopping fa-sm" style={{ color: "#ffffff" }}></i></button>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Drink" role="tabpanel" aria-labelledby="pills-Drink-tab" tabIndex="0">
                        <div className='d-flex flex-wrap gap-4'>
                            {loading ? <p>Loading products...</p> : (filterProductsByCategory("Drink").map((ele) =>
                                <div key={ele._id} className="card border-0 rounded-0" style={{ width: "24rem", boxShadow: " 0 6px 20px 1px #ddd " }}>
                                    <img src={ele.image} className="card-img-top rounded-0" alt={ele.productname} />
                                    <div className="card-body p-4">
                                        <h5 className="card-title fs-6 fw-bold mb-3">{ele.productname}</h5>
                                        <p className="card-text graycolor">{ele.productdetails}</p>
                                        <span className='d-flex justify-content-between'>
                                            <p className='redcolor'>Price : {ele.price}</p>
                                            <span className='d-flex gap-1'>
                                                <button onClick={() => addCartHandler(ele)} href="#" className="btn btn-dark rounded-0"><i className="fa-solid fa-cart-shopping fa-sm" style={{ color: "#ffffff" }}></i></button>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu