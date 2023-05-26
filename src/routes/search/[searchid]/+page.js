export const load = async ({ fetch, params }) => {
      // console.log("params", params.searchid);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=974253bce4d1b963fbb17879f0e9414c&language=en-US&page=1&include_adult=false&query=${params.searchid}`
      );
      const searchResult = await res.json();
    
      return {
        searchResult,
      };
    };