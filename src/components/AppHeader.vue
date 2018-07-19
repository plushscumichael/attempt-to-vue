<template>
  <div class = 'app-header'>
    <div class = 'logo'>Note App by Michael</div>
    <input type='text' class = 'app-header__input' @input="searchTheNotes" :value="searchFieldKey">
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'

  export default{
    computed:{
      ...mapGetters([
        'searchFieldKey'
      ])
    },
    methods:{
      searchTheNotes(value){
        this.search(value.target.value);
      },
      ...mapMutations([
        'search'
      ])
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Chela+One');

  .app-header{
    display: flex;
    align-items: center;
    width:100%;
    height: 60px;
    background-color: #fb0;
  }

  .app-header__input{
    padding: 0 125px;
    font-size: 40px;
    border-radius: 10px;
  }

  .logo{
    height: 50px;
    font-family: 'Chela One', cursive;
    font-size: 40px;
    padding: 0 75px;
  }
</style>
