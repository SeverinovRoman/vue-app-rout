<template>
    <nav>
        <router-link to="/">Home Page</router-link>
        <router-link to="/info">Site Info</router-link>
        <router-link to="/link">Site Link</router-link>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
 nav {
     display: flex;
     justify-content: space-between;
     margin: 0 20%;
 }
 a {
     text-decoration: none;
     color: #2c3e50;
     font-size: 20px;
 }
 a:hover {
     color:coral;
 }
</style>