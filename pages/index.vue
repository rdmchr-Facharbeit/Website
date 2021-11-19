<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <div class="shadow px-2 py-2 block">
      <h1 class="text-center text-xl">Thank you for taking the time to do this survey</h1>
      <p class="text-center mt-2">In the following you will be asked to fill out an example sign up form.</p>
      <p class="text-center">The data does not have to be accurate, but should fit the form.</p>
      <p>Example: If the form asks for an email address the only requirement is that the data is shaped like an email address.</p>
      <button @click="setupAcc" class="bg-red-400 rounded-lg px-2 py-1 float-right mt-2">Get started</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createSession, isAuthenticated } from '../aw';

async function setupAcc() {
  const currSess = await isAuthenticated();
  console.log(`Authed? ${currSess}`);
  if (!currSess) {
    await createSession();
    console.log('Created a new session.');
  }
  await this.$nuxt.redirect('/form');
}
</script>

