$(function(){
  let heroes = ["Han Solo", "Luke Skywalker"],
      villains = ["Boba Fett", "Darth Vader"];

  let selectedHero,
      selectedVillain;

  let BobaFett = {
    class:      "Villain",
    hp:         150,
    attackMax:  25
  }
  let DarthVader = {
    class:      "Villain",
    hp:         200,
    attackMax:  30
  }
  let HanSolo = {
    class:      "Hero",
    hp:         125,
    attackMax:  20
  }
  let LukeSkywalker = {
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
  // character select
  $(".character").on("click", (event) => {
    event.preventDefault();
    if (event.currentTarget.dataset.characterType === "hero") {
      selectCharacter(".hero", event.currentTarget.dataset.character);
      $(".controls").removeClass("hide");
      selectedHero = event.currentTarget.dataset.character;
    }
    if (event.currentTarget.dataset.characterType === "villain") {
      selectCharacter(".villain", event.currentTarget.dataset.character);
      selectedVillain = event.currentTarget.dataset.character;
    }
  });
  // attack!
  $("#Attack").on("click", (event) => {
    event.preventDefault();
    if (selectedVillain == null) {
      alert("Select a villain first");
    } else {
      console.log("attack!");
    }
  });
  // defend
  $("#Shield").on("click", (event) => {
    event.preventDefault();
    console.log("shielded!");
  });
});