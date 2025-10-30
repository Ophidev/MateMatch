import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/redux/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((appStore) => appStore?.user);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="navbar flex justify-between bg-neutral text-neutral-content shadow-sm p-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-[45px] rounded-3xl" />
        </div>


        {user && (
        <>
          {/* ✅ Nav Items — Responsive */}
          <div className="hidden md:flex gap-3 text-[#f5e0d6] font-medium">
            <Link
              to="/"
              className="px-3 py-1 rounded-lg border border-transparent hover:border-[#FFF1EA] transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/feed"
              className="px-3 py-1 rounded-lg border border-transparent hover:border-[#FFF1EA] transition-all duration-200"
            >
              Feed
            </Link>
            <Link
              to="/connections"
              className="px-3 py-1 rounded-lg border border-transparent hover:border-[#FFF1EA] transition-all duration-200"
            >
              Connections
            </Link>
            <Link
              to="/about"
              className="px-3 py-1 rounded-lg border border-transparent hover:border-[#FFF1EA] transition-all duration-200"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-[#f5e0d6]"
            >
              ☰
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral text-[#f5e0d6] rounded-box z-50 mt-3 w-40 p-2 shadow"
            >
              <li>
                <Link
                  to="/"
                  className="rounded-md border border-transparent hover:border-[#FFF1EA] transition-all duration-200 px-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/feed"
                  className="rounded-md border border-transparent hover:border-[#FFF1EA] transition-all duration-200 px-2"
                >
                  Feed
                </Link>
              </li>
              <li>
                <Link
                  to="/connections"
                  className="rounded-md border border-transparent hover:border-[#FFF1EA] transition-all duration-200 px-2"
                >
                  Connections
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="rounded-md border border-transparent hover:border-[#FFF1EA] transition-all duration-200 px-2"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </>
        )}
        
        {/* Avatar / Dropdown */}
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              {!user ? (
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              ) : (
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src={user?.photoUrl} />
                </div>
              )}
            </div>
            {user && (
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-primary text-neutral-content rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">Edit</span>
                  </Link>
                </li>
                <li>
                  <Link to="/received">Pending Requests</Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
