import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const footballApiHeaders = {
};

const baseUrl = "";

const createRequest = (url) => ({ url, headers: footballApiHeaders });

export const footballApi = createApi({
  reducerPath: "footballApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCompetitions: builder.query({
      query: (league) => createRequest(`/competitions`),
    }),
  }),
});

export const {
  useGetCompetitionsQuery,
} = footballApi;
