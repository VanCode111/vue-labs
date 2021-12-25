<template>
  <header class="header">
    <router-link to="/" class="logo"
      ><img src="../assets/img/logo.svg" alt="logo"
    /></router-link>
    <nav class="menu">
      <ul class="list">
        <li class="list-item">
          <router-link class="list-link" to="/">Home</router-link>
        </li>
        <li class="list-item">
          <router-link class="list-link" to="/news">News</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 20px;
  display: flex;
  align-items: center;
}
.list {
  display: flex;
  list-style: none;
  gap: 20px;
}

.menu {
  margin-left: 20px;
}

.list-link {
  text-decoration: none;
  font-size: 25px;
  color: black;
  opacity: 0.6;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
}

.router-link-exact-active {
  opacity: 1;
  color: #0085ff;
}
</style>
