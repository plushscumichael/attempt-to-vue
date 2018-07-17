<template>
  <div>
      <create-the-note></create-the-note>
          <draggable v-model="notes" class = 'row note-list'>
            <note
              v-for="(note,i) in notes"
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

  export default {
    components: {
      CreateTheNote, Note, draggable
    },
    data () {
      return {
        notes: [],
        archiveNotes: []
      }
    },
    created () {
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

</style>
