import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

function Cart() {

  const [cartProducts, setCartProducts] = useState([])
  const [lsData, setLsData] = useState(
    JSON.parse(localStorage.getItem("loginuser")) || {}
  );

  useEffect(() => {

    if (!lsData.token) {
      alert("You must log in to add items to the cart!");
      Navigate("/login");
      return;
    }
    axios
      .get("https://cafue-e-com-backend.vercel.app/cart", {
        headers: {
          Authorization: `Bearer ${lsData.token}`,
        },
      })
      .then((res) => {
        setCartProducts(res.data.carts)
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
      });
  }, []);
  console.log(cartProducts)



  const deleteCartHandler = (id) => {
    const config = {
      headers: {
        authorization: `Bearer ${lsData.token}`,
      },
    };

    axios
      .delete(`https://cafue-e-com-backend.vercel.app/cart/deletecart/${id}`, config)
      .then((res) => {
        setCartProducts(cartProducts.filter((cart) => cart._id !== id));
        alert("Cart deleted successfully!");
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
      });
  };


  const totalPrice = cartProducts.reduce((acc, item) => {
    return acc + item.productPrice * (item.quantity || 1);
  }, 0);


  return (
    <>
      <Navbar />
      <div className="tab-panel fade show active my-4" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
        <div className='container'>
          <h2 className='text-dark mb-3'>Cart Items</h2>
          <div className='d-flex flex-wrap justify-content-center gap-3'>
            {cartProducts.map((ele, index) =>
             
                <div key={index} className="card border-0 rounded-0 mb-3 product-cart-card" style={{ boxShadow: " 0 6px 20px 1px #ddd " }}>
                  <div className="row g-0 h-100">
                    <div className="col-6 h-100">
                      <img src="https://cafeu-react.netlify.app/img/product/1.png" className="img-fluid rounded-start h-100" alt="..." />
                    </div>
                    <div className="col-6 d-flex">
                      <div className="card-body d-flex flex-column align-items-end justify-content-end">
                        <h5 className="card-title fs-6 fw-bold mb-3">{ele.productName}</h5>
                        <p>Price : {ele.productPrice}</p>

                        <span className='d-flex gap-1'>
                          <button onClick={() => deleteCartHandler(ele._id)} href="#" className="btn btn-dark rounded-0"><i className="fa-solid fa-trash" style={{ color: "#ffffff" }}></i></button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

            )}
          </div>
          <div className=' float-end'>
            <h2>Total {totalPrice} </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart