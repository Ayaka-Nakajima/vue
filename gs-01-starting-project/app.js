Vue.createApp({
    //l4  function addGoal() {
    data: function() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            //l8      listEl.appendChild(listItemEl);
            this.enteredValue = '';
            //l9      inputEl.value = '';
        }
    }
}).mount('#app');



//l1  const buttonEl = document.querySelector('button');
//l2  const inputEl = document.querySelector('input');
//l3  const listEl = document.querySelector('ul');
//jsではHTML要素を操作するために上記のように要素を取得する必要がある
//Vueではmount('#app')のように一度に取得できる

//l5      const enteredValue = inputEl.value;
//HTMLにv-modelがあるため、inputEl.valueを使わなくてもよい

//l6      const listItemEl = document.createElement('li');
//HTMLにv-forがあるため、要素をjs側で作成する必要はない

//l7      listItemEl.textContent = enteredValue;
//HTMLに{{goal}}があるため、js側でテキストを設定する必要はない

//l10 }

//l11 buttonEl.addEventListener('click', addGoal);
//v-on:click="addGoal"があるため、js側でイベントリスナーを追加する必要はない