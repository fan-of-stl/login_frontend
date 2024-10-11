<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">Update User</h2>
  
      <div v-if="showAlert" class="alert alert-success alert-dismissible fade show" role="alert">
        User details updated successfully. Redirecting to login page...
        <button type="button" class="btn-close" @click="closeAlert" aria-label="Close"></button>
      </div>
  
      <form @submit.prevent="updateUser" class="shadow p-4 rounded bg-white">
        <div class="mb-3">
          <input v-model="name" placeholder="Name" class="form-control" />
        </div>
        <div class="mb-3">
          <input v-model="email" type="email" placeholder="Email" class="form-control" />
        </div>
        <div class="mb-3">
          <input v-model="phone" placeholder="Phone Number" class="form-control" />
        </div>
        <div class="mb-3">
          <select v-model="profession" class="form-select">
            <option disabled value="">Select Profession</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>Manager</option>
          </select>
        </div>
        <div class="mb-3">
          <input v-model="password" type="password" placeholder="Password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary w-100">Update</button>
        <p v-if="message" class="mt-3 text-center">{{ message }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        profession: '',
        password: '',
        message: '',
        showAlert: false,
        userId: ''
      };
    },
    mounted() {
    
      this.fetchUserDetails();
    },
    methods: {
      async fetchUserDetails() {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get(`http://localhost:9000/api/user/${this.userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          
          const user = response.data;
          this.name = user.name;
          this.email = user.email;
          this.phone = user.phone;
          this.profession = user.profession;
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      },
      async updateUser() {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.put(`http://localhost:9000/api/update`, {
            name: this.name,
            email: this.email,
            phone: this.phone,
            profession: this.profession,
            password: this.password, 
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          this.message = response.data.message;
  
         
          this.showAlert = true;
  
          
          setTimeout(() => {
            this.$router.push('/login');
          }, 2000);
        } catch (error) {
          this.message = error.response?.data?.error || "An error occurred";
        }
      },
      closeAlert() {
        this.showAlert = false;
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
  