import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

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
    component: () => import("../views/Profile.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("../views/Success.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/bet/:id",
    name: "Bet",
    component: () => import("../views/Bet.vue"),
    meta: { requiresAuth: true }
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
    component: () => import("../views/Game.vue"),
    meta: { requiresAuth: true }
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
    component: () => import("../views/AddRoom.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/add-tournament",
    name: "AddTournament",
    component: () => import("../views/AddTournaments.vue")
  },
  {
    path: "/fantasy",
    name: "Fantasy",
    component: () => import("../views/Fantasy.vue")
  },
  {
    path: "/not-connected",
    name: "NotConnected",
    component: () => import("../views/NotConnected.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const { isAuthentified } = store.state.user.userInfo;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isAuthentified) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
