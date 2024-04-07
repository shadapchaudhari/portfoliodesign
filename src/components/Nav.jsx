import React from 'react'

const Nav = () => {
    return (
        <>
            <section>
                <div className="Navbrand bg-black text-white md:flex justify-between h-full md:h-14 p-4">
                    <div className='flex'>
                        <div className="box h-14 w-14 rounded-3xl">
                            <img src="public/img.png" alt="" />
                        </div>
                            <h1 className='ml-12'>INBIO</h1>
                    </div>
                    <ul className='md:flex md:space-x-12 mt-3 md:mt-0 md:text-sm text-xs' >
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">FEATURES</a></li>
                        <li><a href="#">PORTFOLIO</a></li>
                        <li><a href="#">RESUME</a></li>
                        <li><a href="#">CLIENT</a></li>
                        <li><a href="#">PRICING</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </section>


        </>
    )
}

export default Nav