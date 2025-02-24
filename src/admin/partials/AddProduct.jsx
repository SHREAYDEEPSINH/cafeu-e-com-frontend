import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function AddProduct() {
    const navigate = useNavigate();
    const [addProduct, setAddProduct] = useState({
        image: "",
        productname: "",
        productdetails: "",
        price: "",
        category: "",
    });

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



    function submitHandler(e) {
        e.preventDefault();

        if (!addProduct.productname || !addProduct.productdetails || !addProduct.price || !addProduct.category) {
            alert("All fields are required!");
            return;
        }

        axios
            .post("https://cafue-e-com-backend.onrender.com/product/insertProductData", addProduct)
            .then((res) => {
                setAllProducts([...allProducts, res.data]);
                confirm("Product Added")
                console.log("product added")
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <>
            <div class="container mt-5">
                <div class="card shadow p-4">
                    <h2 class="text-center">Add Product</h2>
                    <form onSubmit={submitHandler}  encType="multipart/form-data">
                        <div class="mb-3">
                            <label class="form-label">Product Image:</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Product Image Link"
                                name="image"
                                value={addProduct.image}
                                onChange={(e) =>
                                    setAddProduct({ ...addProduct, image: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Product Name:</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Product Name"
                                name="productname"
                                value={addProduct.productname}
                                onChange={(e) =>
                                    setAddProduct({ ...addProduct, productname: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Product Details:</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter Product Details"
                                name="productdetails"
                                value={addProduct.productdetails}
                                onChange={(e) =>
                                    setAddProduct({ ...addProduct, productdetails: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Price:</label>
                            <input
                                type="number"
                                class="form-control"
                                placeholder="Enter Product Price"
                                name="price"
                                value={addProduct.price}
                                onChange={(e) =>
                                    setAddProduct({ ...addProduct, price: e.target.value })
                                }
                                required
                            />
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Category:</label>
                            <select
                                class="form-select"
                                value={addProduct.category}
                                onChange={(e) =>
                                    setAddProduct({ ...addProduct, category: e.target.value })
                                }
                                name="category"
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Asian">Asian</option>
                                <option value="Burger">Burger</option>
                                <option value="Salad">Salad</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Drink">Drink</option>
                            </select>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary">
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default AddProduct;
