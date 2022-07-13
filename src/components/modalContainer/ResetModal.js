import Button from "@components/toggleBtn/Button";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

const ResetModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 p-4 backdrop-blur-sm 
                    flex justify-center items-center z-50"
    >
      <div className="bg-white h-fit w-1/2 rounded-3xl relative p-5">
        <div className="flex w-full h-12 justify-between items-center">
          <div className="flex items-center w-fit h-fit cursor-pointer font-nunito font-semibold">
            <span className="font-semibold text-2xl mr"><BiIcons.BiArrowBack/></span>
            Back to Login
          </div>
          <span
            className="flex justify-center items-center cursor-pointer h-6 w-6"
            onClick={onClose}
          >
            <FaIcons.FaTimes />
          </span>
        </div>
        <div>
          <h1 className="my-4 text-4xl font-nunito text-blue-900 font-semibold">Forget Password</h1>
          <p className="text-lg font-nunito font-medium">
            It seems that you forgot the password for your NFTing account. You
            can change your password by clicking the button below.
          </p>
        </div>
        <Button
          className="w-full h-16 text-white bg-blue-600 rounded-2xl mt-5 
          font-nunito font-large text-xl"
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
};

export default ResetModal;
