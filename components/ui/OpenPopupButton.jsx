"use client"

import { useRouter } from "next/navigation"


const OpenPopupButton = () => {

  const router = useRouter()

  const handleClick = () => {
    router.push("?book-demo", { scroll : false })
  }

  return (
    <button
      className="btn-primary"
      onClick={handleClick} 
    >
      Book Now
    </button>
  )
}

export default OpenPopupButton