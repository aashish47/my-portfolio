import Repo from "@/components/Repo";
import { Name } from "@/constants/constants";
import query from "@/graphql/getReposQuery.graphql";
import { getClient } from "@/lib/client";
import { Repository } from "@/types/Repository";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Projects | ${Name}`,
};

export default async function Projects() {
    const {
        data: {
            viewer: {
                pinnedItems: { nodes: data },
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
