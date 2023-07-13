import axios from "axios";

// noinspection TypeScriptValidateTypes
const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default pokeApi;
