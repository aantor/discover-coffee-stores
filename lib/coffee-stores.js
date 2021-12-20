import { createApi } from "unsplash-js"

const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
})

const getUrlForCoffeeStores = (latlong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?ll=${latlong}&query=${query}&client_id=${process.env.FOURSQUARE_CLIENT_ID}&client_secret=${process.env.FOURSQUARE_CLIENT_SECRET}&limit=${limit}`
}

export const fetchCoffeeStores = async () => {
  const response = await fetch(
    getUrlForCoffeeStores(
      "43.77172905590341,-79.42956318666391",
      "coffee stores",
      6
    ),
    {
      headers: {
        Authorization: "fsq3VIQ3m7TVwukILJ+4eqYNIk1ZVbG6NWG1AO1YtTEpXBE=",
      },
    }
  )
  const data = await response.json()
  return data.results
}
