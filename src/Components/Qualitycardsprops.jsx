import React from 'react'

function Qualitycardsprops(props) {
    return (
        <>

            <div className="card p-2 text-center rounded-0 d-flex align-items-center" style={{ width: 306, height: 346 }}>
                <div className='h-25 my-4 back-circle'>
                    <img height={"100%"} src={"/" + props.img + ".png"} className="card-img-top object-fit-contain" alt="..." />
                </div>
                <div className="card-body qulity-back-img d-flex flex-column pt-0 justify-content-between">
                    <h5 className="card-title fw-bold">{props.title}</h5>
                    <p className="card-text graycolor">Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua</p>
                    <h6 className='graycolor fw-bold discover d-flex justify-content-center align-items-center'>Discover More</h6>
                </div>
            </div>

        </>
    )
}

export default Qualitycardsprops