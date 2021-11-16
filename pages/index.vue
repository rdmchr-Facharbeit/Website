<template>
    <div>
        <h1>Anmelden</h1>
        <form>
            <label>
                Email
                <input type="email" v-model="email">
            </label>
            <label>
                Passwort
                <input type="password" v-model="password">
            </label>
            <label>
                Passwort wiederholen
                <input type="password" v-model="repeatPassword">
            </label>
        </form>
        <button type="submit">Anmelden</button>
    </div>
</template>

<script setup lang="ts">
import {registerReset, registerSubmit} from '../appwrite';

const email = ref('');
const password = ref('');
const repeatPassword = ref('');

const router = useRouter();

function submit() {}

async function clear() {
    email.value = '';
    password.value = '';
    repeatPassword.value = '';
    await registerReset();
    router.push('/sucess')
    
}
</script>

