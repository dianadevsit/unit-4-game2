
    alert("Save the Princess from the Dragon. Choose your warrier and fight against the dragons!"); 
    var baseAttack = 0;
    var warrior;
    var dragon; 
    var charArray = []; //storing the charaters objects 
// flag to make sure the player picks a player and opponent 
    var warriorSelected = false;
    var dragonSelected = false;
    
//function for the game: name, hp, ap. constructing with this. 
    function Charater(name, hp, ap) {
        this.name = name;
        this.healthPoints = hp;
        this.attackPower = ap;
    }

//increasung the attack strength to this attack strength + original attack strength
Charater.prototype.increaseAttack = function () {
    this.attackPower += baseAttack;
//+= in JavaScript (as well as in many other languages) adds the right hand side to the variable on the left hand side, storing the result in that variable. 
};

//attack
Charater.prototype.attack = function (Obj) {
    $("#msg").html("You attacked " + Obj.name + "for " + this.attackPower + " damage points.");
    this.increaseAttack();
}

//initialize charactors -- should it be "init(Charaters)"? 
function initCharacters () {
    var warrior1 = new Charater ("Warrior 1", 200, 75, 25, "./assets/images/warrior1.jpg");
    var warrior2 = new Charater ("Warrior 2", 100, 10, 5, "./assets/images/warrior2.jpg");
    var warrior3 = new Charater ("Warrior 3", 150, 30, 12, "./assests/images/warrior3.jpg");
}
//init function is called a constructor function, and we can invoke it by using the special Javascript keyword new .

//saving the original attack
function setBaseAttack(Obj) {
    baseAttack = Obj.attackPower;
}

//using if else loop to work with character being alive. If the HP is greater than 0, then warrior stays alive. 
function isAlive(Obj) {
    if (Obj.healthPoints > 0) {
        return true;
    
    } else return false;
}
