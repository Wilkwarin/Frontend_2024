<template>
  <div>
    <h1>Home</h1>
    <p>Welcome to the homepage!</p>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'Home',
  components: {
    ContactForm,
  },
};
</script>
