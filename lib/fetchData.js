import * as localData from "./localData";

export async function getSettings() {
    return localData.getSettings();
}

export async function getMenus() {
    // Menus can be derived from categories for now
    const categories = await localData.getFeaturedCategories();
    return categories.map(cat => ({
        id: cat.id,
        title: cat.name,
        slug: cat.slug,
        url: `/category/${cat.slug}`
    }));
}

export async function getNews(perPage = 20) {
    return localData.getNews(perPage);
}

export async function getSingleNews(slug) {
    return localData.getSingleNews(slug);
}

export async function getFeaturedNews() {
    return localData.getTrendingNews();
}

export async function getTrandingNews() {
    return localData.getTrendingNews();
}

export async function getLeadNews() {
    // For now, use breaking news as lead news
    return localData.getBreakingNews(10);
}

export async function getNewsByCat(slug, perPage = 20) {
    return localData.getNewsByCat(slug, perPage);
}

export async function getBreakingNews(perPage = 30) {
    return localData.getBreakingNews(perPage);
}

export async function getMaxViewedNewsByCat(slug, perPage = 8) {
    return localData.getNewsByCat(slug, perPage);
}

export async function getCategoryNews(slug, page = 1, perPage = 10) {
    return localData.getCategoryNews(slug, page, perPage);
}

export async function getFeaturedCategories() {
    return localData.getFeaturedCategories();
}

export async function getTrendingTags() {
    return localData.getTrendingTags();
}

export async function getVideoNews(page = 1, perPage = 12) {
    return localData.getVideoNews(page, perPage);
}

export async function getSingleVideoNews(slug) {
    // Placeholder - assuming slug works like ID for videos too
    const res = await localData.getVideoNews(1, 100);
    return res.data.find(v => v._id.toString() === slug) || {};
}

export async function searchNews(query) {
    return localData.searchNews(query);
}

export async function getSingleCategories(slug) {
    return localData.getSingleCategories(slug);
}

export async function getDivisions() {
    return localData.getDivisions();
}

export async function getDistricts(divisionId) {
    return localData.getDistricts(divisionId);
}

export async function getNewsByLocation(divisionId, districtId, page = 1, perPage = 10) {
    return localData.getNewsByLocation(divisionId, districtId, page, perPage);
}
