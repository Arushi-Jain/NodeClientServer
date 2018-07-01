<template>
<div class="row justify-center gutter-sm content-center">
  <div class="col-xs-10 col-sm-9 col-md-7 col-lg-6 col-xl-6">
      <q-card flat>
        <q-card-title>
          <q-icon name="assignment" />
          {{this.blog.title}}
          <div slot="right">
             <!-- <q-icon name="chevron_right"/> -->
           </div>
             <div slot="subtitle" class="row items-center">
              Written by {{this.blog.author}}
              </div>
        </q-card-title>
          <q-card-main class="row items-center">
              <p class="light-paragraph">
                <strong>Light Paragraph</strong>: Lorem Ipsum is simply dummy text of the printing
  and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged.</p>
              </q-card-main>
      </q-card>
<q-page-sticky position="bottom-right" :offset="[18, 18]">
  <q-btn
    round
    color="red"
    icon="edit"
    size="md"
    v-show = "allowedit"
    @click="writearticle"
  />
</q-page-sticky>
</div>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      blog: '',
      allowedit: true
      // articles: [{id: 1, title: 'Racisim', author: 'Amit'}, {id: 2, title: 'Feminism', author: 'Anchit'}, {id: 3, title: 'Politics', author: 'qwerty'}]
    }
  },
  methods: {
    writearticle () {
      // check for the user login or not
      firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
        // We may end token to your backend via HTTPS but its notrequired here
        console.log(idToken)
        // we can allow the user to edit the blog
        // ...
      }).catch(function (error) {
        // Handle error
        alert('Some error occured. Please sign in again !', error)
        this.$router.push({ path: '/login' })
      })
      // this.$route.params.item
      console.log(this.$route.params.title)
      // this.$router.push({ path: '/login' })
    }
    // allowedit () {
    //   // check if the user is logged in ortherwise redirect to the login
    //   return false
    // }
  },
  mounted () {
    this.blog = this.$route.params
  }
}
</script>

<style>

</style>
