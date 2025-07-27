<template>
  <div class="flex justify-content-center align-items-center h-screen">
    <Card class="w-full sm:w-30rem shadow-4 border-round-xl">
      <template #title>
        <div class="text-2xl font-bold text-center">Admin Login</div>
      </template>

      <template #content>
        <div class="flex flex-column gap-3 w-full">
          <!-- Email -->
          <label for="email" class="font-medium">Email</label>
          <InputText
            id="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full"
            :class="{ 'p-invalid': emailError }"
          />
          <small v-if="emailError" class="p-error">Email is required.</small>

          <!-- Password -->
          <label for="password" class="font-medium mt-2">Password</label>
          <Password
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full"
            :class="{ 'p-invalid': passwordError }"
          />
          <small v-if="passwordError" class="p-error">Password is required.</small>

          <!-- Login Button -->
          <Button
            label="Login"
            icon="pi pi-sign-in"
            class="w-full mt-4"
            @click="login"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Card from 'primevue/card'

import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const emailError = ref(false)
const passwordError = ref(false)
const toast = useToast()
const router = useRouter()

const login = () => {
  emailError.value = !email.value.trim()
  passwordError.value = !password.value.trim()

  if (emailError.value || passwordError.value) {
    toast.add({
      severity: 'error',
      summary: 'Validation Error',
      detail: 'Please fill in all fields',
      life: 3000
    })
    return
  }

  console.log('Admin login', email.value, password.value)
  toast.add({
    severity: 'success',
    summary: 'Login Success',
    detail: `Welcome ${email.value}`,
    life: 2000
  })

  // TODO: Add actual API login and navigation logic here
  setTimeout(() => {
    router.push('/admin-dashboard')  // Adjust route name/path as per your route config
  }, 1000)
}
</script>

<style scoped>
.h-screen {
  height: 100vh;
}
</style>
