<template>
      <form @submit.prevent = 'changeThisNote' >
        <label class = 'note-details'>
          <textarea class = 'note-textarea' v-model='noteText'> </textarea>
          <button class="create-a-note-button">Change</button>
        </label>
      </form>
</template>

<script>
  import Note from './Note.vue'
  import NoteKeep from '../js/NoteKeep.js'


  export default{
    components: {
      Note
    },
    data (){
      return{
        notes:[],
        noteText: ''
      }
    },
    methods:{
        changeThisNote(){
         // console.log(this.$route.params.id)
         // this.notes[this.$route.params.id].texts = this.noteText;
          const index = this.notes.findIndex(elem => String(elem.id) === String(this.$route.params.id))
          this.notes[index].texts = this.noteText;
          this.noteText = '';
          localStorage.setItem('note-storage', JSON.stringify(this.notes));
          this.$router.push('/')
        }
    },
    created (){
        this.notes = NoteKeep.notes;
    },
    mounted (){
      NoteKeep.changeTheNote(this.$route.params.id)
    }
  }
</script>

<style>

  .note-details{
    display:flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    background-color: white;
    width: 300px;
    height: 300px;
    margin: 10px;
    color: black;
    font-size: 20px;
  }

  .note-textarea{
    border: 1px solid #0f76b3;
    outline: none;
    width: 297px;
    height: 240px;
    resize:none;
    font-size: 20px;
  }

</style>
