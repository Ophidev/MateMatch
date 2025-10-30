import React, { useEffect } from "react";
import RoommateCard from "./RoommateCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addFeed } from "../utils/redux/feedSlice";
import { useSelector } from "react-redux";
import appStore from "../utils/redux/appStore";

const Feed = () => {

  const dispatch = useDispatch();
  const feed = useSelector((appStore) => appStore?.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;

  if (feed.length <= 0) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fff7f3] to-[#ffe9e0]  text-center">
      <h1 className="text-5xl font-bold text-[#b1350a] mb-2">
        👋 Welcome to MateMatch
      </h1>
      <p className="text-gray-600 max-w-md mb-10">
        Discover your perfect roommate — based on lifestyle, habits, and vibe.
      </p>

      <h2 className="text-4xl font-semibold text-[#b1350a] mb-2">
        ✨ No more profiles to show!
      </h2>
      <p className="text-gray-600">
        Check back later for new roommate matches.
      </p>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7f3] to-[#ffe9e0] flex flex-col items-center py-10 px-5">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#b1350a] mb-2">
          👋 Welcome to MateMatch
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Discover your perfect roommate — based on lifestyle, habits, and vibe.
        </p>
      </div>
      <RoommateCard user={feed[0]} />
    </div>
  );
};

export default Feed;
