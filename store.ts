import { defineStore } from 'pinia';
import { appwrite } from './aw';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
  actions: {
      async loadData() {
        const user = await appwrite.account.get();
      }
  },
  state: () => {
      return {
          data: {
              resets: 0,
              password: '',
              confirmPassword: '',
              email: '',
              finished: ''
          },
          user: {
              id: '',
              userDoc: '',
              dataDoc: ''
          }
      }
  }
})