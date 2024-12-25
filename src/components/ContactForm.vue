<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="name" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        name: '',
        email: '',
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.name, this.email);
      },
    },
  };
  </script>
  