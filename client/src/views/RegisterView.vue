<template>
  <div class="absolute w-2/6 h-2/6 top-1/4 left-1/3">
    <div class="bg-white shadow-md p-4 rounded-lg opacity-75">
      <div class="m-2">
        <h1 class="text-xl text-black text-center font-mono">Register</h1>
      </div>
      <form
        name="add-subscriber"
        id="myForm"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleFormSubmit"
        class="w-full max-w-lg"
      >
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Username
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="username"
              v-model="newTask.username"
              type="text"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              type="password"
              v-model="newTask.password"
              placeholder="******************"
            />
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
          >
            Create
          </button>
          <button
            type="button"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RegisterFormTypes } from '../types/form/Register.types'
import Swal from 'sweetalert2'
import axios, { AxiosResponse, AxiosError } from 'axios'

let newTask: RegisterFormTypes = {
  username: '',
  password: ''
}

function handleFormSubmit() {
  if (!newTask.username.trim() || !newTask.password.trim()) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Please complete all fields.',
      timer: 3000
    })
    return
  }

  axios
    .post('http://localhost:3001/auth/register', {
      username: newTask.username,
      password: newTask.password
    })
    .then((response: AxiosResponse<any>) => {
      // Gérer la réponse du serveur si nécessaire
      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Account created successfully !',
          timer: 3000
        })
        newTask.password = ''
        newTask.username = ''
        return
      }
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: response.data.message,
        timer: 3000
      })
      console.log(response.data) // Affiche la réponse du serveur
    })
    .catch((error: AxiosError) => {
      // Gérer les erreurs de l'appel Axios
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: `Une erreur s'est produite lors de la soumission des données. ${error}`,
        timer: 3000
      })
    })

  // Réinitialiser le formulaire
  newTask.username = ''
  newTask.password = ''
}
</script>
