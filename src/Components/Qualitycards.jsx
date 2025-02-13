import React from 'react'
import Qualitycardsprops from './Qualitycardsprops'

function Qualitycards() {
    return (
        <section>
            <div className='container'>
                <div className='d-flex my-5 py-5 gap-3 justify-content-center align-items-center p-0 flex-wrap'>
                    <Qualitycardsprops img="Quality" title="100% Swiss Quality" />
                    <Qualitycardsprops img="Organic" title="Organic Production" />
                    <Qualitycardsprops img="Certified" title="Food Law Certified" />
                    <Qualitycardsprops img="Foodproduction" title="Food Production" />
                </div>
            </div>
        </section>
    )
}

export default Qualitycards