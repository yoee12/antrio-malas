<template>
  <div class="sidebar">
    <div class="logo">
      <h1>ANTRIO</h1>
    </div>
    <div class="profile">
      <div class="avatar">
        <img src="https://via.placeholder.com/80" alt="Profile" />
      </div>
      <div class="user-info">
        <h3>{{ user.name }}</h3>
        <p class="role">{{ user.role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = {
  name: 'Budiono Siregar',
  role: 'Teller',
}
</script>

<style scoped>
.sidebar {
  width: 300px;
  background-color: #47aa52;
  color: white;
  padding: 20px 0;
  height: 100vh;
  position: sticky;
  top: 0;
}

.logo {
  padding: 10px 20px 30px;
}

.logo h1 {
  font-family: poppins;
  margin: 0 10px 0;
  font-size: 24px;
}

.profile {
  font-family: poppins;
  padding: 20px;
  text-align: left;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 10px 15px;
  border: 2px solid #1d822e;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info h3 {
  margin: 0 10px 5px;
  font-size: 18px;
}

.role {
  font-family: poppins;
  margin: 0 10px 0;
  color: #ffffff;
  font-size: 14px;
}
</style>
