(function(){
// if there is a winner or a tie, then this will
// display the html page for it
function winner(playerThatWon, message){
	let gameDiv = document.getElementById('board');
	// get rid of previous screen
	gameDiv.style.display = 'none';
	
	// replace with this new screen
	let HTML = `
		<div class="screen screen-win" id="finish">
		  <header>
		    <h1>Tic Tac Toe</h1>
		    <p class="message">${message}</p>
		    <a href="#" class="button single">Single Player</a>
		    <a href="#" class="button multi">Multiplayer</a>
		  </header>
		</div>`;
	
	// determining what color to use depending on
	// who won or tie by adding a class.
	let body = document.querySelector('body');
	body.innerHTML = HTML;
	let whichColor = document.querySelector('#finish');
	if (playerThatWon == 'player1 wins!'){
		whichColor.classList.add('screen-win-one');
	}else if (playerThatWon == 'player2 wins!'){
		whichColor.classList.add('screen-win-two');
	}else if (playerThatWon == 'tie!'){
		whichColor.classList.add('screen-win-tie');
	}
	
	// for when the winner page appears, click for new game.
	let header = document.querySelector('header');
	header.addEventListener('click', function(event) {
		if (event.target.classList.contains('single')){
			gamePage("computer");
		}else if (event.target.classList.contains('multi')){
			gamePage();
		}	
	});
}


// checking to see if someone one or tied 
// after every turn
function checkIfWon() {
	box1 = document.getElementById('1');
	box2 = document.getElementById('2');
	box3 = document.getElementById('3');
	box4 = document.getElementById('4');
	box5 = document.getElementById('5');
	box6 = document.getElementById('6');
	box7 = document.getElementById('7');
	box8 = document.getElementById('8');
	box9 = document.getElementById('9');

	// variables to be used at the end of this 
	// function to see if they tied
	let boxes1 = document.querySelectorAll('.box-filled-2')
	let boxes2 = document.querySelectorAll('.box-filled-1')
	if (boxes1){
		boxes1 = boxes1.length;
	}else{
		boxes1 = 0;
	}
	if (boxes2){
		boxes2 = boxes2.length;
	}else{
		boxes2 = 0;
	}
	// if 9 in totalBoxes then it was a tie
	totalBoxes = boxes1 + boxes2;
	//straight boxes 1,2,3
	// see if player one wins
	if (box1.classList.contains('box-filled-1') &&
	 box2.classList.contains('box-filled-1') &&
	  box3.classList.contains('box-filled-1')){
		return true;
	// see if player two wins
	}else if (box1.classList.contains('box-filled-2') &&
	 box2.classList.contains('box-filled-2') &&
	  box3.classList.contains('box-filled-2')){
		return true;
	//straight boxes 4,5,6
	}else if (box4.classList.contains('box-filled-1') &&
	 box5.classList.contains('box-filled-1') &&
	  box6.classList.contains('box-filled-1')){
		return true;
	}else if (box4.classList.contains('box-filled-2') &&
	 box5.classList.contains('box-filled-2') &&
	  box6.classList.contains('box-filled-2')){
		return true;
	//straight boxes 7,8,9
	}else if (box7.classList.contains('box-filled-1') &&
	 box8.classList.contains('box-filled-1') &&
	  box9.classList.contains('box-filled-1')){
		return true;
	}else if (box7.classList.contains('box-filled-2') &&
	 box8.classList.contains('box-filled-2') &&
	  box9.classList.contains('box-filled-2')){
		return true;
	}
	//vertical boxes 1,4,7
	else if (box1.classList.contains('box-filled-1') &&
	 box4.classList.contains('box-filled-1') &&
	  box7.classList.contains('box-filled-1')){
		return true;
	}else if (box1.classList.contains('box-filled-2') &&
	 box4.classList.contains('box-filled-2') &&
	  box7.classList.contains('box-filled-2')){
		return true;
	}
	// vertical boxes 2,5,8
	else if (box2.classList.contains('box-filled-1') &&
	 box5.classList.contains('box-filled-1') &&
	  box8.classList.contains('box-filled-1')){
		return true;
	}else if (box2.classList.contains('box-filled-2') &&
	 box5.classList.contains('box-filled-2') &&
	  box8.classList.contains('box-filled-2')){
		return true;
	}
	// vertical boxes 3,6,9
	else if (box3.classList.contains('box-filled-1') &&
	 box6.classList.contains('box-filled-1') &&
	  box9.classList.contains('box-filled-1')){
		return true;
	}else if (box3.classList.contains('box-filled-2') &&
	 box6.classList.contains('box-filled-2') &&
	  box9.classList.contains('box-filled-2')){
		return true;
	}
	// diagonal 1,5,9
	else if (box1.classList.contains('box-filled-1') &&
	 box5.classList.contains('box-filled-1') &&
	  box9.classList.contains('box-filled-1')){
		return true;
	}else if (box1.classList.contains('box-filled-2') &&
	 box5.classList.contains('box-filled-2') &&
	  box9.classList.contains('box-filled-2')){
		return true;
	}
	// diagonal 3,5,7
	else if (box3.classList.contains('box-filled-1') &&
	 box5.classList.contains('box-filled-1') &&
	  box7.classList.contains('box-filled-1')){
		return true;
	}else if (box3.classList.contains('box-filled-2') &&
	 box5.classList.contains('box-filled-2') &&
	  box7.classList.contains('box-filled-2')){
		return true;
	}else if (totalBoxes == 9){
		return "tie";
	}else{
		return false;
	}
}

// if single player, this will go for the computer
// opponent
function computerTurn() {
	let allBoxes = document.querySelectorAll('.box');
	let availableBoxes = [];
	// get the boxes that are empty.
	for (let i=0; i<allBoxes.length; i++){
		if (!allBoxes[i].classList.contains('box-filled-2')){
			if (!allBoxes[i].classList.contains('box-filled-1')){
				availableBoxes.push(allBoxes[i]);
			}
		}
	}

	let indexChoice = Math.floor(Math.random() * availableBoxes.length);
	// random box that computer picked.
	availableBoxes[indexChoice].classList.add('box-filled-2');

	player1 = document.querySelector('#player1');
	player1.classList.add('active');
	player2 = document.querySelector('#player2');
	player2.classList.remove('active');				
}


// this is the main game page.
// this function is the beef of the code.
function gamePage(isSinglePlayer=null) {
	let player1Name = prompt("Enter player one's name: ");
	// if left blank then will assign a name
	if (!player1Name){
		player1Name = "Player One";
	}
	let player2Name;
	// if single or multiplayer
	if (isSinglePlayer == "computer"){
		player2Name = "computer";
	}else{
		player2Name = prompt("Enter player two's name: ");
		// if blank then will assign name
		if (!player2Name){
			player2Name = "Player Two";
		}
	}
	
	let body = document.querySelector('body');
	
	// the html of the main game.
	document.querySelector('body').innerHTML = `
		<div class="board" id="board">
  			<header>
    			<h1>Tic Tac Toe</h1>
    				<ul>
      					<li class="players" id="player1">
        					<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg>
      						<span><strong>${player1Name}</strong></span>
      					</li>
      					<li class="players" id="player2">
        					<svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg>
      						<span><strong>${player2Name}</strong></span>
      					</li>
    				</ul>
  			</header>
  			<ul class="boxes">
			    <li id="1" class="box"></li>
			    <li id="2" class="box"></li>
			    <li id="3" class="box"></li>
			    <li id="4" class="box"></li>
			    <li id="5" class="box"></li>
			    <li id="6" class="box"></li>
			    <li id="7" class="box"></li>
			    <li id="8" class="box"></li> 
			    <li id="9" class="box"></li>
			</ul>
		</div>`;

	player1First = document.querySelector('#player1');
	// player one starts the game
	player1First.classList.add('active');

	// ******event listener mouseover/mouseout for boxes
	choices = document.querySelector('.boxes');
	choices.addEventListener("mouseover", function(event){
		// if 'LI' already was chosen then don't change.
		if (event.target.tagName == "LI" && !event.target.classList.contains('box-filled-1') && !event.target.classList.contains('box-filled-2')){

			if (document.querySelector('#player1').classList.contains('active')){
				event.target.style.backgroundImage = "url('img/o.svg')";
			}else{
				event.target.style.backgroundImage = "url('img/x.svg')";
			}
			
		}
	});
	// mouseout
	choices.addEventListener("mouseout", function(event){
		if (event.target.tagName == "LI"){
			event.target.style.backgroundImage = "";
		}
	});
	// ****** end of event listener mouseover/mouseout

	// if multiplayer
	if (player2Name != "computer"){

	// ******event listener 'click', choose box
		choices = document.querySelector('.boxes');
		choices.addEventListener("click", function(event){
			if (event.target.tagName == "LI" && !event.target.classList.contains('box-filled-1') && !event.target.classList.contains('box-filled-2')){
				if (document.querySelector('#player1').classList.contains('active')){
					// if it was player ones turn and box is empty
					// then do this
					event.target.classList.add('box-filled-1');
					player1 = document.querySelector('#player1');
					player1.classList.remove('active');
					player2 = document.querySelector('#player2');
					player2.classList.add('active');
					if (checkIfWon() == "tie"){
						winner('tie!', 'Game was a tie!');
					}
					else if (checkIfWon()){
						winner('player1 wins!',player1Name + " wins!");
					}
				}else{
					// if it was player twos turn and box is empty
					// then do this
					event.target.classList.add('box-filled-2');
					player1 = document.querySelector('#player1');
					player1.classList.add('active');
					player2 = document.querySelector('#player2');
					player2.classList.remove('active');
					if (checkIfWon() == "tie"){
						winner('tie!', 'Game was a tie!');
					}
					else if (checkIfWon()){
						winner('player2 wins!', player2Name + " wins!");
					}
				}
			}
		});
	// ******end of event listener 'click', choose box.

	// if playing against a computer then do this
	}else{
		choices = document.querySelector('.boxes');
		choices.addEventListener("click", function(event){
			if (event.target.tagName == "LI" && !event.target.classList.contains('box-filled-1') && !event.target.classList.contains('box-filled-2')){
				if (document.querySelector('#player1').classList.contains('active')){
					// if player one's turn and box is empty then do this
					event.target.classList.add('box-filled-1');
					player1 = document.querySelector('#player1');
					player1.classList.remove('active');
					player2 = document.querySelector('#player2');
					player2.classList.add('active');
					if (checkIfWon() == "tie"){
						winner('tie!', 'Game was a tie!');
					}
					else if (checkIfWon()){
						winner('player1 wins!',player1Name + " wins!");
					}else{
						// if player one didn't win on that turn
						// then do computer's turn
						computerTurn();
						// check if computer tied or won.
						if (checkIfWon() == "tie"){
							winner('tie!', 'Game was a tie!');
						}
						else if (checkIfWon()){
							winner('player2 wins!', player2Name + " wins!");
						}
					}
			}
			}
		});
	}
};

// sets up the start page then kicks it off
// to the game page once a button is clicked.
function startPage(){
	// if previous page, then get rid of it
	let gameDiv = document.getElementById('board');
	gameDiv.style.display = 'none';

	let body = document.querySelector('body');

	// start page's html.
	let startHTML = `
			<div class="screen screen-start" id="start">
			  <header>
			    <h1>Tic Tac Toe</h1>
			    <a href="#" class="button single">Single Player</a>
			    <a href="#" class="button multi">Multiplayer</a>
			  </header>
			</div>`;

	body.innerHTML = startHTML;

	// the two buttons on the start page for single/multiplayer
	let header = document.querySelector('header');
	header.addEventListener('click', function(event) {
		if (event.target.tagName == "A"){
			if (event.target.classList.contains('single')){
				gamePage("computer");
			}else if (event.target.classList.contains('multi')){
				gamePage();
			}
		}
	});
};

startPage();

}());