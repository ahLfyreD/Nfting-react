import "./Header.css";
import * as AiIcons from "react-icons/ai";
import Button from "@components/toggleBtn/Button";
import LoginModal from "@components/modalContainer/LoginModal";
import SignUpModal from "@components/modalContainer/SignUpModal";
import { useState } from "react";
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const LoginhandleOnClose = () => setShowLoginModal(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const SignUphandleOnClose = () => setShowSignUpModal(false);

  return (
    <>
      <div className="flex items-center justify-between w-full h-24 border-b border-secondary  p-3">
        <div className="h-12 rounded-md items-center flex w-80 border-2 border-blue-900">
          <input
            className="search rounded-md w-72 h-8 pl-1 font-nunito border-none focus:outline-none"
            type="text"
            placeholder="search"
          />
          <AiIcons.AiOutlineSearch className="cursor-pointer p-2 rounded-r-md h-12 w-10 bg-blue-900 text-white" />
        </div>

        <div className="flex w-64 justify-around">
          <Button onClick={() => setShowLoginModal(true)}>Login</Button>

          <Button onClick={() => setShowSignUpModal(true)}>Sign Up</Button>
        </div>
      </div>

      <div>
        <LoginModal onClose={LoginhandleOnClose} visible={showLoginModal} />
      </div>
      <div>
        <SignUpModal onClose={SignUphandleOnClose} visible={showSignUpModal} />
      </div>
    </>
  );
};

export default Header;
