import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emailFromQuery = queryParams.get("email");
    if (emailFromQuery) {
      setEmail(emailFromQuery);
    }
  }, [location]);

  const handleResetPassword = () => {
    const mailToLink = `mailto:tondramou3@gmail.com?subject=Password Reset Request&body=Please reset the password for ${email}.`;
    window.location.href = mailToLink; 
  };

  return (
    <div className="w-11/12 mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold text-center text-[#caf12d] mb-6">Forgot Password</h2>
      <form>
        <div className="flex items-center justify-center flex-col">
          <label htmlFor="email" className="block text-sm text-white font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full lg:w-[500px]"
            required
          />
        </div>
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={handleResetPassword}
            className="px-6 py-3 bg-[#5f7215] text-white rounded-lg hover:bg-[#6b7541]"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;