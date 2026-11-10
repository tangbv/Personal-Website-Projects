const API_KEY = "afd0dfa55fmsh64bd756f13fb863p113963jsn2f8a030fbb2e"
const API_HOST = "ski-resorts-and-conditions.p.rapidapi.com";
const BASE_URL = `https://${API_HOST}`;

const headers = {
  "x-rapidapi-host": API_HOST,
  "x-rapidapi-key": API_KEY,
};

export const getSkiResorts = async () => {
  const response = await fetch(`${BASE_URL}/v1/resort`, { headers });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  const data = await response.json();
  return data.results;
};

export const searchResort = async (slug) => {
  const response = await fetch(
    `${BASE_URL}/v1/resort/${encodeURIComponent(slug)}`,
    { headers }
  );
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
};

// Turns "Whistler Blackcomb" into "whistler-blackcomb"
export const slugify = (name) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");