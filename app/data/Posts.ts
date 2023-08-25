import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const Posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
export default Posts;
