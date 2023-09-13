"use client";
import React, { useState } from 'react'

function PricingPlan() {
  const [selectedItem, setselectedItem] = useState("monthly");
  const onClickItem = (item) => {
    setselectedItem(item);
  };
  return (
    <div
      className='bg-dracula-purple bg-cover bg-center min-h-screen flex flex-col justify-center items-center'
      id='pricing'
      style={{ backgroundImage: 'url("/Img/blob-haikei3.svg")' }}
    >
      <div className="bg-cover bg-center bg-repeat-x py-8 px-5">
        <div className="container mx-auto">
          <div className="text-center py-4 drop-shadow-xl">
            <p className="text-dracula-orange font-bold">Make Your Business Thrive with Us</p>
            <h2 className="text-3xl font-bold">Yes <span className='text-dracula-green'>PRICE</span>, so <span className='text-dracula-green'>CHEAP</span> la</h2>
          </div>
          {/* <div className="text-center py-4">
            <div className="flex justify-center">
              <div className="w-64 flex">
                <div
                  className={`w-1/2 p-0 cursor-pointer ${selectedItem === "trial"
                    ? "bg-black text-white"
                    : "bg-white"
                    }`}
                  onClick={() => onClickItem("trial")}
                >
                  <a className="block py-3 text-center">Free trial</a>
                </div>
                <div
                  className={`w-1/2 p-0 cursor-pointer ${selectedItem === "monthly"
                    ? "bg-black text-white"
                    : "bg-white"
                    }`}
                  onClick={() => onClickItem("monthly")}
                >
                  <a className="block py-3 text-center">Monthly</a>
                </div>
              </div>
            </div>
          </div> */}
          {selectedItem === "trial" ? (
            <div className="flex justify-center py-4">
              <div className="w-64 m-3 text-center px-4 py-5 bg-white shadow-md rounded-lg">
                <h4 className="text-orange-500 font-bold">Basic</h4>
                <h1 className="text-5xl font-semibold">$0</h1>
                <button className="btn-plan">Get 30-days Trial</button>
                <p className="my-4">
                  Description lorem ipsum same with platinum (?) version with
                  30 days
                </p>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Interactive menu</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Table management</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Dine in management</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Take away management</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Restaurant report</a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center py-4">
              <div className="w-64 m-3 text-center px-4 py-5 bg-white shadow-md rounded-lg">
                <h4 className="text-dracula-selection font-bold">Basic</h4>
                <h1 className="text-5xl font-semibold">$15</h1>
                <h5 className="mb-4">Monthly Subscription</h5>
                <button className="btn-plan">Get Basic Plan</button>
                <p className="my-4">
                  Description lorem ipsum same with platinum (?) version with
                  30 days
                </p>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Mencatat barang masuk</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Mencatat barang keluar</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-gray-700">Mencatat hasil keuntungan</a>
                  </div>
                </div>
                {/* <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-gray-700">Take away management</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-gray-700">Restaurant report</a>
                  </div>
                </div> */}
              </div>
              <div className="w-64 m-3 text-center px-4 py-5 bg-white shadow-md rounded-lg">
                <h4 className="text-dracula-orange font-bold">Business</h4>
                <h1 className="text-5xl font-semibold">$50</h1>
                <h5 className="mb-4">Monthly Subscription</h5>
                <button className="btn-plan">Get Business Plan</button>
                <p className="my-4">
                  Description lorem ipsum same with platinum (?) version with
                  30 days
                </p>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Mencatat barang masuk</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Mencatat barang keluar</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Mencatat hasil keuntungan</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-gray-700">Dapat menganalisa hasil penjualan dengan CHART</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-gray-700">Support 7x24 Jam</a>
                  </div>
                </div>
              </div>
              <div className="w-64 m-3 text-center px-4 py-5 bg-white shadow-md rounded-lg">
                <h4 className="text-dracula-selection font-bold">Entrepreneur</h4>
                <h1 className="text-5xl font-semibold">$100</h1>
                <h5 className="mb-4">Monthly Subscription</h5>
                <button className="btn-plan">Get Entrepreneur Plan</button>
                <p className="my-4">
                  Description lorem ipsum same with platinum (?) version with
                  30 days
                </p>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Mencatat barang masuk dan keluar</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Mencatat Keuntungan</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Dapat menganalisa hasil penjualan dengan CHART</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Support 7x24 Jam</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">Export data ke Excel</a>
                  </div>
                </div>
                <div className="my-3">
                  <div className="flex items-center">
                    <img src="/assets/pricing/check.png" alt="Check" />
                    <a className="ml-2 text-black">AI Prediksi penghasilan</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PricingPlan