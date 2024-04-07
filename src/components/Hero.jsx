import React from 'react'

const Hero = () => {
  return (
    <>
    <section>
        <div className="Hero bg-black text-white">
            <div className="md:grid grid-cols-2 h-screen">
                <div className='md:ml-10 md:mt-20'>
                    <h2>W E L C O M E   T O   M Y   W O R L D</h2>
                    <h1 className='text-5xl font-bold md:mt-7 mt-3'>Hi, I'm <span className='text-red-500'>Jone Lee</span><br />a Developer.</h1>
                    <p className='md:mt-7 mt-3'> I use animation as a third dimention by which to simplify experiances and <br />kuiding thro each and every interaction. I'm not adding motion just to spruce <br />things up, but doing it in ways that.</p>
                </div>
                <div>
                    <img src="public/img.png" alt="Logo" />
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Hero