<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">All Users</h2>
  
      <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ errorMessage }}
        <button type="button" class="btn-close" @click="closeAlert" aria-label="Close"></button>
      </div>
  
      <table v-if="users.length > 0" class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user._id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.phonenumber }}</td>
            <td>{{ user.profession }}</td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="users.length === 0 && !errorMessage" class="alert alert-warning mt-3">
        No users found.
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        users: [], 
        errorMessage: '', 
      };
    },
    mounted() {
      this.fetchUsers(); 
    },
    methods: {
      async fetchUsers() {
        const token = localStorage.getItem('token'); 
  
       
        if (!token) {
          this.errorMessage = 'Authorization token is missing. Redirecting to login...';
          setTimeout(() => {
            this.$router.push('/login'); 
          }, 4000);
          return;
        }
  
        try {
         
          const response = await axios.get('http://localhost:9000/api/all-users', {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          });
  
          this.users = response.data.users; 
        } catch (error) {
          
          this.errorMessage = 'Failed to fetch users. Please check your login or try again.';
          setTimeout(() => {
            this.$router.push('/login'); 
          }, 2000);
        }
      },
      closeAlert() {
        this.errorMessage = '';
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    background-color: #f8f9fa;
  }
  
  h2 {
    font-weight: bold;
  }
  </style>
  