<template>
   <div class="row justify-center gutter-sm content-center">
  <div class="col-xs-10 col-sm-9 col-md-7 col-lg-6 col-xl-6">
  <q-list>
  <q-list-header flex-center>Medium</q-list-header>
  <q-item v-for = "item in users" :key = "item.id" >
    <q-item-main>
      <q-card flat>
        <q-card-title>
          <q-icon name="assignment" />
          {{item.username}}
             <div slot="subtitle" class="row items-center">
               {{item.description}}
               <br>
               Contact Number : {{item.phone}}
              </div>
        </q-card-title>
          <q-card-main class="row items-center">
              </q-card-main>
      </q-card>
    </q-item-main>
  </q-item>
</q-list>
  </div>
   </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    firebase.firestore().collection('users').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data())
        this.users.push(doc.data())
      })
    })
      .catch((err) => {
        console.log('Error getting documents', err)
      })

    console.log(this.users)
  }
}
</script>

<style>

</style>
