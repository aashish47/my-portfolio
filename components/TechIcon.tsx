import Image from "next/image";

interface TechIconProps {
    src: string;
}

const TechIcon = ({ src }: TechIconProps) => {
    return (
        <Image
            width={60}
            height={60}
            alt=""
            src={src}
            className="hover:animate-bounce hover:cursor-pointer"
        />
    );
};

export default TechIcon;
