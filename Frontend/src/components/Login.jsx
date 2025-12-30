import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../images/hero.png";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState(true);
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [emailId,setEmailId] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");


  async function handleLogin () {
      try{
        setError("");
        const res = await axios.post(
          BASE_URL+"/login",
          {
            emailId,
            password
          },
          { withCredentials:true }
        );

        dispatch(addUser(res?.data?.data));
        navigate("/feed");
      }
      catch(err){
        setError(err?.response.data || "Something Went rong!!");
      }
  }

  async function handleSignUp () {
    try{
      setError(""); 
      const res = await axios.post(
        BASE_URL+"/signup",
        {
          firstName,
          lastName,
          emailId,
          password
        },
        {withCredentials:true},
      );
    
      dispatch(addUser(res?.data?.data));
      
      navigate("/profile");
    }
    catch(err){
      setError(err?.response.data || "Something Went rong!!");
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-[#fff8f5] relative">
      {/* 🔙 Back / Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-[#c53d0e] hover:text-[#a73109] font-semibold transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Home
      </button>

      {/* Left Illustration Section */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 p-10 bg-gradient-to-b from-[#fff4ee] to-[#ffe7dd]">
        <img src={hero} alt="Roommates illustration" className="w-3/4 mb-6" />
        <h2 className="text-3xl font-bold text-[#c53d0e] text-center">
          Welcome to MateMatch 🏡
        </h2>
        <p className="text-gray-700 text-center mt-2 text-lg max-w-md">
          Find your ideal roommate and create memories together! Whether you’re
          a student or a young professional — MateMatch helps you connect with
          compatible people to share your space and lifestyle.
        </p>
      </div>

      {/* Right Form Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 p-10">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-3xl w-full max-w-md border p-8 shadow-lg">
          <legend className="fieldset-legend text-2xl font-bold text-[#c53d0e] mb-4">
            {loginForm ? "Login" : "Create Account"}
          </legend>

          {!loginForm && (
            <>
              <label className="label font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Enter your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label className="label font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Enter your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}

          <label className="label font-medium text-gray-700">EmailId</label>
          <input
            type="emailId"
            className="input input-bordered"
            placeholder="Enter your emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />

          <label className="label font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="input input-bordered"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="mt-2 p-1 text-[14px] text-red-600">
            {error}
          </p>
          <button
            className="btn mt-6 bg-[#c53d0e] border-none text-white hover:bg-[#b8360b] w-full text-lg font-semibold"
            onClick={loginForm ? handleLogin : handleSignUp}
          >
            {loginForm ? "Click to Login" : "Click to Sign Up"}
          </button>

          <p
            className="text-center mt-4 text-[#c53d0e] font-medium cursor-pointer hover:underline"
            onClick={() => setLoginForm(!loginForm)}
          >
            {loginForm ? "New user? Sign up" : "Already have an account? Login"}
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
