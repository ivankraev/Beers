



export const endpoints = {
    beersList: `beers`,
    getSingleBeer: (id) => { return `${id}` },
    paginatedBeers: (page, beersPerPage) => { return `beers?page=${page}&per_page=${beersPerPage}` }

}