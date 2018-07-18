import Vue from 'vue'
import _ from 'lodash';
import store from '../store/store.js'

export default new Vue({
  data: {
    notes:[],
    archiveNotes: []
  },
  created () {
    this.notes = JSON.parse(localStorage.getItem('note-storage') || '[]');
    this.archiveNotes = JSON.parse(localStorage.getItem('archive-storage') || '[]');

    const arr = this.notes.map(item => item.id);
    const archivateArr = this.archiveNotes.map(item => item.id);
    let id = Math.max(Math.max.apply(null, arr), Math.max.apply(null, archivateArr));
    if (id === -Infinity) {
      id = 0
    }
    store.commit('saveId', id+1)
  },
  methods:{
    changeTheNote(id){
      let noteId = _.find(this.notes, {id: parseInt(id)});
      this.$emit("changeTheNote",noteId)
    }
  }
})
