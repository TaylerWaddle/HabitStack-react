import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase";

const ProfileRoute = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    signOutUser();
    navigate("/sign-in");
  };
  return (
    <div>
      I am Profile Route
      <button onClick={handleClick}>Sign Out</button>
    </div>
  );
};

export default ProfileRoute;
