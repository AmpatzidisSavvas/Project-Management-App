import { Priority } from "@/state/api"
import ReusablePriorityPage from "../reusablePriorityPage"
import React from 'react'


const Backlog = () => {
    return (
      <ReusablePriorityPage priority={Priority.Backlog} />
    )
  }
  
  export default Backlog