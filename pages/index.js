import { Menu, Headline } from "components";
import { getTopHeadlines } from "../serverApi";

const IndexPage = ({ topHeadlines }) => (
    <div className="flex flex-col items-center bg-pink-200 min-h-screen">
        <Menu />
        <div className="py-10">
            <h1 className="text-5xl text-center text-accent-1">
                Top headlines
            </h1>
        </div>
        {topHeadlines.map((headline) => (
            <Headline
                key={headline.title}
                title={headline.title}
                content={headline.description}
            />
        ))}
    </div>
);

// If the page exports getServerSideProps function,
// it's going to be pre-rendered on server on
// EVERY request. Next.js will inject the props object
// into the page component.
export async function getServerSideProps() {
    return {
        props: {
            topHeadlines: await getTopHeadlines(),
        },
    };
}

export default IndexPage;
