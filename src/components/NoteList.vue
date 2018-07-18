<template>
  <div class ='note-list-content'>
    <create-the-note/>
    <draggable v-model="notes" class = 'row note-list'>
      <note
        v-for="(note,i) in filteredNotes"
        :key="note.id"
        :note="note"
        :index="(i+1)"
        @killTheNote="notes.splice(i,1)"
        @archivateTheNote="archiveNotes.push(notes[i]),
                           notes.splice(i,1)"></note>
    </draggable>
  </div>
</template>

<script>
  import Note from './Note.vue'
  import CreateTheNote from './CreateTheNote.vue'
  import NoteKeep from '../js/NoteKeep.js'
  import draggable from 'vuedraggable'
  import AppHeader from './AppHeader.vue'
  import { mapGetters } from 'vuex'

  export default{
    components:{
      CreateTheNote, Note, draggable, AppHeader
    },
    data:() => ({
        notes: [],
        archiveNotes: []
    }),
    computed:{
      filteredNotes(){
        return this.notes.filter((note) =>{
          return note.texts.match(this.searchFieldKey)
        })
      },
      ...mapGetters([
        'searchFieldKey'
      ])
    },
    created(){
      this.notes = NoteKeep.notes;
      this.archiveNotes = NoteKeep.archiveNotes;
    }
  }
</script>

<style>

 .note-list{
   display: flex;
   margin: 0 auto;
   justify-content: center;
 }

 .note-list-content{
    width: 100%;
 }

</style>
