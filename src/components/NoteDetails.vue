<template>
    <form @submit.prevent = 'changeThisNote' class="note-details-form" >
      <label class = 'note-details'>
        <div class = 'current-note'>{{this.notes[this.notes.findIndex(elem => String(elem.id) === String(this.$route.params.id))].texts}}</div>
        <textarea class = 'note-textarea' v-model='noteText'> </textarea>
      </label>
      <button class="note-details-button">Change</button>
    </form>
</template>

<script>
  import Note from './Note.vue'
  import NoteKeep from '../js/NoteKeep.js'

  export default{
    components:{
      Note
    },
    data:() => ({
      notes: [],
      noteText: ''
    }),
    methods:{
      changeThisNote(){
        const index = this.notes.findIndex(elem => String(elem.id) === String(this.$route.params.id));
        this.notes[index].texts = this.noteText;
        this.noteText = '';
        localStorage.setItem('note-storage', JSON.stringify(this.notes));
        this.$router.push('/')
      }
    },
    created(){
      this.notes = NoteKeep.notes;
    }
  }
</script>

<style>

  .note-details-form{
    display:flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .note-details{
    display:flex;
    border: 1px solid white;
    background-color: white;
    color: black;
    font-size: 20px;
  }

  .note-textarea{
    border: 1px solid #0f76b3;
    outline: none;
    width: 300px;
    height: 300px;
    resize:none;
    font-size: 20px;
    margin: 20px;
  }

  .current-note{
    border: 1px solid #0f76b3;
    width: 300px;
    height: 300px;
    color: black;
    font-size: 20px;
    text-align: center;
    margin: 20px;
  }

  .note-details-button{
    padding: 15px 200px;
    border: 1px solid #0f76b3;
    font-size: 16px;
    color: #0f76b3;
    background-color: #fff;
    transition: color .5s ease, background-color .3s ease;
  }

  .note-details-button:hover{
    background-color: #118dd4;
    color: #fff;
  }

</style>
