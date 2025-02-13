import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


function Navbar() {


    const handleLogout = () => {
        localStorage.removeItem("loginuser"); // Remove user session
        navigate("/login"); // Redirect to login page
    };


    return (
        <div >
            <nav className="navbar navbar-expand">
                <div className="container d-flex align-items-end">
                    <Link className="navbar-brand" to="/"><img src="src/Assets/logo.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul className=" navbar-nav me-auto mb-2 mb-lg-0 gap-3 fw-medium d-flex align-items-center">
                            {/* <Navbarprops  title="Home" data1="Home1" data2="Home2" data3="Home3" data4="Home4" data5="Home5" data6="Home6" data7="Home7"/>
                            <Navbarprops  title="About Us" data1="About" data2="About Two" />
                            <Navbarprops  title="Menu" />
                            <Navbarprops  title="Blog" />
                            <Navbarprops  title="Pages" />
                            <Navbarprops  title="Contact" /> */}
                            <li className='me-4 ms-1'>
                                <i className="bi bi-search"></i>
                            </li>
                            <li className='d-md-flex d-none  gap-3 align-items-center'>
                                <img src="src/Assets/callicon.png" alt="" />
                                <h6 className='m-0'> +880 123 456 789</h6>
                            </li>
                            <Link to="/cart" className=' text-danger'><i className="fa-solid fa-cart-shopping fs-4"></i></Link>
                            {/* <Link to="/login" className=' text-danger'><li><i className="fa-regular fa-user fs-4" ></i></li></Link> */}
                            <div className="dropdown">
                                <button className="btn border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <li><i className="fa-regular fa-user fs-4 text-danger" ></i></li>
                                </button>
                                <ul className="dropdown-menu dropdown-width dropdown-menu-end p-1 bg-black bg-opacity-25">
                                    <li><Link to="/login" className='dropdown-item rounded-2 text-decoration-none text-dark'>LogIn</Link></li>
                                    <li><Link to="/login" onClick={handleLogout} className='dropdown-item rounded-2  text-decoration-none text-dark'>Logout</Link></li>
                                </ul>
                            </div>
                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar