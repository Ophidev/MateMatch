import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoommateCard from "./RoommateCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/redux/userSlice";

const EditProfile = ({user}) => {

  const dispatch = useDispatch();

  // ✅ Check before using hooks that depend on user
  if (!user) {
    return (
      <div className="text-center text-gray-500 mt-10">Loading profile...</div>
    );
  }

  // ✅ Now it's safe to use hooks based on user data
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [sleepSchedule, setSleepSchedule] = useState(
    user?.lifestyle?.sleepSchedule || "flexible"
  );
  const [cleanliness, setCleanliness] = useState(
    user?.lifestyle?.cleanliness || "moderate"
  );
  const [hobbies, setHobbies] = useState(
    user?.lifestyle?.hobbies?.join(", ") || ""
  );
  const [smoking, setSmoking] = useState(user?.lifestyle?.smoking || false);
  const [pets, setPets] = useState(user?.lifestyle?.pets || false);
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  // ✅ Save profile handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          lifestyle: {
            sleepSchedule,
            cleanliness,
            hobbies: hobbies
              .split(",")
              .map((h) => h.trim())
              .filter(Boolean),
            smoking,
            pets,
          },
          about,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.data?.loggedInUser));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      },2000);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7f3] to-[#ffe9e0] py-10 px-5 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#b1350a] mb-8">
        🧑‍💼 Edit Your Profile
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
        {/* Left Side — Edit Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#fff8f5] shadow-md border border-[#f5e0d6] rounded-2xl p-8 flex-1"
        >
          <h2 className="text-2xl font-semibold text-[#c53d0e] mb-6 text-center">
            ✏️ Update Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Basic Info */}
            <div>
              <label className="label font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div>
              <label className="label font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <label className="label font-medium text-gray-700">Age</label>
              <input
                type="number"
                className="input input-bordered w-full"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div>
              <label className="label font-medium text-gray-700">Gender</label>
              <select
                className="select select-bordered w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="label font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>

            {/* Lifestyle Fields */}
            <div>
              <label className="label font-medium text-gray-700">
                Sleep Schedule
              </label>
              <select
                className="select select-bordered w-full"
                value={sleepSchedule}
                onChange={(e) => setSleepSchedule(e.target.value)}
              >
                <option value="early bird">Early Bird 🌅</option>
                <option value="night owl">Night Owl 🌙</option>
                <option value="flexible">Flexible ⏰</option>
              </select>
            </div>

            <div>
              <label className="label font-medium text-gray-700">
                Cleanliness
              </label>
              <select
                className="select select-bordered w-full"
                value={cleanliness}
                onChange={(e) => setCleanliness(e.target.value)}
              >
                <option value="tidy">Tidy & Organized 🧼</option>
                <option value="moderate">Moderate 🪣</option>
                <option value="casual">Casual 🎨</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="label font-medium text-gray-700">Hobbies</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="e.g. reading, traveling, cooking"
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
              />
            </div>

            <div>
              <label className="label font-medium text-gray-700">Smoking</label>
              <select
                className="select select-bordered w-full"
                value={smoking}
                onChange={(e) => setSmoking(e.target.value === "true")}
              >
                <option value="false">No 🚫</option>
                <option value="true">Yes 🚬</option>
              </select>
            </div>

            <div>
              <label className="label font-medium text-gray-700">Pets</label>
              <select
                className="select select-bordered w-full"
                value={pets}
                onChange={(e) => setPets(e.target.value === "true")}
              >
                <option value="false">No 🐾</option>
                <option value="true">Yes 🐶</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="label font-medium text-gray-700">
                About You
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                rows="3"
                placeholder="Write something about yourself..."
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-center mt-3">{error}</p>}

          <button
            type="submit"
            className="btn bg-[#c53d0e] hover:bg-[#b1350a] text-white w-full mt-6 font-semibold text-lg border-none"
          >
            💾 Save Changes
          </button>
        </form>

        {/* Right Side — Live Preview */}
        <div className="flex-1 flex justify-center items-start mt-10 lg:mt-0">
          <RoommateCard
            user={{
              firstName,
              lastName,
              age,
              gender,
              photoUrl,
              about,
              lifestyle: {
                sleepSchedule,
                cleanliness,
                hobbies: hobbies
                  .split(",")
                  .map((h) => h.trim())
                  .filter(Boolean),
                smoking,
                pets,
              },
            }}
          />
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success text-black">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
