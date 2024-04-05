import { PostCard } from "@/components/PostCard";
import Posts from "@/utility/Posts";

const LatestBlogs = () => {
    const posts = Posts.slice(0, 3);
    return (
        posts.length > 0 && (
            <div className="flex flex-col gap-4">
                <h6>Latest Blog Posts</h6>
                {posts.map((post, idx) => (
                    <div
                        key={idx}
                        className="bg-zinc-900 border border-zinc-700 pt-4 px-3"
                    >
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        )
    );
};

export default LatestBlogs;
