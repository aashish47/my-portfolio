import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

const NextLink = (props: any) => {
    const href = props.href;
    if (href.startsWith("/")) {
        return (
            <Link
                className="hover:text-sky-600"
                href={href}
                {...props}
            >
                {props.children}
            </Link>
        );
    }

    if (href.startsWith("#")) {
        return <a {...props} />;
    }

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        />
    );
};

const FullWidthImage = (props: any) => {
    return (
        <Image
            alt={props.alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            {...props}
        />
    );
};

const CustomSizeImage = (props: any) => {
    return (
        <Image
            alt={props.alt}
            {...props}
        />
    );
};
const components = {
    a: NextLink,
    FullWidthImage,
    CustomSizeImage,
};

interface MdxProps {
    code: string;
}

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code);

    return (
        <section className="[&>*]:mb-3 [&>*:last-child]:mb-0">
            <Component components={components} />
        </section>
    );
}
