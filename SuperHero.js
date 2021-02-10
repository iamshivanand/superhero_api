document.getElementById("image-side").addEventListener(
  "click",
  function (event) {
    console.log("click ho rha hai");

    document.getElementById("image-side").className = "flip flip-side-2";
    document.getElementById("details-side").className = "flip flip-side-1";
  },
  false
);
document.getElementById("details-side").addEventListener(
  "click",
  function (event) {
    console.log("click ho rha hai");

    document.getElementById("image-side").className = "flip flip-side-1";
    document.getElementById("details-side").className = "flip flip-side-2";
  },
  false
);
