<template>
    <q-page class="content-center login">
    <login class="col-12"
        :logoPath="logopath"
        :themeColor="themecolor"
        :onLoginClick="performLogin"
        @username="setUserName($event)"
        @password="setPassword($event)"
    />
    <router-link to="/signup" >Create an Account here</router-link>
  </q-page>
</template>

<script>
import Login from '../components/logincomponent'
import axios from 'axios'
import firebase from 'firebase'
// import firebase from 'firebase'
export default {
  data () {
    return {
      username: '',
      password: '',
      logopath: 'statics/logo.png',
      themecolor: 'primary'
    }
  },
  components: {
    Login
  },
  methods: {
    setUserName (val) {
      this.username = val
    },
    setPassword (val) {
      this.password = val
    },
    performLogin () {
      /**
     * Handles the sign in button press.
     */
      if (this.username.length < 4) {
        alert('Please enter an email address.')
        return
      }
      if (this.password.length < 4) {
        alert('Please enter a password.')
      }
      this.$router.push({ path: '/' })
      var token = ''
      axios.post('http://localhost:3000/api/login', {email: '', password: ''}).then(function (response) {
        console.log('login token : ', response)
        token = response
      })
      firebase.auth().signInWithCustomToken(token).then(function () {
        console.log('Login successful')
      }).catch(function (error) {
      // Handle Errors here.
        console.log('error in signing in', error)
      // ...
      })
    }
  }

}
</script>

<style>

</style>
