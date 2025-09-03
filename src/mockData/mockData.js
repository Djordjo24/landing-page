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
import adoption from "../assets/images/adoption.png";

import seniorVet from "../assets/images/senior-vet.jpg";
import asstVet from "../assets/images/asst-vet.jpg";
import residentVet from "../assets/images/resident-vet.jpg";
import internVet from "../assets/images/intern-vet.jpg";

export const shopCategories = ["Random", "Cats", "Dogs", "Fish", "Birds"];

export const productCards = [
  {
    id: 0,
    category: "Cats",
    source: multivitamin,
    altText: "Multivitamin For Cat",
  },
  {
    id: 1,
    category: "Cats",
    source: catFood,
    altText: "Cat Food",
  },
  {
    id: 2,
    category: "Dogs",
    source: dogFood,
    altText: "Dog food",
  },
  {
    id: 3,
    category: "Dogs",
    source: petPlate,
    altText: "Pet Plate",
  },
  {
    id: 4,
    category: "Birds",
    source: birdWater,
    altText: "Bird Water",
  },
  {
    id: 5,
    category: "Dogs",
    source: dogWater,
    altText: "Dog water",
  },
];

export const services = [
  {
    id: 0,
    source: grooming,
    title: "Grooming",
    className: "one",
  },
  {
    id: 1,
    source: boarding,
    title: "Boarding",
    className: "two",
  },
  {
    id: 2,
    source: veterinary,
    title: "Veterinary",
    className: "three",
  },
  {
    id: 3,
    source: training,
    title: "Training",
    className: "four",
  },
  {
    id: 4,
    source: adoption,
    title: "Adoption",
    className: "five",
  },
];

export const team = [
  {
    id: 0,
    imageSrc: seniorVet,
    name: "Dr. Olivia Rhye",
    role: "Senior Veterinarian",
  },
  {
    id: 1,
    imageSrc: asstVet,
    name: "Phoenix Baker",
    role: "Asst. Veterinarian",
  },
  {
    id: 2,
    imageSrc: residentVet,
    name: "Lana Steiner",
    role: "Resident Veterinarian",
  },
  {
    id: 3,
    imageSrc: internVet,
    name: "Demi Wilkinson",
    role: "Intern Veterinarian",
  },
];

export const contactItems = [
  {
    id: 0,
    title: "Email",
    text: "Our friendly team is here to help.",
    href: "mailto:hello@pawsnplay.com",
    content: "hello@pawsnplay.com",
  },
  {
    id: 1,
    title: "Live chat",
    text: "Our friendly team is here to help.",
    href: "#",
    content: "Start new chat",
  },
  {
    id: 2,
    title: "Office",
    text: "Come say hello at our office HQ.",
    href: "http://maps.google.com/?q=123, Yaya Abatan st, Ogba Lagos",
    content: "123, Yaya Abatan st, Ogba Lagos.",
  },
  {
    id: 3,
    title: "Phone",
    text: "Mon-Fri from 8am to 5pm.",
    href: "tel:+234901234384",
    content: "+234 901234 384",
  },
];

export const footerLinksObj = {
  shop: ["Pet Adoption", "Nutrition", "Pet Care", "Pet Food", "Pricing"],
  company: ["About Us", "Careers", "Press", "News", "Contact"],
  services: ["Grooming", "Boarding", "Training", "Veterinary", "Support"],
  social: ["Twitter", "LinkedIn", "Facebook", "AngelList", "Dribbble"],
  legal: ["Terms", "Privacy", "Cookies", "Licenses", "Settings"],
};
