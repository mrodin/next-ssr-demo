import { Card } from "components";

import { getSources } from "../serverApi";

const Sources = ({ sources }) => (
    <div className="bg-teal-200 min-h-screen">
        <div className="py-10">
            <h1 className="text-5xl text-center text-accent-1">Sources</h1>
        </div>
        <div className="flex flex-wrap">
            {sources.map((source) => (
                <Card
                    key={source.id}
                    id={source.id}
                    name={source.name}
                    description={source.description}
                />
            ))}
        </div>
    </div>
);

export async function getStaticProps() {
    const sources = await getSources();

    return {
        props: {
            sources: sources,
        },
    };
}

export default Sources;
