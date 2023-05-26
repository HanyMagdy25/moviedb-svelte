<script>
  import PopularMovies from "../components/PopularMovies.svelte";
  import SearchMovie from "../components/SearchMovie.svelte";
  export let data;
  import { fly } from "svelte/transition";
  // console.log("moviesData", data.moviesData.results);
</script>

<section
  in:fly={{ y: 50, duration: 500, delay: 500 }}
  out:fly={{ duration: 400 }}
>
  <SearchMovie />
  <PopularMovies movies={data.moviesData.results} />
</section>
