import Image from "next/image";
import Link from "next/link";
import data from "../data/data.json";

const Footer = () => {
    const socials = data.socials;
    return (
        <footer className=" bg-neutral-950 flex gap-4 py-2 items-center justify-center w-full">
            {Object.entries(socials).map(
                ([platform, link]) =>
                    link && (
                        <Link key={platform} target="_blank" rel="noopener noreferrer" href={link}>
                            <Image className="hover:p-0.5 duration-75 w-5 h-5" width={20} height={20} src={`${platform}.svg`} alt="" />
                        </Link>
                    )
            )}
        </footer>
    );
};

export default Footer;
