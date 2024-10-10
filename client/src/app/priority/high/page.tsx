import { Priority } from "@/state/api"
import ReusablePriorityPage from "../reusablePriorityPage"
import React from 'react'


const High = () => {
    return (
      <ReusablePriorityPage priority={Priority.High} />
    )
  }
  
  export default High