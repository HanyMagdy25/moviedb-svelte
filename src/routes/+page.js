// You can also write it like this
// export async function load({ fetch }) {

export const load = async (loadEvent) => {
  const { fetch } = loadEvent;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=974253bce4d1b963fbb17879f0e9414c&language=en-US&page=1`
  );
  const moviesData = await res.json();

  return {
    moviesData,
  };
};
