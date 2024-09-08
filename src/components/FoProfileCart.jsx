import { Link } from "react-router-dom";
import BaseUrl from "../BaseUrl";
import useImageLink from "../hooks/useImageLink";

const FoProfileCart = ({ post }) => {
    
  return (
    <Link to={`/profile/${post.following_user_id || post.id}`}>
    <div className="md:w-[300px] w-[420px] shadow py-5 px-8 rounded-sm">
      <div className="profile_image flex items-center justify-center w-full">
        <img src={useImageLink(post.profile_image)} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover"/>
      </div>
      <div className="profile_details flex justify-center">
        <div>
          <h2 className="font-semibold text-center text-lg">{post.name}</h2>
          <p className="font-normal text-base text-center">{post.email}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default FoProfileCart;
