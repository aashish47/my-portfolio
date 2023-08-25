import { PostCard } from "./components/PostCard";
import { getPagePosts } from "./utility/getPagePosts";

export default function Home() {
    const posts = getPagePosts(1);

    return (
        <div>
            {posts.map((post, idx) => (
                <PostCard
                    key={idx}
                    {...post}
                />
            ))}
        </div>
    );
}
