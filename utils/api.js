import axios from "axios";

const fetchApi = async ({ url, method = null, body = null }) => {
  const res = await fetch(url, {
    method: method || "GET",
    body: body
      ? JSON.stringify({ user_name: "haha", comment: "Textual content" })
      : null,
  });

  const data = await res.json();
  return data;
};

export const fetchArticles = (id) => {
  if (id != undefined) {
    return fetchApi({ url: "http://demo-api.vsdev.space/api/articles/" + id });
  }

  return fetchApi({ url: "http://demo-api.vsdev.space/api/articles" });
};

export const fetchComments = (id) => {
  return fetchApi({
    url: "http://demo-api.vsdev.space/api/articles/" + id + "/comments",
  });
};

export const addCommentApi = ({ id, comment }) => {
  return axios.post(
    "http://demo-api.vsdev.space/api/articles/" + id + "/comments",
    {
      user_name: "new-person",
      comment,
    }
  );
};
