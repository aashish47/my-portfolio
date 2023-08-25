import Image from "next/image";
import Link from "next/link";
import { Repository } from "../../types/Repository";

const Repo = ({ repo }: { repo: Repository }) => {
    const { id, url, primaryLanguage, description, name, stargazerCount } = repo;
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
                <p>{description}asdasd</p>
                <div className="flex gap-2 items-center mt-2">
                    <Image
                        src="star.svg"
                        className=" w-3 h-3"
                        alt=""
                        width={12}
                        height={12}
                    />
                    <p className="text-xs">{stargazerCount}</p>
                </div>
            </div>
        </Link>
    );
};

export default Repo;
