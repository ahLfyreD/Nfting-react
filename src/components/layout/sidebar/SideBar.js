import './SideBar.css'
import * as BsIcons from "react-icons/bs";
import { MenuData } from '@components/home/menu/MenuData'
import { ProfileData } from '@components/home/menu/ProfileData'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import { MenuData } from '../../home/menu/MenuData'
// import { ProfileData } from '../../home/menu/ProfileData'
import { useState } from 'react'

const SideBar = () => {
    
    const [open, setOpen] = useState(true);

  return (
      <div className={`w-260 h-full position-sticky z-10 bg-primary relative`}>
          sidebar

      </div>
//     <div className={`${open ? 'width-72' : 'width-20'} 
//     duration-500 h-100vh sticky z-10 bg-light relative`}>
    
//     <div className='d-flex gap-x-4 align-items-center bg-dark h-24 position-sticky top-0'>
//       <img src="@asset/images/icon.svg" 
//            className={`cursor-pointer duration-500`}/>
      
//       <h1 className={`text-purple origin-left font-medium text-2xl ${!open && "scale-0"}`}>NFTing</h1>
//       <BsIcons.BsArrowLeftCircle 
//     className={`position-absolute z-10 cursor-pointer 
//               text-3xl -right-3 top-8 border-2 border-dark ${!open && "rotate-180"}`}
//     onClick={() => setOpen(!open)}/>
//     </div>
//     <div className={`h-5/6 bg-dark overflow-scroll`}>
//     <ul className=''>
//         {MenuData.map((item, index) => {
//           return (
//             <li key={index} className='block cursor-pointer p-2 mt-4 mb-4 hover:border-right-solid-dark'>
//               <Link to={item.path} className="text-black-300 text-xl gap-x-5 flex items-center hover:text-dark">
//                 <i>{item.icons}</i>  
//                 <span className={`${!open && "scale-0"} origin-left duration-400`}>{item.title}</span>
//               </Link>
//             </li>

//           )
//         })}
//         <hr className='divider' />
//         {ProfileData.map((item, index) => {
//           return (
//             <li key={index} className="cursor-pointer p-2 mt-4 hover:border-right-solid-dark">
//               <Link to={item.path} className="text-black-300 text-xl gap-x-5 flex items-center hover:text-dark">
//                 <i>{item.icons}</i>  
//                 <span className={`${!open && "hidden"} origin-left duration-600`}>{item.title}</span>
//               </Link>
//             </li>

//           )
//         })}
//     </ul>
//     </div>
    
//   </div>
    
  )
}

export default SideBar