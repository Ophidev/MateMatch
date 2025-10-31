  import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";

const ChatCard = ({ user, connectionId }) => {

  return (
    <div className="flex flex-col md:flex-row items-center bg-[#fff8f5] border border-[#f5e0d6] rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-2xl overflow-hidden">
      {/* Left Side — Profile Image */}
      <div className="flex-shrink-0 bg-gradient-to-b from-[#ffe7dd] to-[#fff4ee] flex justify-center items-center w-full md:w-1/3 p-6">
        <img
          src={user.photoUrl}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Right Side — User Info */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
        {/* Name & Basic Info */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#c53d0e] mb-1">
            {user.firstName} {user.lastName}
          </h2>
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <p>
              🎂 <span className="font-medium">{user.age}</span> years
            </p>
            <span className="text-gray-400">•</span>
            <p>
              🚻 <span className="font-medium capitalize">{user.gender}</span>
            </p>
          </div>

          <p className="text-gray-700 text-sm italic mt-3">
            {user.about || "No bio added yet..."}
          </p>
        </div>

        {/* Lifestyle Section */}
        <div className="bg-[#fff3ee] rounded-xl p-4 mb-4">
          <h3 className="text-[#c53d0e] font-semibold mb-2 flex items-center gap-1">
            🏠 Lifestyle
          </h3>
          <ul className="text-gray-700 text-sm grid grid-cols-2 gap-x-3 gap-y-1">
            <li>
              🧹 Cleanliness:{" "}
              <span className="font-medium">{user.lifestyle.cleanliness}</span>
            </li>
            <li>
              😴 Sleep:{" "}
              <span className="font-medium">
                {user.lifestyle.sleepSchedule}
              </span>
            </li>
            <li>
              🚬 Smoking:{" "}
              <span className="font-medium">
                {user.lifestyle.smoking ? "Yes" : "No"}
              </span>
            </li>
            <li>
              🐶 Pets:{" "}
              <span className="font-medium">
                {user.lifestyle.pets ? "Yes" : "No"}
              </span>
            </li>
            {user.lifestyle.hobbies?.length > 0 && (
              <li className="col-span-2">
                🎯 Hobbies: {user.lifestyle.hobbies.join(", ")}
              </li>
            )}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to={"/chat/" + connectionId}>
            {" "}
            <button className="btn flex-1 bg-[#c53d0e] hover:bg-[#b3360c] border-none text-white transition-all duration-300">
              💬Chat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
