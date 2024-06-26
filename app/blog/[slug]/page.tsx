// app/posts/[slug]/page.tsx
import { Mdx } from "@/components/mdx";
import { Name } from "@/constants/constants";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Balancer } from "react-wrap-balancer";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
    return { title: `${post.title} | ${Name}` };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

    return (
        <article>
            <div className="mb-8 text-center">
                <time
                    dateTime={post.date}
                    className="mb-1 text-xs text-zinc-600"
                >
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
                <h3>
                    <Balancer>{post.title}</Balancer>
                </h3>
            </div>
            <Mdx code={post.body.code} />
        </article>
    );
};

export default PostLayout;
