import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../navbar/navbar'

import './cart.css'
function Cart() {
  const cart = useSelector(state => state.cart);
  console.log(cart)
  const [chosenMethod, setChosenMethod] = useState('Mpesa');
const [btnClass, setBtnClass] = useState('')
  useEffect(() => {
        if (chosenMethod === 'Mpesa') {
            setBtnClass('');
        } else if (chosenMethod === 'Card') {
            setBtnClass('button-display');
        }
    }, [chosenMethod]);

    const chooseMethod = (method) => {
        setChosenMethod(method);
    };
  return (
    <>
    <Navbar></Navbar>
    <div className=''>Cart
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
        <div className='flex flex-col md:flex-row shadow-md my-10'>
          <div className='w-full md:w-1/2 bg-white px-10 py-10'>

        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Order Summary</h1>
          <h2 class="font-semibold text-2xl">3 Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
         
         
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
     

        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div class="flex w-2/5">
            <div class="w-20">
              <img class="h-24" src="https://images.unsplash.com/photo-1605880980331-20a711b27338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvbmV5fGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">Manuka Honey</span>
              <span class="text-green-500 text-xs">QTY:2</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs"><i className='bx bx-trash'  ></i></a>
            </div>
          </div>
  
        
          <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
        </div>

      

        <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
         
          Continue Shopping
        </a>
      </div>

      <div id='summary' className='w-full md:w-1/2 px-10 py-10'>
        <h1 class="font-semibold text-2xl border-b pb-8">Personal Information</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items 3</span>
          <span class="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Delivery Details</label>
          {/* <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard Delivery - $10.00</option>
          </select> */}
        </div>
        <div>
          <label class=" mt-3 font-medium inline-block mb-3 text-sm uppercase">Location:</label>
          <input type="text" name="" id="" className="block w-full p-2 text-yellow-600 border border-black rounded-md focus:outline-none focus:border-yellow-500" placeholder='Enter location'/>
        </div>
        <div>
          <label class=" mt-3 font-medium inline-block mb-3 text-sm uppercase">Delivery Note:</label>
          <textarea type="text" name="" id="" className="block w-full p-2 text-yellow-600 border border-black rounded-md focus:outline-none focus:border-yellow-500" placeholder='Notes about delivery'/>
          <p className='bg-green-100 p-2 mt-5 rounded'>NB: To ensure the best experience with our honey products, please provide clear notes during your order. This could include specific delivery instructions based on your location, preferences for the size or type of honey product. For example, if you’re ordering our honey jars, you might specify your preferred color for the jar’s lid. Your detailed notes help us personalize and improve your honey shopping experience. Enjoy the sweetness!</p>
        </div>
        <div className='py-10'>
            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Payment method</label>
            <div className="flex">
                <div className={`w-1/2 payment-method flex items-center p-2 bg-white border-b border-black-200  cursor-pointer ${chosenMethod === 'Mpesa' ? 'border-b-2 border-t-0 border-r-0 border-l-0 border-black' : ''}`} onClick={() => chooseMethod('Mpesa')}>
                    <h1>Mpesa</h1>
                </div>
                <div className={`w-1/2 payment-method flex items-center p-2 bg-white border-b border-black-200 cursor-pointer ${chosenMethod === 'Card' ? 'border-b-2 border-t-0 border-r-0 border-l-0 border-black' : ''}`} onClick={() => chooseMethod('Card')}>
                    <h1>PayBill</h1>
                </div>
            </div>
            {chosenMethod === 'Mpesa' && (
              <small>Ensure your phone is near you. You will recieve a prompt on the number you provided during registration. Enter Mpesa pin to authorize the payment</small>
                // Add your Mpesa related content here
            )}
            {chosenMethod === 'Card' && (
              <div className='paybill'>
                <div>
                <p>Paybill number : 123456</p>
                <p>Account number: IcikaMax</p>
                </div>
              </div>
                // Add your Card related content here
            )}
        </div>
        {/* <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Confirm</button> */}
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <button className={`bg-yellow-600 font-semibold hover:bg-yellow-500 py-3 text-sm text-white uppercase w-full ${btnClass}`}>Purchase</button>
        </div>
      </div>

    </div>
  </div>
    </div>
    </>
  )
}

export default Cart