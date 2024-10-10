<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">Movies List</h2>
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h3>Welcome to the Movies List</h3>
        <button @click="logoutUser" class="btn btn-danger">Logout</button>
      </div>
      <div v-if="movies.length > 0">
        <div class="movie" v-for="movie in movies" :key="movie.id">
          <h4>{{ movie.title }}</h4>
          <p>{{ movie.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        movies: [],
      };
    },
    async mounted() {
      try {
        const response = await axios.post('https://hoblist.com/api/movieList', {
          category: 'movies',
          language: 'kannada',
          genre: 'all',
          sort: 'voting',
        });
        this.movies = response.data.result;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      
      logoutUser() {
        localStorage.removeItem('token'); 
        this.$router.push('/'); 
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  .movie {
    margin-bottom: 20px;
  }
  </style>
  