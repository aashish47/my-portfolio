import Image from "next/image";
import Link from "next/link";
import { Repository } from "../../Types/Repository";

const Repo = ({ repo }: { repo: Repository }) => {
    const { id, url, primaryLanguage, description, name, stargazerCount } = repo;
    return (
        <Link
            className="lg:hover:scale-110 duration-150 w-full lg:w-[49%] bg-neutral-800 shadow-md p-8  "
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <article className="flex flex-col gap-1">
                {primaryLanguage && <h6 className=" tracking-widest font-medium text-[10px] uppercase">{primaryLanguage.name}</h6>}
                <h2 className="text-xl font-semibold">{name}</h2>
                <p>{description}</p>
                <div className="flex gap-2 items-center">
                    <Image src="star.svg" className=" w-3 h-3" alt="" width={12} height={12} />
                    <p className="text-sm">{stargazerCount}</p>
                </div>
            </article>
        </Link>
    );
};

export default Repo;
