import { Metadata } from "next";
import { PostCard } from "./blog/(home)/components/PostCard";
import { Name } from "./data/Name";
import Posts from "./data/Posts";

export const metadata: Metadata = {
    title: `${Name}`,
    description: "Generated by create next app",
};

export default function Home() {
    const posts = Posts.slice(0, 3);
    return (
        <>
            <header className=" flex gap-4 flex-col">
                <h1>{Name}</h1>
                <h4>eu augue ut lectus arcu bibendum at</h4>
            </header>
            <main className="mt-12 flex flex-col gap-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="mt-8 flex flex-col gap-4">
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
            </main>
        </>
    );
}
