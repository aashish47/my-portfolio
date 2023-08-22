import data from "./data/data.json";

export default function Home() {
    return (
        <>
            <header className=" flex gap-4 flex-col">
                <h3 className=" text-5xl font-bold">{data.name}</h3>
                <h4 className=" text-2xl font-medium">{data.title}</h4>
            </header>
            <main className="mt-12 flex flex-col gap-4">
                <p className=" ">{data.description}</p>
                <p className=" ">{data.hobby}</p>
            </main>
        </>
    );
}
