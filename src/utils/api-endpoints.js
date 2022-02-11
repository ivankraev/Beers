export const endpoints = {
  beersList: `beers`,
  randomBeer: 'beers/random',
  search: (slug) => {
    return `beers/?beer_name=${slug}`
  },
  getSingleBeer: (id) => {
    return `${id}`
  },
  paginatedBeers: (page, beersPerPage) => {
    return `beers?page=${page}&per_page=${beersPerPage}`
  },
}
