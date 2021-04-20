export default [
  {
    id: 1,
    label: "Serial Killer",
    description: "Fait plus de 30 kills sur toute la durée du salon",
    icon: "fas fa-skull",
    price: 100,
    type: "kill"
  },
  {
    id: 2,
    label: "Top Killer",
    description: "Fait le plus de kills d'ici la fin du salon",
    icon: "fas fa-trophy",
    price: 200,
    type: "kill"
  },
  {
    id: 3,
    label: "Tower Killer",
    description: "Détruit plus de 10 tourelles d'ici la fin du salon",
    icon: "fas fa-hammer",
    price: 100,
    type: "objective"
  },
  {
    id: 4,
    label: "Assists God",
    description: "Fait le plus d'assists d'ici la fin du salon",
    icon: "fas fa-hands",
    price: 200,
    type: "support"
  },
  {
    id: 5,
    label: "Pentakill",
    description: "Fait 1 Pentakill",
    icon: "fab fa-gripfire",
    price: 100,
    type: "kill"
  },
  {
    id: 6,
    label: "Top Farmer",
    description: "Tue le plus de cs d'ici la fin du salon",
    icon: "fas fa-money-bill",
    price: 200,
    type: "objective"
  },
  {
    id: 7,
    label: "Dragonslayer",
    description: "Tue le plus de dragons d'ici la fin du salon",
    icon: "fas fa-dragon",
    price: 100,
    type: "objective"
  },
  {
    id: 8,
    label: "Assists God 2",
    description: "Fait le plus d'assists d'ici la fin du salon",
    icon: "fas fa-hands",
    price: 100,
    type: "support"
  },
  {
    id: 9,
    label: "Assists God 3",
    description: "Fait le plus d'assists d'ici la fin du salon",
    icon: "fas fa-hands",
    price: 100,
    type: "support"
  }
];

export const playerBonusDefaultValues = {
  kill: null,
  support: null,
  objective: null
};

export const bonusTypes = ["kill", "objective", "support"];
