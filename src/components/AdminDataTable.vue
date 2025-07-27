<template>
  <div class="mb-6">

    <DataTable
      :value="data"
      :columns="columns"
      paginator
      showGridlines
      removableSort
      :rows="10"
      :rowsPerPageOptions="[10, 20]"
      :filters="filters"
      :globalFilterFields="globalFields"
      class="p-datatable-sm shadow-md rounded-lg"
      responsiveLayout="scroll"
      style="width: 75%;">
      <template #header>
        <div class="flex justify-between">
            <Button
                label="Add"
                icon="pi pi-plus"
                severity="info"
                @click="$emit('add')"
            />
            <IconField class="flex gap-2">
                <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                <Button type="button" icon="pi pi-filter-slash" outlined @click="clearFilter()" />
            </IconField>
            
        </div>
      </template>
      <template #empty> <p style="text-align: center;">No data found.</p> </template>
      <template #loading> <p style="text-align: center;">Loading data. Please wait.</p> </template>

      <!-- ID Column -->
      <Column header="ID" style="width: 8%;">
        <template #body="slotProps">
          {{ data.indexOf(slotProps.data) + 1 }}
        </template>
      </Column>
      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="true"
        style="width: 25%;"
      />

      <Column header="Actions" :exportable="false">
        <template #body="slotProps">
          <Button
            icon="pi pi-pencil"
            @click="$emit('edit', slotProps.data)"
            class="mr-2"
            size="small"
            severity="info"
          />
          <Button
            icon="pi pi-trash"
            @click="$emit('delete', slotProps.data)"
            size="small"
            severity="danger"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const props = defineProps({
  columns: Array,
  data: Array,
  category: {
    type: String,
    default: '',
  },
})

const filters = ref({
  global: { value: '', matchMode: 'contains' },
})

const globalFields = props.columns.map(col => col.field)

const clearFilter = () => {
  filters.value.global.value = ''
}
</script>
