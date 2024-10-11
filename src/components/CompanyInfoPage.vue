<template>
    <div class="container-fluid mt-5">
      <h2 class="text-center mb-4">Company Employee info</h2>

      <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ errorMessage }}
        <button type="button" class="btn-close" @click="closeAlert" aria-label="Close"></button>
      </div>
  
      <div v-if="dashboardData" class="row">
        <div class="col">
          <div class="card">
            <div class="card-body row">
              <h5 class="card-title text-center">Details</h5>
              <div class="card-text col"><div class="fw-bold d-inline">Uername:</div> {{ dashboardData.user.username }}</div>
              <div class="card-text col"><div class="fw-bold d-inline">Name:</div> {{ dashboardData.user.name }}</div>
            </div>
          </div>
        </div>
        
      </div>
  
      <div v-if="!dashboardData && !errorMessage" class="alert alert-warning mt-3">
        No dashboard data available.
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        dashboardData: null, // To store the dashboard data
        errorMessage: '', // To store the error message
      };
    },
    mounted() {
      this.fetchDashboardData(); // Fetch dashboard data when the component is mounted
    },
    methods: {
      async fetchDashboardData() {
        const token = localStorage.getItem('token'); // Get the token from localStorage
  
        // If the token is missing, redirect to login page
        if (!token) {
          this.errorMessage = 'Authorization token is missing. Redirecting to login...';
          setTimeout(() => {
            this.$router.push('/login'); // Redirect to login page after showing the alert
          }, 2000);
          return;
        }
  
        try {
          // API call to fetch dashboard data with Bearer token
          const response = await axios.get('http://localhost:9000/api/dashboard', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          // Store the dashboard data
          this.dashboardData = response.data;
        } catch (error) {
          console.error("Error fetching dashboard data:", error);
          // Handle error and show a message
          this.errorMessage = 'Failed to fetch dashboard data. Please check your login or try again.';
          setTimeout(() => {
            this.$router.push('/login'); // Redirect to login page
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
  
  .card {
    border-radius: 10px;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-text {
    font-size: 1.2rem;
  }
  </style>
  