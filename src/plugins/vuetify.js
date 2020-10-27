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
       // primary: "#7634C0",
        primary: "#0CE1C4",
        secondary: "#424242",
        accent: "#20ADAA",
        error: "#FF5252",
        info: "#366C82",
        success: "#571E68",
        warning: "#7634C0"
      },
    }
  },
  icons: {
    iconfont: "fa"
  }
});
