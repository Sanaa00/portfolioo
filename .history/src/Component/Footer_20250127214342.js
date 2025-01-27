import React from 'react'
import Container from './Container'
import { contacts } from '../utility'
import { CiMail } from 'react-icons/ci'
function Footer() {
  return (
    <div className="bg-bgPink flex-col-reverse sm:flex-row text-txColor w-full border-t-2 border-bgPinkSection flex justify-between py-5 sm:h-fit  px-4 lg:px-20">
      {/* <Container> */}
      {/* <div className="flex justify-between py-5 w-full px-32"> */}
      <p>© 2025 All rights reserved.</p>
      <p className=""> sanarizgar34@gmail.com</p>
      {/* </div>/ */}
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
      {/* </div>/ */}
      {/* </Container> */}
    </div>
  )
}

export default Footer
