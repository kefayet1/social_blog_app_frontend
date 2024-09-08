import { faBookmark, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import UseDateFormate from "../hooks/UseDateFormate";

// eslint-disable-next-line react/display-name
const PostCart = forwardRef((props, ref) => {
  return (
    <Link to={`/post/${props.post.id}`}>
    <div className="bg-white border rounded-md" ref={ref}>
      {props.index === 0 && (
        <div className="top flex items-center">
          <img
            src={props.post.thumbnail}
            alt=""
            className="w-full h-[30%] rounded-t-md"
          />
        </div>
      )}
      <div className="bottom px-5 pt-5 pb-[1.4rem]">
        <div className="authorProfile flex items-center mb-2">
          <Link to={`profile/${props.post.user_id}`}>
            <div className="left mr-1">
              <img
                src={
                  props.post.profile_image
                }
                alt=""
                className="rounded-full w-9 h-9 object-fill"
              />
            </div>
          </Link>
          <div className="right">
            <div className="name">
              <span className="font-bold text-[#31343be8]">
                {props.post.name}
              </span>
            </div>
            <div className="date ">
              {UseDateFormate(props.post.published_at)[0]}{" "}
              {UseDateFormate(props.post.published_at)[1]}
            </div>
          </div>
        </div>
        <div className="postInfo ml-[2.47rem] mb-3">
          <div className="title mb-2">
            <h2 className="text-3xl font-bold">{props.post.title}</h2>
          </div>
          <div className="tags flex mb-4 text-[#31343be8]">
            {props.post.tags?.split(",").map((tag, index) => (
              <Link
                key={index}
                to={`tag/${tag}`}
                className="p-2 rounded-md hover:bg-slate-100 hover:shadow-border-hover"
              >
                #{tag}
              </Link>
            ))}
          </div>

          <div className="action flex items-center justify-between">
            <div className="leftSide flex items-center gap-4">
              <div className="reaction flex gap-1 p-2  rounded-md text-[#31343be8] hover:bg-slate-300">
                <div className="emoji">
                  <span className="mr-[1px] p-[2px] bg-slate-400 rounded-full">
                    👍
                  </span>
                  <span className="mr-[1px] p-[2px] bg-slate-400 rounded-full">
                    ❤️
                  </span>
                  <span className="mr-[1px] p-[2px] bg-slate-400 rounded-full">
                    😲
                  </span>
                  <span className="mr-[1px] p-[2px] bg-slate-400 rounded-full">
                    🔥
                  </span>
                  <span className="mr-[1px] p-[2px] bg-slate-400 rounded-full">
                    🙌
                  </span>
                </div>
                <div className="reactionCount">
                  <span className="mr-1">198</span>
                  Reactions
                </div>
              </div>

              <div className="comment flex items-center gap-1">
                <div className="commentLogo">
                  <span className="">
                    <FontAwesomeIcon icon={faComment} />
                  </span>
                </div>
                <div className="cmmentCount text-[#31343be8]">
                  <span className="mr-1">27</span>
                  <span>Comments</span>
                </div>
              </div>
            </div>
            <div className="right flex items-end gap-6">
              <div className="actionleft">
                <span>2 min read</span>
              </div>
              <div className="actionRight">
                <span>
                  <FontAwesomeIcon icon={faBookmark} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* comment */}

        <div className="postCartComment">
          <div className="comments flex gap-4 mb-6">
            <div className="commenterImage">
              <img
                src="https://images.unsplash.com/photo-1655715991337-1e034f8ef24f?dpr=1&h=200&w=120&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt=""
                className="rounded-full w-6 h-6 object-fill"
              />
            </div>
            <div className="commentInfo p-3 bg-[#F1F1F1] rounded-md">
              <div className="dateAndName flex gap-2">
                <div className="name font-bold text-sm text-[#3d3d3de0]">
                  <span>Luciano de Cezare</span>
                </div>
                <div className="date">
                  <span>14</span> hours age
                </div>
              </div>

              <div className="commentText text-[#3d3d3d]">
                <span>
                  webpack.prod.js is equal to webpack.dev.js. Wasn't production
                  supposed to be more optimized?
                </span>
              </div>
            </div>
          </div>
          <div className="ml-10 font-bold text-[#31343be8]">
            <span>See all 13 comments</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
});

export default PostCart;
