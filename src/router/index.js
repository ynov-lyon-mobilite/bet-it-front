import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/landing"
  },
  {
    path: "/landing",
    name: "Landing",
    component: () => import("../views/Landing.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("../views/Success.vue")
  },
  {
    path: "/bet/:id",
    name: "Bet",
    component: () => import("../views/Bet.vue")
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("../views/Calendar.vue")
  },
  {
    path: "/ladder",
    name: "Ladder",
    component: () => import("../views/Ladder.vue")
  },
  {
    path: "/games",
    name: "Games",
    component: () => import("../views/Game.vue")
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/Registration.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/room",
    name: "Room",
    component: () => import("../views/Room.vue")
  },
  {
    path: "/addRoom",
    name: "AddRoom",
    component: () => import("../views/AddRoom.vue")
  },
  {
    path: "/addTournament",
    name: "AddTournament",
    component: () => import("../views/AddTournaments.vue")
  },
  {
    path: "/fantasy",
    name: "Fantasy",
    component: () => import("../views/Fantasy.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
