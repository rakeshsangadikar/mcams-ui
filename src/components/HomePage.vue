<template>
  <div class="p-4">
    <Card class="shadow-3 border-round-xl">
      <template #title>
        🎵 Music Library
      </template>

      <template #content>
        <!-- Search bar aligned right -->
        <div class="flex justify-content-end align-items-center gap-2 mb-3">
          <span class="p-input-icon-left w-25rem">
            <InputText
              v-model="globalFilter"
              placeholder="Search all..."
              class="w-full"
            />
          </span>
          <Button
            icon="pi pi-filter-slash"
            rounded
            text
            severity="secondary"
            @click="clearFilter"
            v-tooltip="'Clear Search'"
          />
        </div>

        <!-- Data Table -->
        <DataTable
          :value="songs"
          :filters="filters"
          :globalFilterFields="['title', 'artist', 'composer']"
          paginator
          :rows="5"
          stripedRows
          dataKey="title"
          emptyMessage="No matching songs found. Try adjusting your search or filters."
        >
          <Column field="title" header="Title" sortable />
          <Column field="artist" header="Artist" sortable />
          <Column field="composer" header="Composer" sortable />
        </DataTable>
      </template>
    </Card>
  </div>
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
}
</script>
