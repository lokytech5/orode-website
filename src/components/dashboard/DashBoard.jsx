import React, { useState } from 'react'
import DashBoardList from './DashBoardList';

export default function DashBoard(props) {
  const [services, setServices] = useState([]);

  // const dashboardDetails = (dashboarddetail) => {
  if (services === 0) {
    return (
      <h2>Dashboard is Empty</h2>
    )
  }
  //   console.log(dashboarddetail);
  // }

  return (
    <>
      <h1>DashBoard Page</h1>

      {console.log(setServices)}
      {console.log(services)}



    </>
  )
}
