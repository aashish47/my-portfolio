import Posts from "@/app/data/Posts";
import { PostsPerPage } from "../constants/constants";

export const getPagePosts = (currentPage: number) => {
    const startIdx = (currentPage - 1) * PostsPerPage;
    const endIdx = startIdx + PostsPerPage;
    return Posts.slice(startIdx, endIdx);
};
