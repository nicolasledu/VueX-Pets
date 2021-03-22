<template>
  <div class="about">
    <h1> Cats :</h1>

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

     
      <td v-if="pet.species == 'Cat'"><router-link :to="{ path: '/cats/'+ pet.name}">{{pet.name}}</router-link></td>
      
      <td v-if="pet.species == 'Cat'">{{pet.species}}</td>

      <td v-if="pet.species == 'Cat'">{{pet.birthYear}}</td>

    </tr>

  </tbody>
</table>


  </div>
</template>

<script>


import { mapGetters } from "vuex";
export default {
  name: 'Cats',
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
