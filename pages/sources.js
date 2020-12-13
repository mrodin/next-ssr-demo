import { Menu, Card } from "components";

import { getSources } from "../serverApi";

const Sources = ({ sources }) => (
    <div className="flex flex-col items-center bg-teal-200 min-h-screen">
        <Menu />
        <div className="py-10">
            <h1 className="text-5xl text-center text-accent-1">Sources</h1>
        </div>
        <div className="flex flex-wrap justify-center">
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

// getStaticProps function is going to run only
// on project build. Just like in case of
// getServerSideProps, Next.js will provide the
// props object to the page component.
export async function getStaticProps() {
    return {
        props: {
            sources: await getSources(),
        },
    };
}

export default Sources;
