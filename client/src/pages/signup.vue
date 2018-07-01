<template>
<div>
    <!-- <h1>Hiii</h1>
    <q-btn label = "Sign Up" @click="signup"></q-btn>
    <q-btn label = "Password reset" @click="sendPasswordReset"></q-btn> -->
     <div class="row justify-center gutter-sm content-center">
    <div class="col-9 row justify-center">
      <img :src="logoPath" alt="no Image!" />
    </div>
    <div class="col-xs-10 col-sm-9 col-md-7 col-lg-6 col-xl-6">
      <div>
        <q-field icon="person">
          <q-input type="text"
            autofocus=true
            color="primary"
            :error="NameError"
            clearable
            :float-label="NameError ? 'Name can not be blank' : 'Name'"
            :after="[{icon: 'warning', error: true}]"
            @keyup="Name === '' ? '' : NameError = false"
            value=''
          />
        </q-field>
        <q-field icon="person">
          <q-input type="text"
            color="primary"
            :error="userNameError"
            clearable
            :float-label="userNameError ? 'Username can not be blank' : 'Username'"
            :after="[{icon: 'warning', error: true}]"
            @keyup="userName === '' ? '' : userNameError = false"
            value=''
          />
        </q-field>
        <q-field icon="lock">
          <q-input type="password"
            color="primary"
            :error="passwordError"
            clearable
            :float-label="passwordError ? 'Password can not be blank': 'Password'"
            :after="[{icon: 'warning', error: true}]"
            v-model="password"
            @keyup="password === '' ? '' : passwordError = false"
            value=''
          />
        </q-field>
        <q-field icon="lock">
          <q-input type="password"
            color="primary"
            :error="passwordError"
            clearable
            :float-label="passwordError ? 'Password is not same': 'Confirm Password'"
            :after="[{icon: 'warning', error: true}]"
            v-model="password"
            @keyup="password === '' ? '' : passwordError = false"
            value=''
          />
        </q-field>
        <q-field class="q-mt-md">
          <q-btn class="full-width"
            color="primary"
            label="Sign Up"
            size="md"
            @click="signup"
          >
          </q-btn>
        </q-field>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
// import firebase from 'firebase'
export default {
  data () {
    return {
      passwordError: false,
      userNameError: false,
      NameError: false,
      logoPath: 'statics/logo.png',
      password: ''
    }
  },
  methods: {
    /**
     * Handles the sign up button press.
     */
    signup () {
      this.$router.push({ path: '/' })
      // [START createwithemail]
    //   firebase.auth().createUserWithEmailAndPassword(email, password).then(function (res) {
    //     console.log('successful response', res)
    //   }).catch(function (error) {
    //     // Handle Errors here.
    //     var errorCode = error.code
    //     var errorMessage = error.message
    //     // [START_EXCLUDE]
    //     if (errorCode === 'auth/weak-password') {
    //       alert('The password is too weak.')
    //     } else {
    //       alert(errorMessage)
    //     }
    //     console.log(error)
    //     // [END_EXCLUDE]
    //   })
    //   // [END createwithemail]

    //   /**
    //  * Sends an email verification to the user.
    //  */
    //   // [START sendemailverification]
    //   firebase.auth().currentUser.sendEmailVerification().then(function () {
    //     // Email Verification sent!
    //     // [START_EXCLUDE]
    //     alert('Email Verification Sent!')
    //     // [END_EXCLUDE]
    //   })
      // [END sendemailverification]
    },
    sendPasswordReset () {
    //   var email = document.getElementById('email').value
    //   // [START sendpasswordemail]
    //   firebase.auth().sendPasswordResetEmail(email).then(function () {
    //     // Password Reset Email Sent!
    //     // [START_EXCLUDE]
    //     alert('Password Reset Email Sent!')
    //     // [END_EXCLUDE]
    //   }).catch(function (error) {
    //     // Handle Errors here.
    //     var errorCode = error.code
    //     var errorMessage = error.message
    //     // [START_EXCLUDE]
    //     if (errorCode === 'auth/invalid-email') {
    //       alert(errorMessage)
    //     } else if (errorCode === 'auth/user-not-found') {
    //       alert(errorMessage)
    //     }
    //     console.log(error)
    //     // [END_EXCLUDE]
    //   })
    //   // [END sendpasswordemail];
    }

  }
}
</script>

<style>

</style>
