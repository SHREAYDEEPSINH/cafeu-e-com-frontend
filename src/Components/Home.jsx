import React from 'react'
import Navbar from './Navbar'

function Home() {
    return (
        <div className='nav-home-back-img'>
            <Navbar />


            <section>
                <div className='homemain d-flex align-items-center position-relative'>
                    <div className='container' >
                        <div id="carouselExampleIndicators" className="carousel slide" >
                            <div className="carousel-indicators mb-5">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner pt-5 pb-4">


                                <div className="carousel-item active">
                                    <div className="card bg-transparent border-0 w-100" >
                                        <div className="row g-0 align-items-center">
                                            <div className="col-md-6">
                                                <div className="card-body p-0 d-flex flex-column text-center text-md-start gap-4 homefistcard">
                                                    <h5 className="card-title font2">Best In Cafeu</h5>
                                                    <h1 className="fw-bold homeh1">BBQ Chicken <a href="" className='redcolor'>Salad</a> with Creamy Avocado</h1>
                                                    <p className="">Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do eimod <br /> tempor incididunt ut labore et dolore magna aliqua Quis</p>
                                                    <span className='d-flex align-items-center justify-content-center justify-content-md-start'>
                                                        <button className=' rounded border-0 text-white me-5'>Order Now</button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <img width={"100%"} src="https://cafeu-react.netlify.app/img/slider/baner.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card bg-transparent border-0 w-100" >
                                        <div className="row g-0 align-items-center">
                                            <div className="col-md-6">
                                                <div className="card-body p-0 d-flex flex-column text-center text-md-start gap-4 homefistcard">
                                                    <h5 className="card-title font2">Best In Cafeu</h5>
                                                    <h1 className="fw-bold homeh1">BBQ Chicken <a href="" className='redcolor'>Salad</a> with Creamy Avocado</h1>
                                                    <p className="">Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do eimod <br /> tempor incididunt ut labore et dolore magna aliqua Quis</p>
                                                    <span className='d-flex align-items-center justify-content-center justify-content-md-start'>
                                                        <button className=' rounded border-0 text-white me-5'>Order Now</button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <img width={"100%"} src="https://cafeu-react.netlify.app/img/slider/baner.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card bg-transparent border-0 w-100" >
                                        <div className="row g-0 align-items-center">
                                            <div className="col-md-6">
                                                <div className="card-body p-0 d-flex flex-column text-center text-md-start gap-4 homefistcard">
                                                    <h5 className="card-title font2">Best In Cafeu</h5>
                                                    <h1 className="fw-bold homeh1">BBQ Chicken <a href="" className='redcolor'>Salad</a> with Creamy Avocado</h1>
                                                    <p className="">Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed do eimod <br /> tempor incididunt ut labore et dolore magna aliqua Quis</p>
                                                    <span className='d-flex align-items-center justify-content-center justify-content-md-start'>
                                                        <button className=' rounded border-0 text-white me-5'>Order Now</button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <img width={"100%"} src="https://cafeu-react.netlify.app/img/slider/baner.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <div className='rotatdiv d-flex gap-5 d-none d-md-flex'>
                <a href="#" className=' text-danger-hover'>Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>


        </div>
    )
}

export default Home