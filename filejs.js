new Vue({
    el: '#vue-app',
    data: {
        s:'',
        health: 100,
        ended: false
    },
    methods: {
        punch: function(){
            this.health -= 10;
            if ( this.health <= 0 ){
                this.ended = true;
                this.s=this.s+"GAME-OVER";
            }
        },
        restart: function(){
            this.s='';
            this.health = 100;
            this.ended = false;
        }
    },
});
