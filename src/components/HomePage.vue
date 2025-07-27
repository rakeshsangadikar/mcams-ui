<template>
  <DataTable :filters="filters" :value="songs" paginator showGridlines :rows="10" dataKey="title"
        filterDisplay="menu" :loading="loading" 
        :globalFilterFields="['title', 'artist', 'composer']">
    <template #header>
        <div class="flex justify-end gap-2">
            <IconField>
                <InputIcon>
                    <i class="pi pi-search" />
                </InputIcon>
                <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </IconField>
            <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
        </div>
    </template>
    <template #empty> <p style="text-align: center;">No data found.</p> </template>
    <template #loading> <p style="text-align: center;">Loading data. Please wait.</p> </template>
    <Column field="title" header="Title" sortable />
    <Column field="artist" header="Artist" sortable />
    <Column field="composer" header="Composer" sortable />
  </DataTable>
</template>

<script setup>
import { ref, watch } from 'vue'
import { FilterMatchMode } from 'primevue/api'

// Sample data
const songs = ref([
  { title: 'Song A', artist: 'Artist 1', composer: 'Composer 1' },
  { title: 'Song B', artist: 'Artist 2', composer: 'Composer 1' },
  { title: 'Song C', artist: 'Artist 1', composer: 'Composer 2' },
]);

// Search bar input
const globalFilter = ref('')
const loading = ref(false);

// Filters object for PrimeVue DataTable
const filters = ref({
  global: { value: '', matchMode: FilterMatchMode.CONTAINS }
})

// Sync search input to DataTable global filter
watch(globalFilter, (val) => {
  filters.value.global.value = val
})

// Clear filter
function clearFilter() {
  globalFilter.value = ''
  filters.value.global.value = ''
}
</script>
