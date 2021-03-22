
export const CountPet = (state) => {
  return state.pets.length;
};

export const CountCat = (state) => {
  let cats = 0;

state.pets.forEach((allpets) => {
  if(allpets.species == "Cat"){
    cats++
  }
})
  return cats;
};

export const CountDog = (state) => {
  let dogs = 0;

state.pets.forEach((allpets) => {
  if(allpets.species == "Dog"){
    dogs++
  }
})
  return dogs;
};

export const Pets = (state) => {
  return state.pets;
};

