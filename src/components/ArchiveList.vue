<template>
  <draggable v-model="archiveNotes" class = 'row note-list'>
    <note-archive
      v-for="(note,i) in archiveNotes"
      :key="note.id"
      :note="note"
      :index="(i+1)"
      @dearchivateTheNote="notes.push({id: note.id,
                           texts: archiveNotes[i].texts}),
                           archiveNotes.splice(i,1)"></note-archive>
  </draggable>
</template>

<script>
  import NoteKeep from '../js/NoteKeep.js'
  import NoteArchive from './NoteArchive.vue'
  import draggable from 'vuedraggable'

  export default{
    components:{
      NoteArchive, draggable
    },
    data:() => ({
        notes: [],
        archiveNotes: []
    }),
    created(){
      this.notes = NoteKeep.notes;
      this.archiveNotes = NoteKeep.archiveNotes;
    }
  }
</script>
