import React from 'react'
import Container from './Container'
import { contacts } from '../utility'
import { CiMail } from 'react-icons/ci'
function Footer() {
  return (
    <div className="bg-bgPink text-txColor w-full border-t-2 border-bgPinkSection">
      <Container>
        <div className="grid lg:grid-cols-2 lg:gap-10 justify-between py-8 w-full">
         <p className=""> sanarizgar34@gmail.com</p>
          </div>
          {/* <div className="flex w-full justify-between lg:flex-col sm:text-lg md:items-end">
            {/* <div className="flex w-full  justify-end items-center">
              {contacts.map((con) => {
                return (
                  <a
                    key={con.id}
                    href={con.link}
                    className=" mr-5 sm:ml-0 flex mt-2 items-center"
                  >
                    <div>{con.icon}</div>
                  </a>
                )
              })}
            </div> */}
          {/* </div> */}
        </div>
      </Container>
    </div>
  )
}

export default Footer
