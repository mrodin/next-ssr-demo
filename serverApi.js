import { API_KEY } from "./properties";

export const getSources = async () => {
    const res = await fetch(
        `https://newsapi.org/v2/sources?category=technology&apiKey=${API_KEY}`
    );
    if (res.ok) {
        const sourcesJson = await res.json();
        return sourcesJson.sources;
    } else {
        return [];
    }
};

export const getSourceHeadlines = async (sourceId) => {
    const res = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${API_KEY}`
    );
    if (res.ok) {
        const headlinesJson = await res.json();
        return headlinesJson.articles;
    } else {
        return [];
    }
};
