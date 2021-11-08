export const routes = {
  countriesPage: "/",
  countryPage: "/country/:countryId",
} as const;

export type Route = typeof routes[keyof typeof routes];
