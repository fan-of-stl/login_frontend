<template>
    <div class="home">
      <h2 class="text-center">Welcome to the Login Application</h2>
      <p class="text-center">Please choose to sign up or log in using the navigation links above.</p>
    
      
      <div class="text-center m-4">
        <router-link to="/signup" class="btn btn-primary">Sign Up</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .home {
    margin: 20px;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 30px;
  }
  
  .btn {
    margin: 5px;
  }
  </style>
  