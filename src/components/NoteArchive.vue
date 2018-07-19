<template>
  <div class = "note-in-archive">
    {{ note.texts }}
    <button @click="dearchivateTheNote">Dearchivate</button>
  </div>
</template>

<script>
  import NoteKeep from '../js/NoteKeep.js'

  export default{
    props: {
      note: {
        type: Object,
        required: true
      }
    },
    methods:{
      dearchivateTheNote(){
        this.$emit('dearchivateTheNote', this.note.id);
        localStorage.setItem('note-storage', JSON.stringify(this.notes));
        localStorage.setItem('archive-storage', JSON.stringify(this.archiveNotes));
      }
    },
    created(){
      this.notes = NoteKeep.notes;
      this.archiveNotes = NoteKeep.archiveNotes
    }
  }

</script>

<style>

  .note-in-archive{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid dimgray;
    width: 250px;
    height: 250px;
    margin: 10px;
    color: black;
    font-size: 20px;
    text-align: center;
    overflow: hidden;
    word-break: break-all;
    background-color: whitesmoke;
  }

</style>
