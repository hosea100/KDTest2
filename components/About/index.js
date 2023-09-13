import React from 'react'

function About() {
  return (
    <div
      className='relative bg-dracula-foreground bg-cover bg-center h-screen min-h-screen flex flex-col justify-center font-montserrat' id='about'
      style={{ backgroundImage: 'url("/Img/blobfull.svg")' }}
    >
        <div className='flex flex-col text-skin-base-light items-center mx-12 md:mt-64 mt-0 md:ms-96 grow-0'>
          <p className='break-normal text-lg text-center lg:w-1/2 w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='flex flex-col text-skin-base-light items-center ms-24 my-12 mx-12 md:items-start md:text-center'>
          <p className='italic text-xl'>
            "Excepteur sint occaecat cupidatat non proident,"
          </p>
        </div>
        <div className='flex flex-col items-center md:items-start w-1/2 ms-24 my-12 mx-12 md:w-1/5'>
          <img 
          src='/Img/undraw_visual_data_re_mxxo.svg' 
          alt='theImg' 
          width='100%'
          />
        </div>
      </div>
  )
}

export default About