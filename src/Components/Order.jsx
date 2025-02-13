import React from 'react'

function Order() {
    return (
        <>
            <div className='container py-5 my-5'>
                <div className="card mb-3 order-back-img d-flex justify-content-center" style={{ width: "100%", height: "400px" }}>
                    <div className="row g-5 gap-3 px-0 px-lg-5 d-flex justify-content-center align-items-center">
                        <div className="col-md-6 ">
                            <div className="card-body text-center text-sm-start">
                                <h5 className="card-title fs-1 fw-bold ">Simple Way to Order <br /> Your Food Faster
                                </h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius-
                                    mod tempor incididunt ut labore et dolore magna aliqua. Q ipsum
                                    suspendisse ultrices gravida. Risus commodo viverra maeceas
                                    accumsan lacus vel facilisis</p>
                            </div>
                        </div>
                        <div className="col-md-4 d-md-flex gap-3 d-none align-items-center justify-content-center">
                            <img width={"60%"} src="https://codebasket.xyz/template/cafeu/cafeu-html/assets/img/app/app-1.png" className="img-fluid " alt="..." />
                            <img width={"60%"} src="https://codebasket.xyz/template/cafeu/cafeu-html/assets/img/app/app-2.png" className="img-fluid " alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order