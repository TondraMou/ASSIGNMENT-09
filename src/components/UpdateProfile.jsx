import React, { useContext, useState } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const { user } = useContext(authContext); 
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = () => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/my-profile");
      })
      .catch((error) => {
        toast.error("Failed to update profile: " + error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px]">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-[#caf12d]">Update Profile</h1>
      <div className="bg-gray-600 p-8 rounded-lg shadow-md w-96">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate();
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-white font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="photoURL" className="block text-sm text-white font-medium">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#657915] text-white py-2 rounded-lg hover:bg-[#6b7541]"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
