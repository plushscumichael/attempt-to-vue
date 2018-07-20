<template>
  <div class = 'create-a-note'>
    <label class = 'create-a-note-label'>
      <input class = 'create-a-note-input'
             v-model='noteText'
             placeholder = 'push Enter after writing'
             @keydown.enter="createThisNote">
    </label>
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
      createThisNote(){
        this.notes.push({
          id: this.key,
          texts: this.noteText
        });
        this.increment();
        this.noteText = '';
        localStorage.setItem('note-storage', JSON.stringify(this.notes));
        this.$emit('createThisNote')
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
    align-items: center;
    padding: 2%;
  }

  .create-a-note-input{
    border: 1px solid dimgray;
    width: 300px;
    padding: 0 100px;
    height: 50px;
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
    border-radius: 10px;
  }

  .create-a-note-label{
    display: flex;
    align-items: normal;
  }

</style>
