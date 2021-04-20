import { playerBonusDefaultValues as bonusList } from "./bonus";

export default {
  fnatic: {
    id: 1,
    name: "Fnatic",
    logo: require("@/assets/teams/fnatic.png")
  },
  rogue: {
    id: 2,
    name: "Rogue",
    logo: require("@/assets/teams/rogue.png")
  },
  t1: {
    id: 3,
    name: "T1",
    logo: require("@/assets/teams/t1.png")
  },
  excel: {
    id: 4,
    name: "Excel",
    logo: require("@/assets/teams/excel.png")
  },
  misfitsPremier: {
    id: 5,
    name: "Misfits Premier",
    logo: require("@/assets/teams/misfits_premier.png")
  },
  gameward: {
    id: 6,
    name: "GameWard",
    logo: require("@/assets/teams/gameward.png")
  },
  karmineCorp: {
    id: 7,
    name: "Karmine Corp",
    logo: require("@/assets/teams/karmine_corp.png")
  },
  vitality: {
    id: 8,
    name: "Vitality",
    logo: require("@/assets/teams/vitality.png")
  },
  ldlcOl: {
    id: 9,
    name: "LDLC OL",
    logo: require("@/assets/teams/ldlc_ol.png")
  }
};

const defaultValues = {
  player: null,
  bonusList
};

export const teamDefaultValues = [
  {
    name: "top",
    logo: require("@/assets/fantasy/top.png"),
    ...defaultValues
  },
  {
    name: "jungler",
    logo: require("@/assets/fantasy/jungle.png"),
    ...defaultValues
  },
  {
    name: "mid",
    logo: require("@/assets/fantasy/mid.png"),
    ...defaultValues
  },
  {
    name: "adc",
    logo: require("@/assets/fantasy/adc.png"),
    ...defaultValues
  },
  {
    name: "support",
    logo: require("@/assets/fantasy/support.png"),
    ...defaultValues
  },
  {
    name: "coach",
    logo: require("@/assets/fantasy/coach.png"),
    ...defaultValues
  }
];
