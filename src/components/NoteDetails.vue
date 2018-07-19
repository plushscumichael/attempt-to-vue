<template>
  <label class="note-details-form">
    <textarea class = 'note-input'
              v-model='noteText'
              v-bind:placeholder="notes[this.notes.findIndex(elem => String(elem.id) === String(this.$route.params.id))].texts"
              @keydown.enter="changeThisNote"></textarea>
  </label>
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
        this.$router.push('/');
        this.$emit('changeThisNote')
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

  .note-input{
    border: 1px solid dimgray;
    width: 300px;
    height: 300px;
    resize:none;
    outline: none;
    font-size: 20px;
    color: black;
    margin: 5%;
  }

</style>
