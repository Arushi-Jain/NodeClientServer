<template>
<div class="row justify-center gutter-sm content-center">
  <div class="col-xs-10 col-sm-9 col-md-7 col-lg-6 col-xl-6">
  <q-list>
  <q-list-header flex-center>Medium</q-list-header>
  <q-item v-for = "item in articles" :key = "item.id" :to="{name: 'Blog',
  params: item}">
    <q-item-main>
      <q-card flat>
        <q-card-title>
          <q-icon name="assignment" />
          {{item.title}}
          <div slot="right">
             <q-icon name="chevron_right"/>
           </div>
             <div slot="subtitle" class="row items-center">
               {{item.author}}
              </div>
        </q-card-title>
          <q-card-main class="row items-center">
              </q-card-main>
      </q-card>
    </q-item-main>
  </q-item>
</q-list>
<q-page-sticky position="bottom-right" :offset="[18, 18]">
  <q-btn
    round
    color="red"
    icon="add"
    size="lg"
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
      articles: []
    }
  },
  methods: {
    writearticle () {
      // check for the user login or not
      this.$router.push({ path: '/login' })
    }
  },
  created () {
    firebase.firestore().collection('blogs').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        this.articles.push(doc.data())
      })
    })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  }
}
</script>

<style>

</style>
