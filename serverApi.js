const API_KEY = "";

export const getTopHeadlines = async () => {
    const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`
    );
    if (res.ok) {
        const topHeadlinesJson = await res.json();
        return topHeadlinesJson.articles;
    } else {
        return [];
    }
};

export const getSources = async () => {
    const res = await fetch(
        `https://newsapi.org/v2/sources?country=us&category=technology&apiKey=${API_KEY}`
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
