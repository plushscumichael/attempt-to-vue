<template>
  <div class = 'left-sidebar'>
      <router-link to="/" class = 'sidebar-button'>Заметки</router-link>
      <router-link to="/archive" class = 'sidebar-button'>Архив</router-link>
  </div>
</template>

<script>
  export default{}
</script>

<style>

  .left-sidebar{
    width: 20%;
    display: flex;
    flex-direction: column;
    background-color: #16a8d4;
    height: 275px;
  }

  .sidebar-button{
    display: inline-block;
    padding: 24px 32px;
    font-size: 21px;
    color: #0f76b3;
    text-align: center;
    text-decoration: none;
    background-color: white;
    transition: color .5s ease, background-color .3s ease;
  }

  .sidebar-button:hover{
    background-color: #118dd4;
    color: #fff;
  }

</style>
