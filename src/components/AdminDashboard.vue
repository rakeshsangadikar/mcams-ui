<template>
  <div class="p-4">
    <Toast />

    <!-- Header -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Admin Dashboard</h2>
      <!-- <Button v-if="isLoggedIn" label="Logout" icon="pi pi-sign-out" @click="logout" severity="danger" /> -->
    </div>

    <!-- Tab View -->
    <TabView v-model:activeIndex="activeTab">
      <TabPanel header="Manage Artists">
        <AdminDataTable
          :columns="[
            { field: 'name', header: 'Name' },
          ]"
          :data="artists"
          category="artist"
          @add="addArtist"
          @edit="editArtist"
          @delete="deleteArtist"
        />
      </TabPanel>

      <TabPanel header="Manage Composers">
        <AdminDataTable
          :columns="[
            { field: 'name', header: 'Name' },
          ]"
          :data="composers"
          category="composer"
          @add="addComposer"
          @edit="editComposer"
          @delete="deleteComposer"
        />
      </TabPanel>

      <TabPanel header="Manage Songs">
        <AdminDataTable
          :columns="[
            { field: 'title', header: 'Title' },
            { field: 'artist', header: 'Artist' },
            { field: 'composer', header: 'Composer' },
          ]"
          :data="songs"
          category="song"
          @add="addSong"
          @edit="editSong"
          @delete="deleteSong"
        />
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import AdminDataTable from './AdminDataTable.vue'

const toast = useToast()

const isLoggedIn = ref(true)
const activeTab = ref(0)


// Artist Logic
const artists = ref([{ id: 1, name: 'Artist 1' }, { id: 2, name: 'Artist 2' }])
const newArtist = ref('')
const addArtist = () => {
  if (newArtist.value.trim()) {
    artists.value.push({ id: Date.now(), name: newArtist.value })
    toast.add({ severity: 'success', summary: 'Artist added' })
    newArtist.value = ''
  }
}
const editArtist = (index) => toast.add({ summary: 'Edit artist clicked', detail: artists.value[index].name })
const deleteArtist = (index) => artists.value.splice(index, 1)

// Composer Logic
const composers = ref([{ id: 1, name: 'Composer 1' }])
const newComposer = ref('')
const addComposer = () => {
  if (newComposer.value.trim()) {
    composers.value.push({ id: Date.now(), name: newComposer.value })
    toast.add({ severity: 'success', summary: 'Composer added' })
    newComposer.value = ''
  }
}
const editComposer = (index) => toast.add({ summary: 'Edit composer clicked', detail: composers.value[index].name })
const deleteComposer = (index) => composers.value.splice(index, 1)

// Songs Logic
const songs = ref([
  { title: 'Song A', artist: 'Artist 1', composer: 'Composer 1' }
])
const newSong = ref({ title: '', artist: '', composer: '' })
const addSong = () => {
  const { title, artist, composer } = newSong.value
  if (title.trim() && artist.trim() && composer.trim()) {
    songs.value.push({ ...newSong.value })
    toast.add({ severity: 'success', summary: 'Song added' })
    newSong.value = { title: '', artist: '', composer: '' }
  }
}
const editSong = (index) => toast.add({ summary: 'Edit song clicked', detail: songs.value[index].title })
const deleteSong = (index) => songs.value.splice(index, 1)
</script>

<style scoped>
/* Optional spacing tweaks if needed */
</style>
