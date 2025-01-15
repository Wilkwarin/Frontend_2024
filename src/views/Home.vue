<template>
  <div>
    <h1>Home</h1>
    <p>Ak chcete kontaktovať nás, zanechajte svoje meno a e-mail:</p>
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
