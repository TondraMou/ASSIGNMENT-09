
import { Link } from "react-router-dom";
import errorImg from "../assets/error.jpg";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-[80%] h-[500px] text-center space-y-6">
      <img src={errorImg} alt="404 Error" className="w-full max-w-md object-contain" />
      <h1 className="text-4xl font-bold text-[#6d811d]">404 - Page Not Found</h1>
      <p className="">
        Oops! The page you are looking for does not exist. Please check the URL or go back to the homepage.
      </p>
      <Link to="/" className="px-6 py-3 bg-[#5f7215] text-white rounded-lg hover:bg-[#6b7541] transition duration-300">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
