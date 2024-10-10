import { Priority } from "@/state/api"
import ReusablePriorityPage from "../reusablePriorityPage"
import React from 'react'


const Low = () => {
    return (
      <ReusablePriorityPage priority={Priority.Low} />
    )
  }
  
  export default Low