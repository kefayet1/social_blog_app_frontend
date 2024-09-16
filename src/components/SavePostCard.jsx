import { Link } from "react-router-dom";
import useImageLink from "../hooks/useImageLink";

const SavePostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <div className="md:w-[400px] w-[420px] flex gap-4 shadow py-5 px-8 rounded-sm">
        <div className="profile_image">
          <img src={useImageLink(post.profile_image)} alt="" className="rounded-r-full"/>
        </div>
        <div className="post_info">
          <h2 className="font-bold text-lg">{post.title}</h2>
          <p>{post.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default SavePostCard;
