<template>
  <div class="about">
    <div v-for="pet in Pets" :key="pet.name">
        <div v-if="pet.species == 'Cat' && pet.name == $route.params.name">
            <h1>{{pet.name}}</h1>
            <p>Birth Year: {{pet.birthYear}}</p>
            <p>Species : {{pet.species}}</p>
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