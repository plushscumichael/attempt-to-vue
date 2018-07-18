import NoteList from '../components/NoteList.vue'
import ArchiveList from '../components/ArchiveList.vue'
import NoteDetails from '../components/NoteDetails.vue'


export const routes = [
  {
    path: '/',
    component: NoteList
  },
  {
    path: '/archive',
    component: ArchiveList
  },
  {
    path: '*',
    component: NoteList
  },
  {
    path: '/note/:id',
    component: NoteDetails
  }
];
