import { Repository } from "../Types/Repository";
import Repo from "./components/Repo";
import query from "./graphql/getReposQuery.graphql";
import { getClient } from "./lib/client";

export default async function Projects() {
    const {
        data: {
            viewer: {
                repositories: { nodes: data },
            },
        },
    } = await getClient().query({ query });

    return <div className="flex justify-between flex-wrap gap-2">{data && data.map((repo: Repository) => <Repo key={repo.id} repo={repo} />)}</div>;
}
