function addUser(){
    player1_name = document.getElementById("input_box_1").value;
    player2_name = document.getElementById("input_box_2").value;
localStorage.setItem("namekey1",player1_name);
localStorage.setItem("namekey2",player2_name);
window.location="game_page.html";
}