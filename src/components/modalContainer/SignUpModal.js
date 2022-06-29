import { useEffect } from "react";
import Button from "@components/toggleBtn/Button";

const SignUpModal = ({ visible, onClose }) => {
  // let about useEffect
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm 
                    flex justify-center items-center z-10"
    >
      <div className="bg-white h-4/5 w-1/2 rounded-3xl relative p-5">
        <span
          className="absolute flex justify-center items-center top-3 right-5 cursor-pointer h-6 w-6 rounded-full bg-barn"
          onClick={onClose}
        >
          X
        </span>
        <h1 className="font-nunito text-4xl text-blue-900 font-bold">
          Login to NFTing
        </h1>
        <input
          className="rounded-md mt-4 h-10 border-2 border-blue-900 pl-2 outline-none w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="rounded-md mt-4 h-10 border-2 border-blue-900 pl-2 outline-none w-full"
          type="password"
          placeholder="Password"
        />
        <div className="flex mt-4 justify-between items-center">
          <a href="">Forget Password?</a>
          <Button>Login</Button>
        </div>
        <div className="mt-4">
          <h2>Don't have an account <a href="">Sign Up</a></h2>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
