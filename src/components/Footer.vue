<template>
    <footer class="site-footer">
      <h4>Copyright <br>
        © 2024 Mariia Shorokhova</h4>
      <div>
      <h4>Contact Us</h4>
      <ContactForm />
      </div>
      <div>
        <h4>Call us</h4>
        <p>Phone: +123456789</p>
      </div>
    </footer>
  </template>
  
  <script>
  import ContactForm from './ContactForm.vue';
  
  export default {
    name: 'Footer',
    components: {
      ContactForm,
    },
  };
  </script>