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
    console.log(store)
  },
  mounted(){
    const arr = this.notes.map(item => item.id)
    Math.max.apply(null, arr);
    store.commit('saveId',(Math.max.apply(null, arr)))
  },
  methods:{
    changeTheNote(id){
      let noteId = _.find(this.notes, {id: parseInt(id)});
      this.$emit("changeTheNote",noteId)
     }
  }
})
