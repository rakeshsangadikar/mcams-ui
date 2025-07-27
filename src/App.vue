<template>
  <div class="layout">
    <Menubar class="mb-4">
      <template #start>
        <span class="font-bold text-xl">🎵 Music Management</span>
      </template>

      <template #end>
        <div class="flex gap-2 items-center">
          <Button label="Home" icon="pi pi-home" @click="goHome" text />

          <!-- Show My Dashboard only when admin is logged in -->
          <Button
            v-if="isAdminLoggedIn"
            label="My Dashboard"
            icon="pi pi-th-large"
            @click="goDashboard"
            text
          />

          <!-- Toggle between Login and Logout -->
          <Button
            v-if="isAdminLoggedIn"
            label="Logout"
            icon="pi pi-sign-out"
            @click="logout"
            severity="danger"
            text
          />
          <Button
            v-else
            label="Admin Login"
            icon="pi pi-user"
            @click="goAdmin"
            text
          />
        </div>
      </template>
    </Menubar>

    <router-view />
    <Toast />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAdminLoggedIn = ref(false)

const checkLogin = () => {
  isAdminLoggedIn.value = !!localStorage.getItem('admin_token')
}

const goHome = () => router.push('/')
const goAdmin = () => router.push('/admin')
const goDashboard = () => router.push('/admin/dashboard')

const logout = () => {
  localStorage.removeItem('admin_token')
  isAdminLoggedIn.value = false
  router.push('/admin')
}

onMounted(() => {
  checkLogin()
})
</script>

<style scoped>
.layout {
  padding: 1rem;
}
</style>
