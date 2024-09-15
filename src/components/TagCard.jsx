import useImageLink from "../hooks/useImageLink";

function TagCard({tag}) {
  return (
    <div className="md:w-[300px] w-[420px] shadow py-5 px-4 rounded-sm">
      <div className="topPart">
        <div className="tagPostDetails flex justify-between mb-5">
          <h2 className="font-medium text-black">#{tag.title}</h2>
          <p>{tag.post_count} Posts</p>
        </div>
        <div className="para">
          <p>
           amet consectetur adipisicing elit. Excepturi
            culpa fugit, odit voluptatum placeat officia nihil pariatur nam quas
            omnis id ratione voluptatibus{" "}
          </p>
        </div>
      </div>
      <div className="bottomPart mt-5 flex justify-between items-end">
        <div className="button">
          <button className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">Follow</button>
        </div>
        <div className="logo">
          <img src={useImageLink(tag.thumbnail)}className="w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TagCard;
