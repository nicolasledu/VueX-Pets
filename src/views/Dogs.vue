<template>
  <div class="about">
    <h1> Dogs :</h1>

    <table class="table">
  <thead class="thead-light">
    <tr>  
      <th scope="col">Name</th>

      <th scope="col">Species</th>

      <th scope="col">Birth Year</th>

    </tr>
  </thead>
  
  <tbody>

    <tr v-for="pet in Pets" :key="pet.index" >

      <td v-if="pet.species == 'Dog'"><router-link :to="{ path: '/dogs/'+ pet.name}">{{pet.name}} </router-link></td>
      
      <td v-if="pet.species == 'Dog'">{{pet.species}}</td>

      <td v-if="pet.species == 'Dog'">{{pet.birthYear}}</td>

    </tr>

  </tbody>
</table>


  </div>
</template>

<script>


import { mapGetters } from "vuex";
export default {
  name: 'Dogs',
  computed: {
        ...mapGetters({
            Pets: "Pets",
        }),
        },
  components:{}
}
</script>

<style scoped>

tr{
  color: green
}

</style>