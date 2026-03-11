export const getCategories = async () => {
    try {
        const res = await fetch('/api/category');
        const json = await res.json();
        return json.categories || [];
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};

export const getNews = async (limit = 20) => {
    try {
        const res = await fetch(`/api/news?limit=${limit}`);
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
};

export const searchNews = async (query) => {
    if (!query) return [];
    try {
        const res = await fetch(`/api/news?s=${encodeURIComponent(query)}`);
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("Error searching news:", error);
        return [];
    }
};
