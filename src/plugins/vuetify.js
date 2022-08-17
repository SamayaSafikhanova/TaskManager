import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
 
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
//import VueI18n from 'vue-i18n'

Vue.use(Vuetify);
// Vue.use(VueI18n)

// const messages = {
//   en: {
//     $vuetify: {
//       dataIterator: {
//         rowsPerPageText: 'Items per page:',
//         pageText: '{0}-{1} of {2}',
//       },
//     },
//   },
//   az_AZ: {
//     $vuetify: {
//       dataIterator: {
//         rowsPerPageText: 'Element per sida:',
//         pageText: '{0}-{1} av {2}',
//       },
//     },
//   },
// }

// // Create VueI18n instance with options
// const i18n = new VueI18n({
//   locale: 'az_AZ', // set locale
//   messages, // set locale messages
// })

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // default - only for display purposes
      },

      // lang: {
      //   t: (key, ...params) => i18n.t(key, params),
      // },
});
