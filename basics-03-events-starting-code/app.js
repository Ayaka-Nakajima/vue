// document.getElementById('events').innerHTML = `
//上記のようなものはVue.jsでは使用しません。

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount('#events');
