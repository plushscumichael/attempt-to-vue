<template>
  <div class = 'note-app container row'>
    <app-header/>
    <left-sidebar/>
    <div class = 'note-functional'>
      <transition name="bounce">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>

  import NoteList from './NoteList.vue'
  import ArchiveList from './ArchiveList.vue'
  import CreateTheNote from './CreateTheNote.vue'
  import LeftSidebar from './LeftSidebar.vue'
  import AppHeader from './AppHeader.vue'

  export default{
    components:{
      NoteList, CreateTheNote, LeftSidebar, AppHeader, ArchiveList
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  body {
    background-color: #e8e8e8;
  }

  .container{
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;
  }

  .note-functional{
    width: 80%;
    display:flex;
    justify-content: center;
  }

  .row{
    display: flex;
    flex-wrap: wrap;
  }

  .bounce-enter-active {
    animation: bounce-in .3s;
  }

  .bounce-leave-active {
    animation: bounce-in .3s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
