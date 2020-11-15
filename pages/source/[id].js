import Headline from "../../components/Headline";
import { getSources, getSourceHeadlines } from "../../serverApi";

const Source = ({ headlines }) => {
    const title = headlines[0].source.name;
    return (
        <div className="flex flex-col items-center bg-pink-200 min-h-screen">
            <div className="py-10">
                <h1 className="text-5xl text-center text-accent-1">
                    {`${title} headlines`}
                </h1>
            </div>
            {headlines.map((headline) => (
                <Headline
                    key={headline.title}
                    title={headline.title}
                    content={headline.description}
                />
            ))}
        </div>
    );
};

export async function getStaticPaths() {
    const sources = await getSources();
    const paths = sources.map((source) => ({
        params: { id: source.id },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    return {
        props: {
            headlines: await getSourceHeadlines(params.id),
        },
    };
}

export default Source;
