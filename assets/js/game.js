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
  const displayStats = (selector, player) => {

  }
  const selectCharacter = (selector, player) => {
    let template = `<img src="assets/images/${player.replace(" ", "-").toLowerCase()}.jpg" alt="${player}" class="border border-light">`; 
    $(selector).find("figure").html(template);
  }
  const superPower = (player, enemy) => {

  }

  // render heroes list items
  $.each(heroes, (index, value) => {
    let template = `<li class="mr-3"><a href="#" class="character" title="${value}" data-character="${value}" data-character-type="hero"><img src="assets/images/${value.replace(" ", "-").toLowerCase()}.jpg" alt="${value}" class="border border-secondary"></a></li>`
    $("#heroes").append(template);
  });
  // render villain list items
  $.each(villains, (index, value) => {
    let template = `<li class="mr-3"><a href="#" class="character" title="${value}" data-character="${value}" data-character-type="villain"><img src="assets/images/${value.replace(" ", "-").toLowerCase()}.jpg" alt="${value}" class="border border-secondary"></a></li>`
    $("#villains").append(template);
  });
  // onclick
  $(".character").on("click", (event) => {
    event.preventDefault();
    if (event.currentTarget.dataset.characterType === "hero") {
      selectCharacter(".hero", event.currentTarget.dataset.character);
    }
    if (event.currentTarget.dataset.characterType === "villain") {
      selectCharacter(".villain", event.currentTarget.dataset.character);
    }
  });
});