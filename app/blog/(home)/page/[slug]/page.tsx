import { notFound } from "next/navigation";
import { PostCard } from "../../components/PostCard";
import { TotalPages } from "../../constants/constants";
import { getPagePosts } from "../../utility/getPagePosts";

export const generateStaticParams = async () => {
    let a = [];
    for (let page = 1; page <= TotalPages; page++) {
        a.push({ slug: String(page) });
    }
    return a;
};

const Page = ({ params }: { params: { slug: string } }) => {
    const posts = getPagePosts(Number(params.slug));
    if (posts.length === 0) {
        notFound();
    }

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
};

export default Page;
