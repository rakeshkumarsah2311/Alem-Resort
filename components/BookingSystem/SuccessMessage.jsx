import React from 'react'

const SuccessMessage = () => {
  return (
    <div className='space-y-3 bg-green-100/70 rounded-md py-5 px-1.5'>
      <h2 className='text-2xl'>Thank you!</h2>
      <div className='space-y-1 text-green-900'>
        <p>We have recieved your Booking Request. </p>
        <p className='' >We will Reach You on your provided Phone Number and email Shortly</p>
      </div>
    </div>
  )
}

export default SuccessMessage