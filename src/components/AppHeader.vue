<template>
  <div class = 'app-header'>
    <input class = 'app-header__input' v-model = 'searchTheNotes'>
  </div>
</template>

<script>

  export default{
    data:() =>({
      searchTheNotes:''
    })
  }
</script>

<style>

  .app-header{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 75px;
    background-color: #16a8d4;
  }

  .app-header__input{
    padding: 0 250px;
    font-size: 40px;
    border-radius: 20px;
  }

</style>
