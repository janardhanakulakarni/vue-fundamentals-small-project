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
            if ( this.health < 0 ){
                this.ended = true;
                alert(this.s+"game ended");
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
        }
    },
});