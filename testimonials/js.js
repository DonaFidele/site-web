
  

function changerBloc() {
    var bloc1 = document.getElementById("container1");
    var bloc2 = document.getElementById("con_tainer2");
    if (bloc1.style.display === "none") {
      bloc1.style.display = "block";
      bloc2.style.display = "none";
    } else {
      bloc1.style.display = "none";
      bloc2.style.display = "block";
    }
}