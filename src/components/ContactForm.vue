<template>
  <div>
    <form @submit.prevent="submitForm" class="custom-form">
      <div>
        <label for="name"> Name: </label>
        <input id="name" v-model="name" />
      </div>
      <div>
        <label for="email">E-mail:</label>
        <input id="email" v-model="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="message" class="confirmation-message">
      {{ message }}
    </div>
  </div>
</template>
  
<script>
import { useContactStore } from "@/stores/contactForm";

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      const contactStore = useContactStore();
      if (this.name && this.email) {
        const kontakt = { name: this.name, email: this.email };
        contactStore.addContactSubmission(kontakt);
        this.message = `Thank you, ${this.name}!`;
        this.name = "";
        this.email = "";
      } else {
        this.message = "Please fill out all fields.";
      }
    },
  },
};
</script>
  