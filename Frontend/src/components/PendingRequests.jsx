import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import appStore from "../utils/redux/appStore";
import UserCard from "./UserCard";
import { addRequests } from "../utils/redux/pendingRequestsSlice";

const PendingRequests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((appStore) => appStore?.requests);

  const fetchPendingRequests = async () => {
    const res = await axios.get(BASE_URL + "/user/request/received", {
      withCredentials: true,
    });

    dispatch(addRequests(res?.data?.data));
  };

  useEffect(() => {
    fetchPendingRequests();
  }, []);

  if(!requests) return;

if (requests.length === 0)
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
        You don’t have any roommate requests to review right now.  
        Once someone shows interest, their profile will appear here for you to accept or reject 🏡✨
      </p>
    </div>
  );




  return (
    <div className="flex flex-col gap-5 p-2 items-center justify-center">
      {requests?.map((request) => (
        <UserCard
          key={request?._id}
          status1="accept"
          status2="reject"
          user={request?.fromUserId}
          connectionId={request?._id}
        />
      ))}
    </div>
  );
};

export default PendingRequests;
