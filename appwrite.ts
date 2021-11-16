import { Appwrite } from 'appwrite';

// Init your Web SDK
const appwrite = new Appwrite();

appwrite
    .setEndpoint('https://api.gettooru.com/v1') // Your Appwrite Endpoint
    .setProject('6193ae37b6810'); // Your project ID

async function createSession() {
    const res = await appwrite.account.createAnonymousSession().then((res) => {
        console.log(res);
    });
}

async function isAuthenticated() {
    return await appwrite.account.get().then(() => true).catch(() => false);;
}

async function registerReset() {
}

async function registerSubmit() {
}

export {
    createSession,
    registerReset,
    registerSubmit,
    isAuthenticated
};