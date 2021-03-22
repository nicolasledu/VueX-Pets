export const pushPets = ({ commit,state }, {name,species,birthYear}) => {
  state.pets.push({"name":name,"species":species,"birthYear":birthYear});
  commit("petsAdd");
};