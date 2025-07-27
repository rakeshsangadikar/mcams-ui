<template>
  <div class="p-4">
    <Toast />

    <!-- Header -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Admin Dashboard</h2>
      <Button v-if="isLoggedIn" label="Logout" icon="pi pi-sign-out" @click="logout" severity="danger" />
    </div>

    <!-- Artist Management -->
    <Panel header="Manage Artists" toggleable>
      <div class="flex mb-2 gap-2">
        <InputText v-model="newArtist" placeholder="New artist name" class="w-full" />
        <Button icon="pi pi-plus" @click="addArtist" label="Add" />
      </div>
      <DataTable :value="artists" dataKey="id" :rows="5" stripedRows>
        <Column field="name" header="Name" />
        <Column header="Actions">
          <template #body="{ data, index }">
            <Button icon="pi pi-pencil" class="mr-2" @click="editArtist(index)" />
            <Button icon="pi pi-trash" severity="danger" @click="deleteArtist(index)" />
          </template>
        </Column>
      </DataTable>
    </Panel>

    <!-- Composer Management -->
    <Panel header="Manage Composers" toggleable class="mt-4">
      <div class="flex mb-2 gap-2">
        <InputText v-model="newComposer" placeholder="New composer name" class="w-full" />
        <Button icon="pi pi-plus" @click="addComposer" label="Add" />
      </div>
      <DataTable :value="composers" dataKey="id" :rows="5" stripedRows>
        <Column field="name" header="Name" />
        <Column header="Actions">
          <template #body="{ data, index }">
            <Button icon="pi pi-pencil" class="mr-2" @click="editComposer(index)" />
            <Button icon="pi pi-trash" severity="danger" @click="deleteComposer(index)" />
          </template>
        </Column>
      </DataTable>
    </Panel>

    <!-- Song Management -->
    <Panel header="Manage Songs" toggleable class="mt-4">
      <div class="flex mb-2 gap-2">
        <InputText v-model="newSong.title" placeholder="Song Title" class="w-full" />
        <InputText v-model="newSong.artist" placeholder="Artist" class="w-full" />
        <InputText v-model="newSong.composer" placeholder="Composer" class="w-full" />
        <Button icon="pi pi-plus" @click="addSong" label="Add" />
      </div>
      <DataTable :value="songs" dataKey="title" :rows="5" stripedRows>
        <Column field="title" header="Title" />
        <Column field="artist" header="Artist" />
        <Column field="composer" header="Composer" />
        <Column header="Actions">
          <template #body="{ data, index }">
            <Button icon="pi pi-pencil" class="mr-2" @click="editSong(index)" />
            <Button icon="pi pi-trash" severity="danger" @click="deleteSong(index)" />
          </template>
        </Column>
      </DataTable>
    </Panel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Panel from 'primevue/panel'

const toast = useToast()

const isLoggedIn = ref(true)

const logout = () => {
  isLoggedIn.value = false
  toast.add({ severity: 'info', summary: 'Logged out', life: 2000 })
}

const artists = ref([{ id: 1, name: 'Artist 1' }])
const newArtist = ref('')
const addArtist = () => {
  if (newArtist.value) {
    artists.value.push({ id: Date.now(), name: newArtist.value })
    toast.add({ severity: 'success', summary: 'Artist added' })
    newArtist.value = ''
  }
}
const editArtist = (index) => toast.add({ summary: 'Edit artist clicked', detail: artists.value[index].name })
const deleteArtist = (index) => artists.value.splice(index, 1)

const composers = ref([{ id: 1, name: 'Composer 1' }])
const newComposer = ref('')
const addComposer = () => {
  if (newComposer.value) {
    composers.value.push({ id: Date.now(), name: newComposer.value })
    toast.add({ severity: 'success', summary: 'Composer added' })
    newComposer.value = ''
  }
}
const editComposer = (index) => toast.add({ summary: 'Edit composer clicked', detail: composers.value[index].name })
const deleteComposer = (index) => composers.value.splice(index, 1)

const songs = ref([
  { title: 'Song A', artist: 'Artist 1', composer: 'Composer 1' }
])
const newSong = ref({ title: '', artist: '', composer: '' })
const addSong = () => {
  if (newSong.value.title && newSong.value.artist && newSong.value.composer) {
    songs.value.push({ ...newSong.value })
    toast.add({ severity: 'success', summary: 'Song added' })
    newSong.value = { title: '', artist: '', composer: '' }
  }
}
const editSong = (index) => toast.add({ summary: 'Edit song clicked', detail: songs.value[index].title })
const deleteSong = (index) => songs.value.splice(index, 1)
</script>

<style scoped>
.panel {
  margin-bottom: 1rem;
}
</style>
