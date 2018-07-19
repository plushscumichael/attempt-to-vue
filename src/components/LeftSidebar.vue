<template>
  <div class = 'left-sidebar'>
      <router-link to="/" class = 'sidebar-button'>Notes</router-link>
      <router-link to="/archive" class = 'sidebar-button'>Archive</router-link>
  </div>
</template>

<script>
  export default{}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  .left-sidebar{
    width: 20%;
    display: flex;
    flex-direction: column;
    background-color: #e8e8e8;
  }

  .sidebar-button{
    display: inline-block;
    padding: 16px 0;
    font-size: 18px;
    color: black;
    text-align: center;
    text-decoration: none;
    transition: color 0.5s ease, background-color 0.3s ease;
    font-family: 'Raleway', sans-serif;
  }

  .sidebar-button:hover{
    background-color: dimgray;
    color: #fff;
  }

</style>
