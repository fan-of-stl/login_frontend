<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">
      Here is the list of {{ movies.length }} Movies
    </h2>

    <div class="movie-list flex mx-auto flex-nowrap overflow-auto">
      <div
        class="card movie-card mx-auto my-4"
        v-for="(movie, index) in movies"
        :key="index"
      >
        <div class="card-body">
          <div class="rank">{{ index + 1 }}</div>

          <img
            :src="movie.poster"
            class="card-img-top movie-image"
            alt="Movie Image"
          />

          <div class="movie-info">
            <h5 class="card-title">{{ movie.name }}</h5>
            <div class="card-text">
              <p class="text-center">
                <strong> {{ movie.title }} </strong>
              </p>
              <strong>Genre:</strong> {{ movie.genre }} <br />
              <strong>Language:</strong> {{ movie.language }} <br />
              <strong>Release Date:</strong>
              {{ new Date(movie.releasedDate * 1000).toDateString() }}
            </div>

            <div class="voting">
              <button class="btn btn-success btn-sm me-2">
                <font-awesome-icon :icon="['fas', 'thumbs-up']" />
              </button>
              <button class="btn btn-danger btn-sm">
                <font-awesome-icon :icon="['fas', 'thumbs-down']" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      });
      this.movies = response.data.result;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.movie-list {
  padding-bottom: 10px;
}

.movie-card {
  max-width: 350px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.rank {
  font-size: 2rem;
  color: #dc3545;
  font-weight: bold;
}

.movie-image {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.movie-info {
  padding-top: 10px;
}

.voting {
  display: flex;
  align-items: center;
}

.vote-count {
  font-size: 1.5rem;
  margin-right: 10px;
}
</style>
