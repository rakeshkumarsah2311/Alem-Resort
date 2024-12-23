"use client";

const SubmitButton = ({ isLoading }) => {

  return (
    <div>
      <button 
        disabled={isLoading} 
        className={`btn-primary w-full font-federo rounded-md ${isLoading ? "cursor-wait" : "cursor-pointer"}`} 
        type="submit"
      >
        {isLoading ? "Please Wait..." : "Submit"}
      </button>
    </div>
  )
}

export default SubmitButton