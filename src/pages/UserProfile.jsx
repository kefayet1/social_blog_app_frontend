import MiddleSide from "../components/homePageContent/middleSide/MiddleSide";
import UserProfileTop from "./UserProfileTop";

const UserProfile = () => {
  return (
    <div className="bg-[#F5F5F5] h-screen lg:w-[50%] lg:m-auto md:mx-10">
      <UserProfileTop />
      <MiddleSide/>
    </div>
  );
};

export default UserProfile;
