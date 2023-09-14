"use client";
import React, { useState } from 'react'
import { Icon } from "@iconify/react";

function PricingPlan() {
  const [selectedItem, setselectedItem] = useState("monthly");
  const onClickItem = (item) => {
    setselectedItem(item);
  };
  return (
    <div
      className='bg-dracula-purple bg-cover bg-left min-h-screen flex flex-col justify-center items-center sm:bg-center font-montserrat overflow-hidden'
      id='pricing'
      style={{ backgroundImage: 'url("/Img/blob-haikei3.svg")' }}
    >
      <div className="bg-cover bg-center bg-repeat-x py-8 px-5">
        <div className="container mx-auto">
          <div className="text-center py-4 drop-shadow-xl">
            <p className="text-dracula-orange font-bold">Make Your Business Thrive with Us</p>
            <h2 className="text-3xl font-bold">Yes <span className='text-dracula-green'>PRICE</span>, so <span className='text-dracula-green'>CHEAP</span> la</h2>
          </div>
          <div className="flex flex-col justify-center py-4 sm:flex-row">
            <div className="w-96 m-5 text-center px-5 py-6 bg-white shadow-md rounded-lg">
              <h4 className="text-dracula-selection font-bold">Basic</h4>
              <h1 className="text-5xl font-semibold">$15</h1>
              <h5 className="mb-4">Monthly Subscription</h5>
              <button className="bg-dracula-purple hover:bg-dracula-cyan text-white font-bold py-2 px-4 border-b-4 border-dracula-comment hover:border-dracula-comment rounded">Get Basic Plan</button>
              <p className="my-4">
                Description lorem ipsum same with platinum (?) version with
                30 days
              </p>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Record incoming inventory</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Record outgoing items</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Record profit gains</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-gray-500">
                  <Icon
                    icon="material-symbols:cancel-outline"

                  />
                  <a className="ml-2">Analyze sales with CHARTS</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-gray-500">
                  <Icon
                    icon="material-symbols:cancel-outline"

                  />
                  <a className="ml-2 ">24/7 Support</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-gray-500">
                  <Icon
                    icon="material-symbols:cancel-outline"
                  />
                  <a className="ml-2">Export data to Excel</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-gray-500">
                  <Icon
                    icon="material-symbols:cancel-outline"
                  />
                  <a className="ml-2">AI Generated revenue forecasting</a>
                </div>
              </div>
            </div>
            <div className="w-96 m-5 text-center px-5 py-6 bg-white shadow-md rounded-lg scale-100 sm:scale-110">
              <h4 className="text-dracula-orange font-bold">Business</h4>
              <h1 className="text-5xl font-semibold">$50</h1>
              <h5 className="mb-4">Monthly Subscription</h5>
              <button className="bg-dracula-purple hover:bg-dracula-cyan text-white font-bold py-2 px-4 border-b-4 border-dracula-comment hover:border-dracula-comment rounded">Get Business Plan</button>
              <p className="my-4">
                Description lorem ipsum same with platinum (?) version with
                30 days
              </p>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Record incoming inventory</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Record outgoing items</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Record profit gains</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Analyze sales with CHARTS</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">24/7 Support</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-gray-500">
                  <Icon
                    icon="material-symbols:cancel-outline"
                  />
                  <a className="ml-2">Export data to Excel</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-gray-500">
                  <Icon
                    icon="material-symbols:cancel-outline"
                  />
                  <a className="ml-2">AI Generated revenue forecasting</a>
                </div>
              </div>
            </div>
            <div className="w-96 m-5 text-center px-5 py-6 bg-white shadow-md rounded-lg">
              <h4 className="text-dracula-selection font-bold">Entrepreneur</h4>
              <h1 className="text-5xl font-semibold">$100</h1>
              <h5 className="mb-4">Monthly Subscription</h5>
              <button className="bg-dracula-purple hover:bg-dracula-cyan text-white font-bold py-2 px-4 border-b-4 border-dracula-comment hover:border-dracula-comment rounded">Get Entrepreneur Plan</button>
              <p className="my-4">
                Description lorem ipsum same with platinum (?) version with
                30 days
              </p>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Record incoming inventory</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Record outgoing items</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Record profit gains</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Analyze sales with CHARTS</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">24/7 Support</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">Export data to Excel</a>
                </div>
              </div>
              <div className="my-3">
                <div className="flex items-center text-green-500">
                  <Icon
                    icon="zondicons:checkmark-outline"
                  />
                  <a className="ml-2">AI Generated revenue forecasting</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPlan