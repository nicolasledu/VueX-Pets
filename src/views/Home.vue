<template>
  <div class="home">
    
    <h1> The Pets :</h1>

    <ul class="list-group">
      <li class="list-group-item">{{CountPet}} Pets :</li>
      <li class="list-group-item">{{CountDog}} Dogs </li>
      <li class="list-group-item">{{CountCat}} Cats </li>
      <li class="list-group-item" style="text-align:center;"><a href="#/form"><button type="button" class="btn btn-primary">Add a new Pets</button></a></li>
    </ul>

  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'Home',
   computed: {
        ...mapGetters({
            Pets: "Pets",
            CountPet: "CountPet",
            CountDog: "CountDog",
            CountCat: "CountCat",
        }),
    },
      
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
ul{
  text-align: left;
}
</style>