import Chip from "@/components/Chip";
import { Repository } from "@/types/Repository";
import Image from "next/image";
import Link from "next/link";

const Repo = ({ repo }: { repo: Repository }) => {
    const { id, name, description, url, repositoryTopics, primaryLanguage, forkCount, stargazerCount } = repo;
    const { nodes: topics } = repositoryTopics;
    return (
        <Link
            className="w-full"
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex flex-col gap-1 bg-zinc-900  mb-4 p-8 md:p-10 lg:hover:scale-110 duration-150 ">
                {primaryLanguage && <h6 className=" tracking-widest font-bold text-[10px] uppercase">{primaryLanguage.name}</h6>}
                <h4>{name}</h4>
                <p>{description}</p>
                <div className="flex gap-4">
                    <div className="flex gap-2 items-center mt-2">
                        <Image
                            src="/projects/star.svg"
                            className=" w-3 h-3"
                            alt=""
                            width={12}
                            height={12}
                        />
                        <p className="text-xs">{stargazerCount}</p>
                    </div>

                    <div className="flex gap-2 items-center mt-2">
                        <Image
                            src="/projects/fork.svg"
                            className=" w-3 h-3"
                            alt=""
                            width={12}
                            height={12}
                        />
                        <p className="text-xs">{forkCount}</p>
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap mt-2">
                    {topics.map((topics) => {
                        const { id, name } = topics.topic;
                        return (
                            <Chip
                                key={id}
                                text={name}
                            />
                        );
                    })}
                </div>
            </div>
        </Link>
    );
};

export default Repo;
