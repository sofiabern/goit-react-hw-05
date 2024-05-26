import axios from "axios";

axios.defaults.baseURL="https://api.themoviedb.org/3/"

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTc0NTc5ZmJkYjhjZmMxNjFlOTAwMzUyZjUzMDIzMCIsInN1YiI6IjY2NTE4Njc1N2ZmODgwZThmZDU1OWE2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZiSA3lu2XJ_4iJRW9tbciZz9p8JnbeSMXxZ_tjXejEE",
  },
};

// Trending
export async function getDataTrending() {
  const response = await axios.get("/trending/movie/day", options);

  return response.data;
}


// Details
export async function getDataDetails(id) {
  const response = await axios.get(`/movie/${id}`, options);

  return response.data;
}

// Cast
export async function getDataCast(id) {
  const response = await axios.get(`/movie/${id}/credits`, options);

  return response.data;
}
