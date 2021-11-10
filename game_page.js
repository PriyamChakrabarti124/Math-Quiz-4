player1_name=localStorage.getItem("namekey1");
player2_name=localStorage.getItem("namekey2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;

function send()
{
    firstnum=document.getElementById("input_box_1").value;
    secondnum=document.getElementById("input_box_2").value;
    actual_answer = parseInt(firstnum) * parseInt(secondnum);
 question_word = "<h4> Question: " + firstnum + " X " + secondnum + " = " + "</h4> <br>"
 input_box = " Answer: <input type='text' id='input_check_box'> </br></br> ";
 check_button="<button class='btn btn-info' onclick='check()'> Check </button>"; 

 row = question_word + input_box + check_button;

 document.getElementById("output").innerHTML = row;
 document.getElementById("input_box_1").value="";
 document.getElementById("input_box_2").value="";
}

question_turn="player1";
answer_turn="player2";

function check()
{
get_answer=document.getElementById("input_check_box").value;

if(get_answer == actual_answer)   
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else 
        {
            update_player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
    

// SWITCHING TURNS

    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name ;
    }
    else // question_turn == "p2"
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name ;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name ;
    }
    else 
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name ;
    }
    document.getElementById("output").innerHTML = "";
    
}