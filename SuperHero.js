const acces_token = 2720042398098178;
if (document.URL.includes("Home.html")) {
  input = document.getElementById("input");
  var x = input.addEventListener("keypress", function (e) {
    input_value = e.target.value;
    console.log(input_value);
  });
  document
    .getElementById("input-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      localStorage.setItem("input_value", input.value);
      document.location.href = "SuperHero.html";
    });
}

// console.log(input_final_value);
// function handleInput(e) {
//   input = e.target.value;
//   search_url = `https://www.superheroapi.com/api.php/${acces_token}/search/${input}`;
// console.log(search_url);
// fetch(search_url)
//   .then((res) => res.json())
//   .then((data) => {
//     result = data.results;
//     // console.log(result);
//     result.map((superhero) => {
//       var image_url = superhero.image.url;
//       console.log(image_url);
//       var search_suggestion = document.createElement("div");
//       search_suggestion.className = "search-suggestions";
//       var image_div = document.createElement("div");
//       image_div.className = "image";
//       var image = document.createElement("IMG");
//       var details_div = document.createElement("div");
//       details_div.className = "details";
//       var name = document.createElement("div");
//       name.className = "name";
//       var name_heading = document.createElement("h1");
//       var button_div = document.createElement("div");
//       button_div.className = "button-div";
//       var favourite_button = document.createElement("button");
//       search_suggestion.style.display = "flex";
//       var search_bar_div = document.getElementById("search-bar-div");
//       search_bar_div.appendChild(search_suggestion);
//       search_suggestion.appendChild(image_div);
//       image_div.appendChild(image);
//       search_suggestion.appendChild(details_div);
//       details_div.appendChild(name);
//       name.appendChild(name_heading);
//       search_suggestion.appendChild(button_div);
//       button_div.appendChild(favourite_button);
//       image.src = image_url;
//       favourite_button.textContent = "favourite";
//       name_heading.textContent = superhero.name;
//     });

// this code here is to change the page from home to collection
//       document.location.href = "SuperHero.html";
//       // document
//       //   .getElementById("fav-button")
//       //   .addEventListener("click", function () {
//       //     //this will handle when we click on the favourite button
//       //     console.log("button clicked");
//       //   });
//     });
//   // fetchSuperHero();
// }

// this script here is used to flip the card
if (document.URL.includes("SuperHero.html")) {
  var input = localStorage.getItem("input_value");
  console.log(input);
  const search_url = `https://www.superheroapi.com/api.php/${acces_token}/search/${input}`;
  console.log(search_url);

  var result = fetch(search_url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      return data;
    });
  // console.log(result);
  var card_container = document.createElement("div");
  card_container.setAttribute("id", "card-container");
  card_container.style.display = "flex";
  card_container.style.flexWrap = "wrap";
  card_container.style.height = "100%";
  card_container.style.width = "100%";
  document.body.appendChild(card_container);
  result.then(function (data) {
    console.log(data.results);
    var superheros = data.results;
    superheros.map((superhero) => {
      var image_url = superhero.image.url;
      console.log(image_url);
      //details of the superhero
      var name = superhero.name;
      var power = superhero.powerstats;
      var intelligence = power.intelligence;
      var strength = power.strength;
      var speed = power.speed;
      var durability = power.durability;
      var Power = power.power;
      var combat = power.combat;
      var bio = superhero.biography;
      var full_name = bio["full-name"];
      var alter_egos = bio["alter-egos"];
      var gender = superhero.appearance.gender;

      //from here we are creating the elements for the front side
      var front_div = document.createElement("div");
      front_div.className = "flip";
      front_div.setAttribute("id", "image-side");
      var image_div = document.createElement("div");
      image_div.className = "image-container";
      var image = document.createElement("IMG");
      var name_container = document.createElement("div");
      name_container.className = "name";
      var name_heading = document.createElement("h1");
      var button_div = document.createElement("div");
      button_div.className = "favourite-button-div";
      var button = document.createElement("button");
      button.setAttribute("id", "fav-button");
      var detail_button = document.createElement("button");
      detail_button.textContent = "Details";
      //appending the children for front side
      card_container.appendChild(front_div);
      front_div.appendChild(image_div);
      image_div.appendChild(image);
      image.src = image_url;
      front_div.appendChild(name_container);
      name_container.appendChild(name_heading);
      name_heading.textContent = name;
      front_div.appendChild(button_div);
      button_div.appendChild(button);
      button_div.appendChild(detail_button);
      var prevList = JSON.parse(localStorage.getItem("objList"));
      already_there = false;
      console.log(prevList);
      prevList.map((each) => {
        if (each.name === name) {
          already_there = true;
        }
      });
      if (already_there) {
        button.textContent = "UnFavourite";
      } else {
        button.textContent = "Favourite";
      }

      //from here we are creating the back side
      var back_div = document.createElement("div");
      back_div.className = "flip";
      back_div.setAttribute("id", "details-side");
      var power_div = document.createElement("div");
      power_div.className = "power";
      var power_h3 = document.createElement("h3");
      power_h3.textContent = "Power";
      var intelligence_h4 = document.createElement("h4");
      var strength_h4 = document.createElement("h4");
      var speed_h4 = document.createElement("h4");
      var durability_h4 = document.createElement("h4");
      var power_h4 = document.createElement("h4");
      var combat_h4 = document.createElement("h4");
      var bio_div = document.createElement("div");
      var bio_h3 = document.createElement("h3");
      bio_h3.textContent = "Bio";
      var full_name_h4 = document.createElement("h4");
      var alter_egos_h4 = document.createElement("h4");

      //appending the childs
      card_container.appendChild(back_div);
      back_div.appendChild(power_div);
      power_div.appendChild(power_h3);
      power_div.appendChild(intelligence_h4);
      power_div.appendChild(strength_h4);
      power_div.appendChild(speed_h4);
      power_div.appendChild(durability_h4);
      power_div.appendChild(power_h4);
      power_div.appendChild(combat_h4);
      back_div.appendChild(bio_div);
      bio_div.appendChild(full_name_h4);
      bio_div.appendChild(alter_egos_h4);

      // document.getElementsByClassName("flip").style.position = "absolute";

      //adding the values to the backside
      intelligence_h4.textContent = "intelligence: " + intelligence;
      strength_h4.textContent = "strength: " + strength;
      speed_h4.textContent = "speed: " + speed;
      durability_h4.textContent = "durability: " + durability;
      power_h4.textContent = "power: " + Power;
      combat_h4.textContent = "combat: " + combat;
      full_name_h4.textContent = "full-name: " + full_name;
      alter_egos_h4.textContent = "alter-egos: " + alter_egos;
      front_div.style.position = "relative";
      back_div.style.position = "absolute";

      button.addEventListener("click", function (event) {
        var obj = {
          image: image_url,
          name,
          intelligence,
          strength,
          full_name,
          power: Power,
          combat,
          speed,
        };
        already_there = false;
        var objList = [];
        var prevList = JSON.parse(localStorage.getItem("objList"));
        prevList.map((each) => {
          if (each.name === obj.name) {
            already_there = true;
          }
        });
        if (!already_there) {
          objList.push(obj);
          objList = objList.concat(
            JSON.parse(localStorage.getItem("objList") || "[]")
          );
          localStorage.setItem("objList", JSON.stringify(objList));
        }

        // console.log(name);
        // localStorage.setItem("name", JSON.stringify(obj));
        // console.log(localStorage.getItem("name"));
        button.textContent = "UnFavourite";
      });
      button.addEventListener("click", function (event) {
        if (already_there) {
          var filtered = prevList.filter((item) => item.name != name);
          localStorage.setItem("objList", JSON.stringify(filtered));
          button.textContent = "Favourite";
          console.log(localStorage.getItem("objList"));
          already_there = false;
        }
      });

      //these are here for the animation that is there for showing the details

      detail_button.addEventListener(
        "click",
        function (event) {
          console.log("click ho rha hai");

          front_div.className = "flip flip-side-2";
          front_div.style.position = "absolute";
          back_div.className = "flip flip-side-1";
          back_div.style.position = "relative";
        },
        false
      );
      back_div.addEventListener(
        "click",
        function (event) {
          console.log("click ho rha hai");

          front_div.className = "flip flip-side-1";
          front_div.style.position = "relative";
          back_div.className = "flip flip-side-2";
          back_div.style.position = "absolute";
        },
        false
      );
    });
  });
}

if (document.URL.includes("Favourites.html")) {
  // console.log("yaha bhee pahuch gyee");
  // localStorage.removeItem("objList");
  var fav_superhero_list = JSON.parse(localStorage.getItem("objList"));
  console.log("list", fav_superhero_list);

  fav_superhero_list.map((each) => {
    var container_div = document.createElement("div");
    container_div.className = "container";
    var image_div = document.createElement("div");
    image_div.className = "image";
    var Image = document.createElement("img");
    Image.src = each.image;
    var detail_div = document.createElement("div");
    detail_div.className = "details";
    var name_div = document.createElement("div");
    name_div.className = "name";
    var name_heading = document.createElement("h1");
    name_heading.textContent = each.name;
    var full_name_h4 = document.createElement("h4");
    full_name_h4.textContent = "Full-name: " + each.full_name;
    var intelligence_h4 = document.createElement("h4");
    intelligence_h4.textContent = "Intelligence: " + each.intelligence;
    var strength_h4 = document.createElement("h4");
    strength_h4.textContent = "Strength: " + each.strength;
    var speed_h4 = document.createElement("h4");
    speed_h4.textContent = "Speed: " + each.speed;
    var power_h4 = document.createElement("h4");
    power_h4.textContent = "Power: " + each.power;
    var combat_h4 = document.createElement("h4");
    combat_h4.textContent = "combat: " + each.combat;
    var button_div = document.createElement("div");
    button_div.className = "button-div";
    var button = document.createElement("button");
    button.textContent = "UnFavourite";

    //appending the divs to there parent divs
    document.body.appendChild(container_div);
    container_div.appendChild(image_div);
    image_div.appendChild(Image);
    container_div.appendChild(detail_div);
    detail_div.appendChild(name_div);
    name_div.appendChild(name_heading);
    detail_div.appendChild(full_name_h4);
    detail_div.appendChild(intelligence_h4);
    detail_div.appendChild(strength_h4);
    detail_div.appendChild(speed_h4);
    detail_div.appendChild(power_h4);
    detail_div.appendChild(combat_h4);
    container_div.appendChild(button_div);
    button_div.appendChild(button);

    button.addEventListener("click", function (event) {
      var filtered = fav_superhero_list.filter(
        (item) => item.name != each.name
      );
      localStorage.setItem("objList", JSON.stringify(filtered));
      button.textContent = "Favourite";
      console.log(localStorage.getItem("objList"));
      location.reload();
    });
  });
}
