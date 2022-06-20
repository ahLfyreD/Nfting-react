import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import './MenuToggle.css'

const MenuToggle = ( {toggle} ) => {
  return (
    <>
      <div className="toggle-btn" onClick={ toggle }>
        {/* <AiIcons.AiOutlineLeft /> */}
        <BsIcons.BsArrowRightCircle />
        {/* <FaIcons.FaBars /> */}
      </div>
    </>
  )
}

export default MenuToggle
