$(function(){
  let heroes = ["Han Solo", "Luke Skywalker"];
  let villains = ["Boba Fett", "Darth Vader"];

  let BobaFett = {
    firstName:  "Boba",
    lastName:   "Fett",
    class:      "Villain",
    hp:         150,
    attackMax:  25
  }
  let DarthVader = {
    firstName:  "Darth",
    lastname:   "Vader",
    class:      "Villain",
    hp:         200,
    attackMax:  30
  }
  let HanSolo = {
    firstName:  "Han",
    lastName:   "Solo",
    class:      "Hero",
    hp:         125,
    attackMax:  20
  }
  let LukeSkywalker = {
    firstName:  "Luke",
    lastName:   "Skywalker",
    class:      "Hero",
    hp:         100,
    attackMax:  20
  }

  const activateShield = (player) => {

  }
  const attack = (player, enemy) => {

  }
  const selectCharacter = (selector, player) => {
   
  }


  $.each(heroes, (index, value) => {
    let template = `<li><a href="#" data-character="${value}">${value}</a></li>`
    $("#heroes").append(template);
  });
  
  $.each(villains, (index, value) => {
    let template = `<li><a href="#" data-character="${value}">${value}</a></li>`
    $("#villains").append(template);
  });

  
});