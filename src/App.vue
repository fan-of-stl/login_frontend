<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">YourCompany</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto" v-if="isAuthenticated">
            <li class="nav-item">
              <router-link class="nav-link" to="/company-info">Company Info</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/all-users">All Users</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/update">Update</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/movies">Movies List</router-link>
            </li>
          </ul>
          <button class="btn" :class="isAuthenticated ? 'btn-outline-danger' : 'btn-outline-success'" @click="isAuthenticated ? logout() : goToLogin()">
            {{ isAuthenticated ? 'Logout' : 'Login' }}
          </button>
        </div>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: !!localStorage.getItem('token')
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.isAuthenticated = false;
      this.$router.push('/');
    },
    goToLogin() {
      this.$router.push('/login');
    }
  },
  watch: {
    '$route'() {
      this.isAuthenticated = !!localStorage.getItem('token');
    }
  }
};
</script>

<style scoped>
</style>
