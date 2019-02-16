/* global variables */

var random_number_placeholder;
var target_score=0;
var crystal_1;
var crystal_2;
var crystal_3;
var crystal_4;
var total_score=0;
var win=0;
var lose=0;


/* calling functions */

generate_target_score();

generate_values_for_crystals();








function generate_target_score()
{
    /* resets wins and losses after each game */
    
    document.getElementById('win').innerHTML = win;
    document.getElementById('lose').innerHTML = lose;

    
    /* generates target score between from 69 upto 69+30 */
    
    var random =Math.floor(Math.random() * 69) + 30; 
    random_number_placeholder = document.getElementById('random-number');

    /* shows target score on html  */
    
    random_number_placeholder.innerHTML = random;

    target_score = random;
}

function generate_values_for_crystals()
{

    /*  generates random numbers for crystals and assign to varibales */

    var random =Math.floor(Math.random() * 11) + 1; 

    crystal_1 = random;
 


    var random =Math.floor(Math.random() * 11) + 1; 

    crystal_2 = random;
 

    var random =Math.floor(Math.random() * 11) + 1;

    crystal_3 = random;
  

    var random =Math.floor(Math.random() * 11) + 1; 

    crystal_4 = random;
  
}

/* following functions execute when crystal is clicked...it updates total score, displays it on html and checks if the user is win or not*/

function crystal_1_click()
{
    total_score = total_score + crystal_1;

    document.getElementById('score').innerHTML= total_score;
    
    check_win_lose();
}

function crystal_2_click()
{
    total_score = total_score + crystal_2;

    document.getElementById('score').innerHTML= total_score;
    
    check_win_lose();
}

function crystal_3_click()
{
    total_score = total_score + crystal_3;

    document.getElementById('score').innerHTML= total_score;
    
    check_win_lose();
}

function crystal_4_click()
{
    total_score = total_score + crystal_4;

    document.getElementById('score').innerHTML= total_score;
    
    check_win_lose();
}


/* checks if user is win or not*/

function check_win_lose()
{
    
    /* if score matches the target score it adds increment to win and reset and play again*/
    
    if(total_score === target_score)
    {
        win++;
        alert("You Win");
        
        reset_and_paly_again();
    }
    else if(total_score > target_score)
    {
        /* if score gets greater than target score it reduces  to lose and reset and play again*/
        
        lose++;
        alert("You Lose");
        
        reset_and_paly_again();
    }
}


/* reset and play again function */

function reset_and_paly_again()
{
    generate_target_score();
    
    generate_values_for_crystals();
    
    total_score=0;
    
    document.getElementById('score').innerHTML= total_score;
}