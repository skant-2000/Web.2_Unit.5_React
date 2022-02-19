import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar() {
  const { showSignin, setShowLogin, showSignout, setShowSignin,setShowSignout } = useContext(AuthContext);

  const handleSigninButton = () => {
    setShowLogin((prev) => !prev);
    setShowSignin((prev) => !prev);
  };

  const handleSignoutButton = () => {
    setShowSignin((prev) => !prev);
    setShowSignout(prev => !prev)
  };

  return (
    <div>
      {showSignin && <button onClick={handleSigninButton}>SignIn</button>}
      {showSignout && <button onClick={handleSignoutButton}>SignOut</button>}
    </div>
  );
}
