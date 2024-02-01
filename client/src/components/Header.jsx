import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-200">
      <div
        className={`flex ${
          currentUser ? "justify-between" : "justify-end"
        } items-center max-w-6xl mx-auto p-5`}
      >
        {currentUser ? (
          <Link to="/">
            <h1 className="font-bold text-xl">Auth App</h1>
          </Link>
        ) : (
          ""
        )}
        <ul className="flex gap-4">
          {currentUser ? (
            <React.Fragment>
              <Link to="/">
                <li className="text-lg font-semibold">Home</li>
              </Link>
              <Link to="/about">
                <li className="text-lg font-semibold">About</li>
              </Link>
            </React.Fragment>
          ) : null}

          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt={currentUser.username}
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}


