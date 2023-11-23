import { data } from "./data.js";

export function bigCity() {
  return console.log(data.filter((data) => data.population > 100000));
}

export function smallCity() {
  return console.log(data.filter((data) => data.population < 100000));
}
