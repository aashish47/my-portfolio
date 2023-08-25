import { Metadata } from "next";
import { Name } from "../data/Name";
import Repo from "./components/Repo";
import query from "./graphql/getReposQuery.graphql";
import { getClient } from "./lib/client";
import { Repository } from "./types/Repository";

export const metadata: Metadata = {
    title: `Projects | ${Name}`,
};

export default async function Projects() {
    const {
        data: {
            viewer: {
                repositories: { nodes: data },
            },
        },
    } = await getClient().query({ query });

    return (
        <div className="flex flex-wrap">
            {data &&
                data.map((repo: Repository) => (
                    <Repo
                        key={repo.id}
                        repo={repo}
                    />
                ))}
        </div>
    );
}
