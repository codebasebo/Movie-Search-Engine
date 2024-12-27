const API_KEY = "your_api_key";
const API_URL = "https://api.themoviedb.org/3";

export async function getMovies() {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export async function searchMovies(query) {
    const response = await fetch(
        `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`);
    const data = await response.json();
    return data.results;
}