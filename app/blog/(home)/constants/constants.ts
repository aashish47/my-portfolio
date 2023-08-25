import Posts from "@/app/data/Posts";

export const PostsPerPage = 5;
export const TotalPosts = Posts.length;
export const TotalPages = Math.ceil(TotalPosts / PostsPerPage);
