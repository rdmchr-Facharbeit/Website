import { Appwrite } from "appwrite";

// Init your Web SDK
const appwrite = new Appwrite();

appwrite
    .setEndpoint('https://api.gettooru.com/v1') // Your Appwrite Endpoint
    .setProject('6193ae37b6810'); // Your project ID

async function createSession() {
    const res = appwrite.account.createAnonymousSession();
}

async function registerReset() {}

async function registerSubmit() {}

export {
    createSession,
    registerReset,
    registerSubmit
}