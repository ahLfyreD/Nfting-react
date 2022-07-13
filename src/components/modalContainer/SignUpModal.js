import { useEffect } from "react";
import Button from "@components/toggleBtn/Button";
import * as FcIcons from "react-icons/fc";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";

const SignUpModal = ({ visible, onClose, login }) => {
  // let about useEffect
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 p-4 backdrop-blur-sm 
                    flex justify-center z-10 overflow-scroll"
    >
      <div className="bg-white h-fit w-1/2 rounded-3xl relative p-5">
        <span
          className="absolute flex justify-center items-center top-3 right-5 cursor-pointer h-6 w-6"
          onClick={onClose}
        >
          <FaIcons.FaTimes />
        </span>
        <h1 className="font-nunito text-4xl text-blue-900 font-bold">
          Sign Up to NFTing
        </h1>
        <div className="w-full h-16 border-secondary border-1 rounded-lg flex justify-center items-center mt-10">
          <input
            className="form-input rounded-md h-10 pl-2 outline-none w-full"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="w-full h-16 border-secondary border-1 rounded-lg flex justify-center items-center my-3">
          <input
            className="form-input rounded-md h-10 pl-2 outline-none w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="w-full h-16 border-secondary border-1 rounded-lg flex justify-center items-center my-3">
          <input
            className="form-input rounded-md h-10 pl-2 outline-none w-full"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="w-full h-16 border-secondary border-1 rounded-lg flex justify-center items-center my-3">
          <input
            className="form-input rounded-md  h-10 pl-2 outline-none w-full"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mt-4">
          <h2>
            By continuing, you agree to NFTing's <a href="">Terms of Service</a>
            , <a href="">Privacy Policy</a> and <a href="">Cookies Use</a>.
          </h2>
        </div>
        <Button
          className="w-full h-16 text-white bg-blue-600 rounded-2xl mt-5 
          font-nunito font-large text-xl"
        >
          Continue
        </Button>
        <div className="mt-4">
          <h2>
            Already have an account? 

            <span className="cursor-pointer" onClick={login}>
              Login
            </span>
          </h2>
        </div>
        <div>
          <span>OR</span>
        </div>
        <div className="w-full h-fit mt-4">
          <Button
            className="w-full h-16 text-blue-900 border-3 border-blue-900 rounded-2xl
           flex items-center px-3 hover:bg-blue-900 hover:text-white"
          >
            <FcIcons.FcGoogle className="text-3xl" />
            <h1 className="text-xl mx-3 font-nunito font-semibold">
              Sign Up with Google
            </h1>
          </Button>
          <Button
            className="w-full h-16 text-blue-900 border-3 border-blue-900 rounded-2xl
          font-nunito font-large text-3xl flex items-center px-3 my-3 hover:bg-blue-900 hover:text-white"
          >
            <FaIcons.FaFacebook className="text-3xl" />
            <h1 className="text-xl mx-3 font-nunito font-semibold">
              Sign up with Facebook
            </h1>
          </Button>
          <Button
            className="w-full h-16 text-blue-900 border-3 border-blue-900 rounded-2xl 
          font-nunito font-large text-3xl flex items-center px-3 hover:bg-blue-900 hover:text-white"
          >
            <BsIcons.BsTwitter className="text-3xl" />
            <h1 className="text-xl mx-3 font-nunito font-semibold">
              Sign Up with Twitter
            </h1>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
