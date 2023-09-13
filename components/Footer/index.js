"use client";
import React from 'react'
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="bg-white p-8 relative flex flex-row justify-between font-montserrat">
      <div className="w-1/2">
        <div className="mb-4">
          <h3 className="text-black font-bold text-2xl">Business Inquiries</h3>
          <div className="flex flex-col">
            <p className="text-black text-sm mb-2">Phone: ID (+62) 812 1234 3199</p>
            <p className="text-black text-sm">Email: hoseayoarana@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-4">
          <h3 className="text-black font-bold text-2xl">FOLLOW US</h3>
          <div className="flex flex-row">
            <a
              href="https://www.facebook.com/hosea.yoarana"
              target="_blank"
              className="mr-4"
            >
              <Icon icon="ic:outline-facebook" className="text-2xl text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/hosea-yoarana/"
              target="_blank"
              className="mr-4"
            >
              <Icon icon="mdi:linkedin" className="text-2xl text-black" />
            </a>
            <a
              href="https://www.instagram.com/hosea_yoarana/?hl=en"
              target="_blank"
              className="mr-4"
            >
              <Icon icon="mdi:instagram" className="text-2xl text-black" />
            </a>
            <a href="https://twitter.com/HoseaYoarana" target="_blank" className="mr-4">
              <Icon icon="ri:twitter-line" className="text-2xl text-black" />
            </a>
            <a href="https://github.com/hosea100" target="_blank">
              <Icon icon="mdi:github" className="text-2xl text-black" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute w-77% h-3 bg-gray-400 top-0" />
    </div>
  )
}

export default Footer