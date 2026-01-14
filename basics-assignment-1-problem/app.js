const app = Vue.createApp({
    data() {
        return {
            yourName: 'Ayaka Nakajima',
            yourAge: 25,
            image: 'https://v2.ja.vuejs.org/images/logo.svg'
        }
    },
    methods: {
        add5Years() {
            return this.yourAge + 5;
            //+=5は使わない。なぜなら、+=は代入演算子であり、this.ageの値を直接変更してしまうから。
        },
        randomNumber() {
            return randomNumber = Math.random();
            //math.random()は0以上1未満のランダムな数値を生成する。
        }
    }
});

app.mount('#assignment');