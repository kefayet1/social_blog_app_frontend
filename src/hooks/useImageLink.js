import BaseUrl from "../BaseUrl";

const useImageLink = (link) => {
  const http = link?.slice(0, 4);
  if (http === "http") {
    return link;
  }

  return BaseUrl?.slice(0, -4);
};

export default useImageLink;
