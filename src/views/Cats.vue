<template>
  <div class="about">
    <h1>Chats :</h1>

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

      <th scope="row" v-if="pet.species == 'Cat'"></th>
      <td v-if="pet.species == 'Cat'"><router-link :to="{ path: '/cats/'+ pet.name}">{{pet.name}}</router-link></td>
      <td v-if="pet.species == 'Cat'">{{pet.birthYear}}</td>
      <td v-if="pet.species == 'Cat'">{{pet.species}}</td>

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