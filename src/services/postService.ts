import axios from "axios";
import { Post, UpdateDataPost } from "../types/post";
import { FormData } from "../types/formData";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchAllPosts = async (searchText: string) => {
  const res = await axios.get<Post[]>("/posts", {
    params: { q: searchText },
  });
  console.log(res);

  return res.data;
};
export const fetchPosts = async (searchText: string, page: number) => {
  const res = await axios.get<Post[]>("/posts", {
    params: { q: searchText, _limit: 8, _page: page },
  });
  console.log(res);

  return res.data;
};

export const createPost = async (newPost: FormData) => {
  const res = await axios.post<Post>("/posts", newPost);
  return res.data;
};

export const editPost = async (newDataPost: UpdateDataPost) => {
  const res = await axios.patch<Post>(`/posts/${newDataPost.id}`, newDataPost);
  return res.data;
};

export const deletePost = async (postId: number) => {
  const res = await axios.delete<Post>(`/posts/${postId}`);
  return res.data;
};
