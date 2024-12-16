const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4NjY0MGFjZGNkODlmMDNhMjBmYmQ3MmIzMjJmMCIsInN1YiI6IjY2MThmNDIxMmIyMTA4MDE3ZGJhMzczZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9zacjXzV3tffLuUl7UITZyh3HWWqzpQDN_1tfSG3W-Y';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const centralizedFetch = async (url) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const searchMovies = async (query) => {
  if (!query) return [];
  const url = `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;
  const json = await centralizedFetch(url);
  return json.results;
};

export const fetchMovie = async (id) => {
  const url = `${API_BASE_URL}/movie/${id}`;
  return await centralizedFetch(url);
};

export const fetchMovieFromTitle = async (title) => {
  const url = `${API_BASE_URL}/movie/${title}`;
  return await centralizedFetch(url);
};

export const fetchCredits = async (id) => {
  const url = `${API_BASE_URL}/movie/${id}/credits`;
  return await centralizedFetch(url);
};

export const fetchCreditsFromTitle = async (title) => {
  const url = `${API_BASE_URL}/movie/${title}/credits`;
  return await centralizedFetch(url);
};

export const fetchPerson = async (id) => {
  const url = `${API_BASE_URL}/person/${id}`;
  return await centralizedFetch(url);
};