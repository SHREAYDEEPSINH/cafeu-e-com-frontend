import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function ViewProduct() {
    const navigate = useNavigate();
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios
            .get("https://cafue-e-com-backend.onrender.com/product/getAllProducts")
            .then((res) => {
                setAllProducts(res.data.productData)
            })
            .catch((err) => {
                console.error(err.response?.data || err.message);
            });
    }, []);


    const deleteHandler = (id) => {
        axios
            .delete(`https://cafue-e-com-backend.onrender.com/product/deleteData/${id}`)
            .then((res) => {
                setAllProducts(allProducts.filter((product) => product._id !== id));
                alert("Product deleted successfully!");
            })
            .catch((err) => {
                console.error(err.response?.data || err.message);
            });
    };


    return (
        <>
            <div class="mt-5">
                <h2 class="text-center">Product Data</h2>
                <table class="table table-bordered table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Details</th>
                            <th>Product Price</th>
                            <th>Product Category</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map((ele) =>
                            <tr key={ele._id}>
                                <td><img width={70} src={ele.image} alt="" /></td>
                                <td>{ele.productname}</td>
                                <td>{ele.productdetails}</td>
                                <td>{ele.price}</td>
                                <td>{ele.category}</td>
                                <td><button onClick={() => deleteHandler(ele.id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ViewProduct;
