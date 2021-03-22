<template>
  <div class="about">
    <h1>🐶Chiens🐶:</h1>

    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom</th>
      <th scope="col">Date d'anniversaire</th>
      <th scope="col">Espèce</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="pet in pets" :key="pet.index" >

      <th scope="row" v-if="pet.species == 'Dog'">{{pet.name}}</th>
      <td v-if="pet.species == 'Dog'"><router-link :to="{ path: '/dogs/'+ pet.name}">{{pet.name}} </router-link></td>
      <td v-if="pet.species == 'Dog'">{{pet.birthYear}}</td>
      <td v-if="pet.species == 'Dog'">{{pet.species}}</td>

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