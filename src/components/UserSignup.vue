<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Signup</h2>

    <div v-if="showAlert" class="alert alert-warning alert-dismissible fade show" role="alert">
      You are already logged in. Redirecting you to the movie list page...
      <button type="button" class="btn-close" @click="closeAlert" aria-label="Close"></button>
    </div>

    <div v-if="showSuccessAlert" class="alert alert-success alert-dismissible fade show" role="alert">
      Registration successful! Redirecting to the login page...
      <button type="button" class="btn-close" @click="closeSuccessAlert" aria-label="Close"></button>
    </div>

    <form @submit.prevent="registerUser" class="shadow p-4 rounded bg-white">
      <div class="mb-3">
        <input v-model="username" placeholder="User Name" required class="form-control" />
      </div>
      <div class="mb-3">
        <input v-model="name" placeholder="Name" required class="form-control" />
      </div>
      <div class="mb-3">
        <input v-model="email" type="email" placeholder="Email" required class="form-control" />
      </div>
      <div class="mb-3">
        <input v-model="phonenumber" placeholder="Phone Number" required class="form-control" />
      </div>
      <div class="mb-3">
        <select v-model="profession" required class="form-select">
          <option disabled value="">Select Profession</option>
          <option>Developer</option>
          <option>Designer</option>
          <option>Manager</option>
        </select>
      </div>
      <div class="mb-3">
        <input v-model="password" type="password" placeholder="Password" required class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary w-100">Register</button>
      <p v-if="message" class="mt-3 text-center">{{ message }}</p>
    </form>

    <div class="text-center mt-4">
      <router-link to="/login" class="btn btn-secondary">Log In</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      phonenumber: '',
      profession: '',
      password: '',
      message: '',
      username: '',
      showAlert: false, 
      showSuccessAlert: false, 
    };
  },
  mounted() {
    
    const token = localStorage.getItem('token');
    if (token) {
      
      this.showAlert = true;

      setTimeout(() => {
        this.$router.push('/movies');
      }, 4000); 
    }
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:9000/api/register', {
          username: this.username,
          name: this.name,
          email: this.email,
          phonenumber: this.phonenumber,
          profession: this.profession,
          password: this.password,
        });
        this.message = response.data.message;

        
        this.showSuccessAlert = true;

        
        setTimeout(() => {
          this.$router.push('/login');
        }, 4000); 
      } catch (error) {
        this.message = error.response.data.error;
      }
    },
    closeAlert() {
      this.showAlert = false;
    },
    closeSuccessAlert() {
      this.showSuccessAlert = false;
    }
  }
};
</script>

<style scoped>
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
