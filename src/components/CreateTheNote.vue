<template>
  <div class = 'create-a-note'>
    <button class = 'create-a-note-button' @click='showCreate'>Create a note</button>
    <transition name="fade">
      <form v-show = 'createNote' @submit.prevent = 'createThisNote'>
        <label class = 'create-a-note-label'>
          <textarea class = 'create-a-note-input' v-model='noteText'> </textarea>
          <button class = 'create-note-button'>Create</button>
        </label>
      </form>
    </transition>
  </div>
</template>

<script>
  import Note from './Note.vue'
  import NoteKeep from '../js/NoteKeep.js'
  import { mapMutations, mapGetters } from 'vuex'

  export default{
    components:{
      Note
    },
    data:() => ({
      noteText: '',
      createNote: false,
      notes:[]
    }),
    computed:{
      ...mapGetters([
        'key'
      ])
    },
    methods:{
      ...mapMutations([
        'increment'
      ]),
      showCreate(){
        this.createNote = !this.createNote
      },
      createThisNote(){
        this.notes.push({
          id: this.key,
          texts: this.noteText
        });
        this.increment();
        this.noteText = '';
        localStorage.setItem('note-storage', JSON.stringify(this.notes));
      }
    },
    created(){
      this.notes = NoteKeep.notes;
      this.archiveNotes = NoteKeep.archiveNotes;
    }
  }
</script>

<style>

  .create-a-note{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }

  .create-a-note-button{
    padding: 15px 200px;
    border: 1px solid #0f76b3;
    font-size: 16px;
    color: #0f76b3;
    background-color: #fff;
    transition: color .5s ease, background-color .3s ease;
  }

  .create-a-note-button:hover{
    background-color: #118dd4;
    color: #fff;
  }

  .create-a-note-input{
    border: 1px solid #0f76b3;
    outline: none;
    resize:none;
    width: 240px;
    height: 60px;
    font-size: 20px;
  }

  .create-a-note-label{
    display: flex;
    align-items: normal;
  }

  .create-note-button{
    border: 1px solid #0f76b3;
    font-size: 16px;
    color: #0f76b3;
    background-color: #fff;
    transition: color .5s ease, background-color .3s ease;
  }

  .create-note-button:hover{
    background-color: #118dd4;
    color: #fff;
  }

  .select-a-color{
    padding:0 61px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.0s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
