export const load = async ({ fetch, params }) => {
//   console.log("params", params.movieid);
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieid}?api_key=974253bce4d1b963fbb17879f0e9414c&append_to_response=credits`
  );
  const oneMovie = await res.json();

  return {
    oneMovie,
  };
};
