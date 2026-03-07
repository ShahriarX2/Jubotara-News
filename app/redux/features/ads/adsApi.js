import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/ads" }),
  tagTypes: ["Ads"],
  endpoints: (builder) => ({
    // GET all ads
    getAds: builder.query({
      query: () => "",
      providesTags: ["Ads"],
    }),
    // ADD new ad
    addAd: builder.mutation({
      query: (ad) => ({
        url: "",
        method: "POST",
        body: ad,
      }),
      invalidatesTags: ["Ads"],
    }),
    // UPDATE ad
    updateAd: builder.mutation({
      query: ({ id, data }) => ({
        url: `?id=${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Ads"],
    }),
    // DELETE ad
    deleteAd: builder.mutation({
      query: (id) => ({
        url: `?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Ads"],
    }),
  }),
});

export const {
  useGetAdsQuery,
  useAddAdMutation,
  useUpdateAdMutation,
  useDeleteAdMutation,
} = adsApi;
