"use client";

import DatePicker from "./DatePicker";
import {  useState } from "react";
import Button from "@/components/ui/Button";
import Form from "./Form";

import SuccessMessage from "./SuccessMessage";
import ChatOnWhatsAppButton from "../ui/ChatOnWhatsAppButton";


const action = {
  SHOW_CALENDAR : "SHOW_CALENDAR",
  SHOW_FORM : "SHOW_FORM",
  SHOW_SUCCESS : "SHOW_SUCCESS"
}

export default function BookingSystem() {

  const [ selectedDate, setSelectedDate ] = useState(new Date());

  const [ currentAction, setCurrentAction ] = useState(action.SHOW_CALENDAR)


  const showSuccessMessage = () => {
    setCurrentAction(action.SHOW_SUCCESS)
  }

  const handleButtonClick = () => {
    if (currentAction === action.SHOW_CALENDAR) {
      setCurrentAction(action.SHOW_FORM)
    } else {
      setCurrentAction(action.SHOW_CALENDAR)
    }
  }

  return (
    <div className="space-y-4 flex-center flex-col">

      <h3 className="text-3xl">Book Now</h3>

      { currentAction === action.SHOW_CALENDAR && <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />}

      { currentAction === action.SHOW_FORM && <Form selectedDate={selectedDate} showSuccessMessage={showSuccessMessage} />}

      { currentAction === action.SHOW_SUCCESS && <SuccessMessage /> }

      {
        currentAction !== action.SHOW_SUCCESS && <Button onClick={handleButtonClick} className={`font-federo btn-black`}>
          {currentAction === action.SHOW_CALENDAR ? "Next" : "Go Back"}
        </Button>
      }

      <ChatOnWhatsAppButton />
    </div>
  )
}
