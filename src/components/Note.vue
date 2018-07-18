<template>
  <div class = "note">
    {{ note.texts }}
    <div class="note-buttons">
      <button @click="changeTheNote">Change</button>
      <button @click="killTheNote">Delete</button>
      <button @click="archivateTheNote">Archivate</button>
    </div>
  </div>
</template>

<script>

  import NoteKeep from '../js/NoteKeep.js'

  export default{
    data:() => ({
        notes: []
    }),
    props:{
      note:{
        type: Object,
        required: true
      }
    },
    methods:{
      killTheNote(){
        this.$emit('killTheNote', this.note.id);
        localStorage.setItem('note-storage', JSON.stringify(this.notes));
      },
      archivateTheNote(){
        this.$emit('archivateTheNote', this.note.id);
        localStorage.setItem('archive-storage', JSON.stringify(this.archiveNotes));
        localStorage.setItem('note-storage', JSON.stringify(this.notes));
      },
      changeTheNote(){
        NoteKeep.changeTheNote(this.note.id);
        this.$router.push('/note/'+this.note.id)
      }
    },
    created(){
      this.notes = NoteKeep.notes;
      this.archiveNotes = NoteKeep.archiveNotes
    },
    mounted(){
      NoteKeep.changeTheNote(this.$route.params.id)
    }
  }
</script>

<style>

  .note{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #0f76b3;
    width: 300px;
    height: 300px;
    margin: 10px;
    color: black;
    font-size: 20px;
    text-align: center;
  }

  .note-buttons{
    font-size: 15px;
    margin-bottom: 10px;
  }
</style>
