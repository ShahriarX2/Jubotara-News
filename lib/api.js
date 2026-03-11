import * as localData from "./localData";

export const getNews = async (limit = 20) => {
    return localData.getNews(limit);
};

export const getTrendingNews = async (limit = 10) => {
    return localData.getTrendingNews(limit);
};

export const getNewsBySlug = async (slug) => {
    return localData.getSingleNews(slug);
};

export const getCategories = async () => {
    return localData.getFeaturedCategories();
};

export const searchNews = async (query) => {
    return localData.searchNews(query);
};

export const getVideoNews = async (page = 1, perPage = 12) => {
    return localData.getVideoNews(page, perPage);
};

export const getVideoNewsBySlug = async (slug) => {
    const res = await localData.getVideoNews(1, 100);
    return res.data.find(v => v._id.toString() === slug) || null;
};

export const getTeamMembers = async () => {
    // Team members mock data is still fine for now as it doesn't have a model
    return [
        { id: 1, name: "নিজস্ব প্রতিবেদক", role: "প্রতিবেদক", image: "/images/logo.png" }
    ];
};
