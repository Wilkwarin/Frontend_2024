import { defineStore } from 'pinia';

interface ContactFormSubmission {
  name: string;
  email: string;
}

export const useContactStore = defineStore('contactForm', {
  state: () => ({
    submissions: [] as ContactFormSubmission[],
  }),
  actions: {
    addContactSubmission(data: ContactFormSubmission) {
      this.submissions.push(data);
    },
  },
});
