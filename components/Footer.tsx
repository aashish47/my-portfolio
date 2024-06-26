import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const socials = {
        "devto": "",
        "facebook": "",
        "github": "https://github.com/aashish47",
        "instagram": "",
        "linkedin": "",
        "mail": "mailto:aashishagarwal2711@gmail.com",
        "medium": "",
        "x": "",
        "youtube": "",
    };

    return (
        <footer className=" bg-black flex gap-4 md:gap-2 py-2 items-center justify-center w-full">
            {Object.entries(socials).map(
                ([platform, link]) =>
                    link && (
                        <Link
                            key={platform}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link}
                        >
                            <Image
                                className="md:hover:p-0 md:p-1 duration-75 w-7 h-7"
                                width={28}
                                height={28}
                                src={`/footer/${platform}.svg`}
                                alt=""
                            />
                        </Link>
                    )
            )}
        </footer>
    );
};

export default Footer;
