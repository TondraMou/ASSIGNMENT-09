import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px]">
      <h1 className="text-3xl font-bold mb-4 text-[#caf12d]">My Profile</h1>
      <div className="bg-gray-600 p-6 rounded-lg shadow-md w-96">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <p className="text-lg text-white text-center">{user?.displayName || "No Name"}</p>
        <p className="text-center text-sm text-white">{user?.email}</p>
        <button
          onClick={() => navigate("/update-profile")}
          className="mt-4 w-full bg-[#657915] text-white py-2 rounded-lg hover:bg-[#6b7541]"
        >
          Update Information
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
