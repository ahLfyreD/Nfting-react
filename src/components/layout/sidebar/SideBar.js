import "./SideBar.css";
import * as BsIcons from "react-icons/bs";
import { MenuData } from "@components/home/menu/MenuData";
import { Link } from "react-router-dom";
import icon from "../../../asset/images/icon.svg";
import side from "../../../asset/images/side.png";
import { useState } from "react";

const SideBar = ({onClick}) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${open ? "w-60" : "w-24"} 
    duration-500 h-screen fixed top-0 border-r border-secondary`}
    >
      <div className="flex gap-x-4 h-24 bg-white w-full items-center z-10">
        <img
          src={icon}
          className={`ml-4 h-12 w-12 cursor-pointer duration-500`}
        />

        <h1
          className={`text-blue-900 origin-left font-medium  text-4xl ${
            !open && "scale-0"
          }`}
        >
          NFTing
        </h1>

        <BsIcons.BsArrowLeftCircle
          className={`absolute cursor-pointer text-blue-900 
                  text-xl  top-10 bg-white rounded-full ${
                    !open && "rotate-180"
                  } ${open ? "right-3" : "-right-3"}`}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      <div className={`h-fit`}>
        <ul className="p-2">
          {MenuData.map((item, index) => (
            <li
              key={index}
              className="menu-item block cursor-pointer py-2 ml-4 mt-2 hover:border-r-4 hover:border-primary"
            >
              <Link
                to={item.path}
                className="text-black font-mono font-semibold text-xl gap-x-5 flex items-center  hover:text-primary"
              >
                <i className={` h-7 w-7 p-1 rounded-lg`}>{item.icons}</i>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left font-nunito duration-400`}
                >
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-4 mt-4">
          <img src={side} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
