import { Appwrite } from 'appwrite';

// Init your Web SDK
const appwrite = new Appwrite();

const USERS_COLLECTION = '61943253f1168';
const DATA_COLLECTION = '619431ff88e21';

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
    const data = await appwrite.database.listDocuments(DATA_COLLECTION)
    return await 
}

async function registerSubmit() {
}

export {
    createSession,
    registerReset,
    registerSubmit,
    isAuthenticated,
    appwrite
};