import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export function PostCard(post: Post) {
    return (
        <div className="pb-4">
            <h5 className="mb-1">
                <Link
                    href={post.url}
                    className="hover:text-zinc-400 active:text-zinc-600 text-white "
                >
                    <Balancer>{post.title}</Balancer>
                </Link>
            </h5>
            <time
                dateTime={post.date}
                className="mb-2 block text-xs text-zinc-600"
            >
                {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
        </div>
    );
}
