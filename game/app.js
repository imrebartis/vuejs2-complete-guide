new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            this.monsterHealth -= this.calculateDamage(3, 10);

            if (this.checkWin()) {
                //game's over
                return;
            }

            this.playerHealth -= this.calculateDamage(5, 12);
            //check if you won:
            this.checkWin();

        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        },
        calculateDamage: function(min, max) {
             // getting a random number btw 3 & 10:
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if(confirm('You win! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            return true;
          } else if (this.playerHealth <= 0 ) {
                if(confirm('You lose! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            return true;   
          }
          return false;
        }
    }

})