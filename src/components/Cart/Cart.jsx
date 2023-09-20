import React from 'react'
import Navbar from '../navbar/navbar'
import './cart.css'
function Cart() {
  return (
    <>
    <Navbar></Navbar>
    <div className=''>Cart
      <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">3 Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5">
            <div class="w-20">
              <img class="h-24" src="https://images.unsplash.com/photo-1605880980331-20a711b27338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvbmV5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">Manuka Honey</span>
              <span class="text-red-500 text-xs">Raw</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
          

            <input class="mx-2 border text-center w-8" type="text" value="1"/>

           
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
          <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
        </div>

        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div class="flex w-2/5">
            <div class="w-20">
              <img class="h-24" src="https://images.unsplash.com/photo-1605880980331-20a711b27338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvbmV5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">Manuka Honey</span>
              <span class="text-red-500 text-xs">Raw</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
           

            <input class="mx-2 border text-center w-8" type="text" value="1"/>

          </div>
          <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
          <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
        </div>

        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div class="flex w-2/5">
            <div class="w-20">
              <img class="h-24" src="https://images.unsplash.com/photo-1605880980331-20a711b27338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvbmV5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">Manuka Honey</span>
              <span class="text-red-500 text-xs">Raw</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <input class="mx-2 border text-center w-8" type="number" value="1"/>

          
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
          <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
        </div>

        <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
         
          Continue Shopping
        </a>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items 3</span>
          <span class="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Delivery</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard Delivery - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Payment method</label>
          <div class="flex items-center p-2 bg-white border border-gray-200 rounded">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-500">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
  </svg>
  <h1>Mpesa</h1>
</div>

        </div>
        {/* <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Confirm</button> */}
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <button class="bg-yellow-600 font-semibold hover:bg-yellow-500 py-3 text-sm text-white uppercase w-full">Purchase</button>
        </div>
      </div>

    </div>
  </div>
    </div>
    </>
  )
}

export default Cart