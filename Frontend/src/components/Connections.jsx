import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import appStore from "../utils/redux/appStore";
import { addConnections } from "../utils/redux/connectionsSlice";
import UserCard from "./UserCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((appStore) => appStore?.connections);

  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });

    dispatch(addConnections(res?.data?.data));
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0)
    return (
      <div className="flex m-2 flex-col items-center justify-center min-h-[80vh] bg-[#fff8f5] rounded-3xl shadow-inner border border-[#f5e0d6] p-12 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076505.png"
          alt="No pending requests"
          className="w-36 h-36 mb-8 opacity-90"
        />
        <h2 className="text-4xl font-bold text-[#c53d0e] mb-4 tracking-wide">
          No Pending Requests
        </h2>
        <p className="text-gray-700 max-w-lg text-lg leading-relaxed">
          You don’t have any roommate connections yet 🤗 Once you and someone
          show mutual interest, your connection will appear here 💬✨ Keep
          exploring profiles to find your perfect match! 🏡❤️
        </p>
      </div>
    );

  return (
    <div className="flex flex-col gap-5 p-2 items-center justify-center">
      {connections?.map((connection) => (
        <UserCard
          key={connection?._id}
          status1="accept"
          status2="reject"
          user={connection}
          connectionId={connection?._id}
        />
      ))}
    </div>
  );
};

export default Connections;
