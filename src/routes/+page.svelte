<script>
  import PopularMovies from "../components/PopularMovies.svelte";
  export let data;
  console.log("moviesData", data.moviesData.results);
</script>

<section>
  <PopularMovies movies={data.moviesData.results} />
</section>
