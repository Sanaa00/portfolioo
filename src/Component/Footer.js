import React from 'react'
import Container from './Container'
import  {contacts}  from '../utility';

function Footer() {
  return (
    <div className='bg-orange text-grayy w-full'>
          
            <Container>
                 <div className='grid lg:grid-cols-2 lg:gap-10 justify-between py-8 w-full'>
                      <div className='flex flex-col w-full'>
                          <p className='text-lg font-bold'>Sana Rizgar </p>
                          <p className='text-lg'>Front End Web Developer </p>
                      </div>
                      <div className='flex w-full justify-between lg:flex-col sm:text-lg md:items-end'>
                           <div className='flex w-full  justify-between items-center'>
                                {contacts.map((con) => {
                                     return <a key={con.id} href={con.link} className=' mr-5 sm:ml-0 flex mt-2 items-center'>
                                          <div>{con.icon}</div>
                                          <p className='ml-2'>{ con.name}</p>
                                     </a>
                                })}
                           </div>
                          
                      </div>
                 </div>
        </Container>
    </div>
  )
}

export default Footer
