<script>
  export let data;
  import { fly } from "svelte/transition";
</script>

<div class="movie-details" in:fly={{ y: 50, duration: 500 ,delay:500}} out:fly={{ duration: 400 }}>
  <div class="img-container">
    <img
      src={"https://image.tmdb.org/t/p/original" + data.oneMovie.backdrop_path}
      alt={data.oneMovie.title}
    />
  </div>
  <div class="txt-container">
    <h1>{data.oneMovie.title}</h1>
    <p class="overview">{data.oneMovie.overview}</p>
    <p>
      <span>Release Date :</span>
      {data.oneMovie.release_date} <br />
      <span>Budget :</span> ${data.oneMovie.budget} <br />
      <span>Rating :</span>
      {data.oneMovie.vote_average} <br />
      <span>Runtime :</span>
      {data.oneMovie.runtime} mins
    </p>
  </div>
</div>

<style>
  h1 {
    padding: 1rem 0 2rem;
  }
  p {
    padding: 1rem 0rem;
  }
  .img-container {
    width: 100%;
  }
  img {
    width: 100%;
    border-radius: 1rem;
  }
  .movie-details {
    margin: 2rem 5%;
  }
  span {
    font-weight: bold;
  }
</style>
