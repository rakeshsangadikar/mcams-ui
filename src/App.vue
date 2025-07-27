<template>
  <div class="layout">
    <Menubar :model="menuItems" class="mb-4" />
    <router-view />
    <Toast />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import Toast from 'primevue/toast'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = ref([
  {
    label: '🎵 Music Management',
    disabled: true,
    style: 'font-weight: bold; font-size: 18px;',
  },
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/'), // This loads Homepage.vue via route `/`
  },
  {
    label: 'Admin Login',
    icon: 'pi pi-user',
    command: () => router.push('/admin'),
  }
])
</script>

<style scoped>
.layout {
  padding: 1rem;
}
</style>
