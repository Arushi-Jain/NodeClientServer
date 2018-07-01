<template>
  <div class="row justify-center gutter-sm content-center">
    <div class="col-9 row justify-center">
      <img :src="logoPath" alt="no Image!" />
    </div>
    <div class="col-xs-10 col-sm-9 col-md-7 col-lg-6 col-xl-6">
      <div>
        <q-field icon="person">
          <q-input type="text"
            autofocus=true
            :color="themeColor"
            :error="userNameError"
            clearable
            :float-label="userNameError ? 'Username can not be blank' : 'Username'"
            :after="[{icon: 'warning', error: true}]"
            @keyup="userName === '' ? '' : userNameError = false"
            @input="__set('username',$event)"
            value=''
          />
        </q-field>
        <q-field icon="lock">
          <q-input type="password"
            :color="themeColor"
            :error="passwordError"
            clearable
            :float-label="passwordError ? 'Password can not be blank': 'Password'"
            :after="[{icon: 'warning', error: true}]"
            v-model="password"
            @keyup="password === '' ? '' : passwordError = false"
            @input="__set('password',$event)"
            value=''
          />
        </q-field>
        <q-field class="q-mt-md">
          <q-btn class="full-width"
            :color="themeColor"
            label="Login"
            size="md"
            @click="onLoginClick"
            :loading="logginIn"
          >
            <span slot="loading">
              <q-spinner-hourglass class="on-left" />
              Authenticating User ...
            </span>
          </q-btn>
        </q-field>
      </div>
    </div>
  </div>
</template>
<script>

/**
   * The custom login component.
   *
   */
export default {
  props: {
    /**
       * This prop  enables the parent component to pass custom image as logo on the screen.
       */
    logoPath: {
      type: String,
      required: false
    },
    /**
       * This prop  enables the parent component to pass the theme color of the component.
       */
    themeColor: {
      type: String,
      default: 'primary'
    },

    /**
       * This prop  enables the parent component to handle the login button click of the component.
       */
    onLoginClick: {
      type: Function,
      required: true
    }

  },
  data () {
    return {
      /**
       * This variable is used to store userName
       */
      userName: '',
      /**
       * This variable is used to store password
       */
      password: '',
      /**
       * This variable is used to track if there is any error in userName
       */
      userNameError: false,
      /**
       * This variable is used to track if there is any error in password
       */
      passwordError: false,
      /**
       * This variable is used to track whether the authentication request was executed
       */
      logginIn: false
    }
  },
  methods: {
    /**
       * This method emits data in the input fields to the parent components.
       */
    __set (data, e) {
      this.$emit(data, e)
    }
  }
}
</script>
