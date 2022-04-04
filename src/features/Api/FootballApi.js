import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const footballApiHeaders = {
  "X-Auth-Token": "ec1096e77cd94337b2e33e1c8da4c93e",
};

const baseUrl = "https://api.football-data.org/v2/";

const createRequest = (url) => ({ url, headers: footballApiHeaders });

export const footballApi = createApi({
  reducerPath: "footballApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCompetitions: builder.query({
      query: () => createRequest(`/competitions`),
    }),
    getMatches: builder.query({
      query: (id) => createRequest(`/competitions/${id}/matches`),
    }),
    getMatchDetails: builder.query({
      query: (id) => createRequest(`/matches/${id}`),
    }),
  }),
});

export const {
  useGetCompetitionsQuery,
  useGetMatchesQuery,
  useGetMatchDetailsQuery,
} = footballApi;
