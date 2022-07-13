import "./Header.css";
import * as AiIcons from "react-icons/ai";
import Button from "@components/toggleBtn/Button";
import UsaFlag from "@asset/images/UsaFlag.png";
import UsaFlag2 from "@asset/images/UsaFlag2.png";
import France from "@asset/images/France.png";
import LoginModal from "@components/modalContainer/LoginModal";
import ResetModal from "@components/modalContainer/ResetModal";
import SignUpModal from "@components/modalContainer/SignUpModal";
import { useState } from "react";
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const LoginhandleOnClose = () => setShowLoginModal(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const SignUphandleOnClose = () => setShowSignUpModal(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const ResethandleOnClose = () => setShowResetModal(false);

  return (
    <>
      <div className="flex relative items-center justify-between w-full h-24 border-b border-secondary  p-3">
        <div className="h-12 rounded-md items-center flex w-80 border-2 border-blue-900">
          <input
            className="form-input rounded-md w-72 h-8 pl-1 font-nunito border-none focus:outline-none"
            type="search"
            placeholder="Search"
          />
          <div className="flex justify-center items-center rounded-r-md h-12 w-10 bg-blue-900">
            <AiIcons.AiOutlineSearch className="cursor-pointer text-2xl text-white hover:scale-105" />
          </div>
        </div>

        <div className="flex w-64 justify-around items-center">
          <Button className="rounded-full h-6 w-6 border-2">
            <img className="h-5 w-5 rounded-full" src={UsaFlag2} alt="" />
          </Button>

          <Button onClick={() => setShowLoginModal(true)}>Login</Button>

          <Button onClick={() => setShowSignUpModal(true)}>Sign Up</Button>

          <div className="absolute rounded-b-2xl top-24 right-5 h-[170px] w-[300px] bg-barn">
            <h1 className="p-3">Select Your Language</h1>
            <ul className="w-full">
              <li className="flex w-full h-12 items-center cursor-pointer hover:bg-secondary">
                <img className="h-6 w-7 mx-3" src={UsaFlag2} alt="" />
                <h1 className="text-center">English (US)</h1>
              </li>
              <li className="flex w-full h-12 items-center cursor-pointer hover:bg-secondary">
                <img className="h-6 w-7 mx-3" src={France} alt="" />
                <h1 className="text-center">French (FR)</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <LoginModal
          onClose={LoginhandleOnClose}
          visible={showLoginModal}
          onClick={() => {setShowResetModal(true); setShowLoginModal(false)}}
        />
      </div>
      <div>
        <SignUpModal
          onClose={SignUphandleOnClose}
          visible={showSignUpModal}
          login={showLoginModal}
        />
      </div>
      <div>
        <ResetModal visible={showResetModal} onClose={ResethandleOnClose} />
      </div>
    </>
  );
};

export default Header;
