<template>
  <div class="about">
    <div v-for="pet in Pets" :key="pet.name">
        <div v-if="pet.species == 'Cat' && pet.name == $route.params.name">
            <h1>{{pet.name}}</h1>
            <p>Année de naissance: {{pet.birthYear}}</p>
            <p>Espèce: {{pet.species}}</p>
        </div>
    </div>


  </div>
</template>

<script>


import { mapGetters } from "vuex";
export default {
  name: 'Cat',
  computed: {
        ...mapGetters({
            Pets: "Pets",
        }),
        },
  components:{}
}
</script>