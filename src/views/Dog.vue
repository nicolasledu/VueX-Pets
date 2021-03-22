 <template>
  <div class="about">
    <div v-for="pet in pets" :key="pet.name">
        <div v-if="pet.species == 'Dog' && pet.name == $route.params.name">
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
  name: 'Dog',
  computed: {
        ...mapGetters({
            Pets: "Pets",
        }),
        },
  components:{}
}
</script>