import multivitamin from "../assets/images/multivitamin.png";
import catFood from "../assets/images/cat-food.png";
import dogFood from "../assets/images/dog-food.png";
import petPlate from "../assets/images/pet-plate.png";
import birdWater from "../assets/images/bird-water.png";
import dogWater from "../assets/images/dog-water.png";

import grooming from "../assets/images/grooming.png";
import boarding from "../assets/images/boarding.png";
import veterinary from "../assets/images/veterinary.png";
import training from "../assets/images/training.png";

export const shopCategories = ["Random", "Cats", "Dogs", "Fish", "Birds"];

export const productCards = [
  {
    id: 0,

    source: multivitamin,
    altText: "Multivitamin For Cat.",
  },
  {
    id: 1,

    source: catFood,
    altText: "Cat Food.",
  },
  {
    id: 2,

    source: dogFood,
    altText: "Dog food.",
  },
  {
    id: 3,

    source: petPlate,
    altText: "Pet Plate.",
  },
  {
    id: 4,

    source: birdWater,
    altText: "Bird Water.",
  },
  {
    id: 5,

    source: dogWater,
    altText: "Dog water.",
  },
];

export const services = [
  {
    id: 0,
    source: grooming,
    title: "Groming",
  },
  {
    id: 1,

    source: boarding,
    title: "Boarding",
  },
  {
    id: 2,

    source: veterinary,
    title: "Veterinary",
  },
  {
    id: 3,

    source: training,
    title: "Training",
  },
];
