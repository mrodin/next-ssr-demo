import { Card } from "components";

import { API_KEY } from "../properties";

const Sources = ({ sources }) => (
    <>
        <div className="py-10">
            <h1 className="text-5xl text-center text-accent-1">Sources</h1>
        </div>
        <div className="flex flex-wrap">
            {sources.sources.map((source) => (
                <Card
                    key={source.id}
                    name={source.name}
                    category={source.category}
                />
            ))}
        </div>
    </>
);

export async function getStaticProps() {
    const res = await fetch(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`);
    const sources = await res.json();

    return {
        props: {
            sources: sources,
        },
    };
}

export default Sources;
