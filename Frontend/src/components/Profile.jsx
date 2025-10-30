import React, { useState } from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((appStore) => appStore?.user);
  return (
    <div>
      {user && (
       <EditProfile user = {user}/> 
      )}
    </div>
  );
};

export default Profile;
