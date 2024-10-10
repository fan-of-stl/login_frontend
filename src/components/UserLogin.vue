<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">Login</h2>
  
      <div v-if="showAlert" class="alert alert-warning alert-dismissible fade show" role="alert">
        You were already logged in. Redirecting you to the movie list page...
        <button type="button" class="btn-close" @click="closeAlert" aria-label="Close"></button>
      </div>
  
      <form @submit.prevent="loginUser" class="shadow p-4 rounded bg-white">
        <div class="mb-3">
          <input v-model="email" type="email" placeholder="Email" required class="form-control" />
        </div>
        <div class="mb-3">
          <input v-model="password" type="password" placeholder="Password" required class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
        <p v-if="message" class="mt-3 text-center">{{ message }}</p>
      </form>
  
      <div class="text-right mt-4">
        <router-link to="/signup" class="btn btn-primary">Sign Up</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        message: '',
        showAlert: false
      };
    },
    mounted() {
      const token = localStorage.getItem('token');
      if (token) {
        this.showAlert = true;
  
       
        setTimeout(() => {
          this.$router.push('/movies');
        }, 3000); 
      }
    },
    methods: {
      async loginUser() {
        try {
          const response = await axios.post('http://localhost:9000/api/login', {
            email: this.email,
            password: this.password,
          });
          this.message = response.data.message;
          localStorage.setItem('token', response.data.token);
          this.$router.push('/movies'); 
        } catch (error) {
          this.message = error.response.data.message;
        }
      },
      closeAlert() {
        this.showAlert = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom styles */
  body {
    background-color: #f8f9fa;
  }
  h2 {
    font-weight: bold;
  }
  .message {
    color: red;
  }
  </style>
  