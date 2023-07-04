<script>
import axios from 'axios';
export default {
  data() {
    return {
      api: `${import.meta.env.VITE_HOST}/api/contacts`,
      name: '',
      address: '',
      mailContent: '',
      errors: [],
      mailSended: false
    }
  },
  methods: {
    sendMail() {
      const data = {
        name: this.name,
        address: this.address,
        mailContent: this.mailContent
      }
      axios
      .post(this.api, data)
      .then(response => {
        if (response.data.success) {
          console.log('Bravissima')
          this.name = ''
          this.address = ''
          this.mailContent = ''
          this.mailSended = true
        } else if (response.data.success === false) {
          console.log(response.data.errors)
          this.errors = response.data.errors
        }
      })
      .catch(error => {
        console.error(error)
      })
    }
  }
};
</script>
<template>
<main>

  <div class="container contacts">
    <h1 class="text-uppercase text-white pb-3">Contacts</h1>
    <div class="confirm" v-if="mailSended">Messaggio inviato</div>
    <p class="text-white">Do you want to contact me? Please fill the form below!</p>
    <form @submit.prevent="sendMail()">
      <div class="col">
        <div class="mb-3">
          <label for="name" class="form-label text-white">Name</label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Type your name.." aria-describedby="helpId" v-model="name">
          <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label text-white">Email</label>
          <input type="mail" name="address" id="address" class="form-control" placeholder="Type your mail.." aria-describedby="helpId" v-model="address">
          <small v-if="errors.address" class="text-danger">{{ errors.address[0] }}</small>
        </div>
        <div class="mb-3">
          <label for="mailContent" class="form-label d-block text-white">Message</label>
          <textarea name="mailContent" id="mailContent" rows="10" class="form-control" placeholder="Type your message.." v-model="mailContent"></textarea>
          <small v-if="errors.mailContent" class="text-danger">{{ errors.mailContent[0] }}</small>
        </div>
      </div>
      <button class="btn btn-dark">Send Message</button>
    </form>
  </div>
</main>
</template>

<style lang="sass" scoped></style>