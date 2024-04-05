import Posts from "@/utility/Posts";

export const PostsPerPage = 5;
export const TotalPosts = Posts.length;
export const TotalPages = Math.ceil(TotalPosts / PostsPerPage);
export const Name = "Aashish Agarwal";
