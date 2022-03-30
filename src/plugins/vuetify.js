import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true
    },
    themes: {
      dark: {
        // logo colors
        // primary: "#7634C0",
        primary: "#c616ff",
        accent: "#a141f8",
        info: "#6c7eee",
        success: "#43aee6",
        secondary: "#0ceddc",
        //for others color codes
        error: "#FF5252",
        //custom
        warning: "#a141f8",
        darkPurple: "#7634c0"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
});
