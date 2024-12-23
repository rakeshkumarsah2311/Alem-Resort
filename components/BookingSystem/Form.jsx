"use client";

import { useState } from "react";
import SubmitButton from "./SubmitButton";



const Form = ({ selectedDate, showSuccessMessage }) => {

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      setIsLoading(true)
      const form = e.target;

      console.log({ form });
      
      const formData = new FormData(form)


      // console.log(JSON.stringify({
      //   fullName : formData.get("full-name"),
      //   email : formData.get("email"),
      //   phoneNumber : formData.get("phone-number"),
      //   bookingDate : formData.get("booking-date")
      // }));
      

      const resp = await fetch("https://alem-travel.vercel.app/api/book-tour", {
        method : "POST",
        body : JSON.stringify({
          fullName : formData.get("full-name"),
          email : formData.get("email"),
          phoneNumber : formData.get("phone-number"),
          bookingDate : formData.get("booking-date")
        })
      })

      
      const data = await resp.json()

      

      if (!data.success) {
        alert("Failed to Submit")
        return
      }

      // successful submission

      showSuccessMessage()
    } catch (error) {
      console.log({ error });
      
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <form className="text-left space-y-4" onSubmit={handleSubmit}>

        <div className="space-y-1.5">
          <label htmlFor="full-name">Full Name</label>
          <input
            name="full-name"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            name="phone-number"
            placeholder="Phone Number"
            required
          />
        </div>

        <input type="text" name="booking-date" aria-hidden hidden defaultValue={selectedDate} />

        <SubmitButton isLoading={isLoading} />
      </form>
    </>
  )
}

export default Form