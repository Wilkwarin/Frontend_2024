import { defineStore } from 'pinia';

export const useContactStore = defineStore('contactForm', {
  state() {
    return {
      submissions: [] as { name: string, email: string }[],
    };
  },
  actions: {
    addContactSubmission(name: string, email: string) {
      this.submissions.push({ name, email });
    },
  },
});
