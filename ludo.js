$(function () {

    //get btn
    let btn = $("#btn");

    //initialize dice to 1
    let currentDiceNumber = 1;

    //get dice face from the dom
    let diceFace = document.getElementById("dice-face1");

    //path to the faces of the dice
    let allDiceFaces = ["img/diceface.jpg", "img/diceface1.jpg", "img/diceface2.jpg", "img/diceface3.jpg", "img/diceface4.jpg", "img/diceface5.jpg", "img/diceface6.jpg"];
    
    //get the a random number
    function rollDice() {
        currentDiceNumber = Math.floor((Math.random() * 6) + 1);
        console.log(currentDiceNumber);
        diceFace.src = allDiceFaces[currentDiceNumber];
        playerTurn();
    }

    //playerTurner's turn
    

    //blueseed path
    var blueSeedPath = [1, 2, 8, 9, 25, 26, 27, 28, 29, 21, 18, 15, 10, 3, 4, 5, 12, 17, 20, 23, 31, 32, 33, 34, 35, 36, 49, 62, 61, 60, 59, 58, 57, 65, 68, 71, 76, 83, 82, 81, 74, 69, 66, 63, 55, 54, 53, 52, 51, 50, 37, 38, 39, 40, 41, 42, 43, 100, 200, 300, 400, 500, 600];
    //redseed path
    var redSeedPath = [85, 84, 78, 77, 61, 60, 59, 58, 57, 65, 68, 71, 76, 83, 82, 81, 74, 69, 66, 63, 55, 54, 53, 52, 51, 50, 37, 24, 25, 26, 27, 28, 29, 21, 18, 15, 10, 3, 4, 5, 12, 17, 20, 23, 31, 32, 33, 34, 35, 36, 49, 48, 47, 46, 45, 44, 43, 100, 200, 300, 400, 500, 600];
    //yellowseed path
    var yellowSeedPath = [79, 80, 72, 73, 74, 69, 66, 63, 55, 54, 53, 52, 51, 50, 37, 24, 25, 26, 27, 28, 29, 21, 18, 15, 10, 3, 4, 5, 12, 17, 20, 23, 31, 32, 33, 34, 35, 36, 49, 62, 61, 60, 59, 58, 57, 65, 68, 71, 76, 83, 82, 75, 70, 67, 64, 56, 43, 100, 200, 300, 400, 500, 600];
    //greensee path
    var greenSeedPath = [6, 7, 13, 14, 12, 17, 20, 23, 31, 32, 33, 34, 35, 36, 49, 62, 61, 60, 59, 58, 57, 65, 68, 71, 76, 83, 82, 81, 74, 69, 66, 63, 55, 54, 53, 52, 51, 50, 37, 24, 25, 26, 27, 28, 29, 21, 18, 15, 10, 3, 4, 11, 16, 19, 22, 30, 43, 100, 200, 300, 400, 500, 600];
    
    //initial positions for blue-seed
    var blueStrtPos1 = blueSeedPath[0];
    var blueStrtPos2 = blueSeedPath[1];
    var blueStrtPos3 = blueSeedPath[2];
    var blueStrtPos4 = blueSeedPath[3];


    //initial positions for red-seed
    var redStrtPos1 = redSeedPath[0];
    var redStrtPos2 = redSeedPath[1];
    var redStrtPos3 = redSeedPath[2];
    var redStrtPos4 = redSeedPath[3];

    //initial positions for yellow-seed
    var yellowStrtPos1 = yellowSeedPath[0];
    var yellowStrtPos2 = yellowSeedPath[1];
    var yellowStrtPos3 = yellowSeedPath[2];
    var yellowStrtPos4 = yellowSeedPath[3];

    //initial positions for green-seed
    var greenStrtPos1 = greenSeedPath[0];
    var greenStrtPos2 = greenSeedPath[1];
    var greenStrtPos3 = greenSeedPath[2];
    var greenStrtPos4 = greenSeedPath[3];


//set seed on positions required
function setSeedOnBoard() {
    //arrange blue seeds to current position
    $("td").each(function (index) {
        if (index === blueStrtPos1 || index === blueStrtPos2 || index === blueStrtPos3 || index === blueStrtPos4) {
            $("." + index).addClass("blue-seed");
        }
    });

    //arrange red seeds to current position
    $("td").each(function (index) {
        if (index === redStrtPos1 || index === redStrtPos2 || index === redStrtPos3 || index === redStrtPos4) {
            $("." + index).addClass("red-seed");
        }
    });

    //arrange yellow seeds to current position
    $("td").each(function (index) {
        if (index === yellowStrtPos1 || index === yellowStrtPos2 || index === yellowStrtPos3 || index === yellowStrtPos4) {
            $("." + index).addClass("yellow-seed");
        }
    });

    //arrange green seeds to current position
    $("td").each(function (index) {
        if (index === greenStrtPos1 || index === greenStrtPos2 || index === greenStrtPos3 || index === greenStrtPos4) {
            $("." + index).addClass("green-seed");
        }
    });
    
}


    //call the blue seed function to set the blue seeds in position
    setSeedOnBoard();

    //onclick event to trigger dice animation and playerTurn
    btn.on("click", function () {
        diceFace.src = "img/rollingdice2.gif";
        setTimeout(rollDice, 1500);
    });

    let turn = "blueandred";

    //call spotter function 
    function playerTurn() {
        
        if(turn === "blueandred"){
            if(currentDiceNumber !== 6)
            turn = "greenandyellow";
            console.log(turn);
            setSpotterForBnR();
        } else {
            if(currentDiceNumber !== 6)
            turn = "blueandred";
            console.log(turn);
            setSpotterForGnY();
        }
    }

    //show spotter on blue and red seed to allow playerTurner to see movable seed
    function setSpotterForBnR() {

        if (currentDiceNumber === 6) {
            $("td").each(function (index) {
                if (index === blueStrtPos1 || index === blueStrtPos2 || index === blueStrtPos3 || index === blueStrtPos4) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === blueStrtPos1 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === blueStrtPos2 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === blueStrtPos3 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === blueStrtPos4 && index !== 2 && index !== 1 && index !== 8 && index !== 9)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if (index === redStrtPos1 || index === redStrtPos2 || index === redStrtPos3 || index === redStrtPos4) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === redStrtPos1 && index !== 85 && index !== 84 && index !== 78 && index !== 77) || (index === redStrtPos2 && index !== 85 && index !== 84 && index !== 78 && index !== 77) || (index === redStrtPos3 && index !== 84 && index !== 85 && index !== 78 && index !== 77) || (index === redStrtPos4 && index !== 84 && index !== 85 && index !== 78 && index !== 77)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });


        } else {
            $("td").each(function (index) {
                if ((index === blueStrtPos1 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === blueStrtPos2 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === blueStrtPos3 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === blueStrtPos4 && index !== 2 && index !== 1 && index !== 8 && index !== 9)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === redStrtPos1 && index !== 85 && index !== 84 && index !== 78 && index !== 77) || (index === redStrtPos2 && index !== 85 && index !== 84 && index !== 78 && index !== 77) || (index === redStrtPos3 && index !== 84 && index !== 85 && index !== 78 && index !== 77) || (index === redStrtPos4 && index !== 84 && index !== 85 && index !== 78 && index !== 77)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });
        }
    }


    //show spotter on blue and red seed to allow playerTurner to see movable seed
    function setSpotterForGnY() {

        if (currentDiceNumber === 6) {
            $("td").each(function (index) {
                if (index === yellowStrtPos1 || index === yellowStrtPos2 || index === yellowStrtPos3 || index === yellowStrtPos4) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === yellowStrtPos1 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowStrtPos2 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowStrtPos3 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowStrtPos4 && index !== 79 && index !== 80 && index !== 72 && index !== 73)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if (index === greenStrtPos1 || index === greenStrtPos2 || index === greenStrtPos3 || index === greenStrtPos4) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === greenStrtPos1 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenStrtPos2 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenStrtPos3 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenStrtPos4 && index !== 6 && index !== 7 && index !== 13 && index !== 14)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });


        } else {
            $("td").each(function (index) {
                if ((index === yellowStrtPos1 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowStrtPos2 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowStrtPos3 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowStrtPos4 && index !== 79 && index !== 80 && index !== 72 && index !== 73)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === greenStrtPos1 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenStrtPos2 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenStrtPos3 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenStrtPos4 && index !== 6 && index !== 7 && index !== 13 && index !== 14)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });
        }
    }



    //click event that uses jquery delegation
    $("table").on("click", "td", function (event) {
        let target = $(event.target);
        if (target.is("img")) {
            console.log(target.parent().attr("class").split(" ")[0]);
            targetClass = Number(target.parent().attr("class").split(" ")[0]);
            for (var k = 4; k < blueSeedPath.length; k++) {
                if(target.parent().hasClass("blue-seed")){
                    switch (targetClass) {
                        case blueStrtPos1:
                            if (blueSeedPath[k] === blueStrtPos1)
                                blueStrtPos1 = blueSeedPath[k + currentDiceNumber];
                            break;
                        case blueStrtPos2:
                            if (blueSeedPath[k] === blueStrtPos2)
                                blueStrtPos2 = blueSeedPath[k + currentDiceNumber];
                            break;
                        case blueStrtPos3:
                            if (blueSeedPath[k] === blueStrtPos3)
                                blueStrtPos3 = blueSeedPath[k + currentDiceNumber];
                            break;
                        case blueStrtPos4:
                            if (blueSeedPath[k] === blueStrtPos4)
                                blueStrtPos4 = blueSeedPath[k + currentDiceNumber];
                            break;
                    }
                } else if (target.parent().hasClass("red-seed")){
                    switch (targetClass) {
                        case redStrtPos1:
                            if (redSeedPath[k] === redStrtPos1)
                                redStrtPos1 = redSeedPath[k + currentDiceNumber];
                            break;
                        case redStrtPos2:
                            if (redSeedPath[k] === redStrtPos2)
                                redStrtPos2 = redSeedPath[k + currentDiceNumber];
                            break;
                        case redStrtPos3:
                            if (redSeedPath[k] === redStrtPos3)
                                redStrtPos3 = redSeedPath[k + currentDiceNumber];
                            break;
                        case redStrtPos4:
                            if (redSeedPath[k] === redStrtPos4)
                                redStrtPos4 = redSeedPath[k + currentDiceNumber];
                            break;
                    }
                } else if(target.parent().hasClass("yellow-seed")){
                    switch (targetClass) {
                        case yellowStrtPos1:
                            if (yellowSeedPath[k] === yellowStrtPos1)
                                yellowStrtPos1 = yellowSeedPath[k + currentDiceNumber];
                            break;
                        case yellowStrtPos2:
                            if (yellowSeedPath[k] === yellowStrtPos2)
                                yellowStrtPos2 = yellowSeedPath[k + currentDiceNumber];
                            break;
                        case yellowStrtPos3:
                            if (yellowSeedPath[k] === yellowStrtPos3)
                                yellowStrtPos3 = yellowSeedPath[k + currentDiceNumber];
                            break;
                        case yellowStrtPos4:
                            if (yellowSeedPath[k] === yellowStrtPos4)
                                yellowStrtPos4 = yellowSeedPath[k + currentDiceNumber];
                            break;
                    }
                } else {
                    switch (targetClass) {
                        case greenStrtPos1:
                            if (greenSeedPath[k] === greenStrtPos1)
                                greenStrtPos1 = greenSeedPath[k + currentDiceNumber];
                            break;
                        case greenStrtPos2:
                            if (greenSeedPath[k] === greenStrtPos2)
                                greenStrtPos2 = greenSeedPath[k + currentDiceNumber];
                            break;
                        case greenStrtPos3:
                            if (greenSeedPath[k] === greenStrtPos3)
                                greenStrtPos3 = greenSeedPath[k + currentDiceNumber];
                            break;
                        case greenStrtPos4:
                            if (greenSeedPath[k] === greenStrtPos4)
                                greenStrtPos4 = greenSeedPath[k + currentDiceNumber];
                            break;
                    }
                }

            }
            //check if seed is close to home 
            for (var a = 0; a < blueSeedPath.length; a++) {

                if (blueStrtPos1 === blueSeedPath[a] && (blueStrtPos1 === 100 || blueStrtPos1 === 200 || blueStrtPos1 === 300 || blueStrtPos1 === 400 || blueStrtPos1 === 500 || blueStrtPos1 === 600)) {
                    blueStrtPos1 = blueSeedPath[a - currentDiceNumber];
                }
                if (blueStrtPos2 === blueSeedPath[a] && (blueStrtPos2 === 100 || blueStrtPos2 === 200 || blueStrtPos2 === 300 || blueStrtPos2 === 400 || blueStrtPos2 === 500 || blueStrtPos2 === 600)) {
                    blueStrtPos2 = blueSeedPath[a - currentDiceNumber];
                }
                if (blueStrtPos3 === blueSeedPath[a] && (blueStrtPos3 === 100 || blueStrtPos3 === 200 || blueStrtPos3 === 300 || blueStrtPos3 === 400 || blueStrtPos3 === 500 || blueStrtPos3 === 600)) {
                    blueStrtPos3 = blueSeedPath[a - currentDiceNumber];
                }
                if (blueStrtPos4 === blueSeedPath[a] && (blueStrtPos4 === 100 || blueStrtPos4 === 200 || blueStrtPos4 === 300 || blueStrtPos4 === 400 || blueStrtPos4 === 500 || blueStrtPos4 === 600)) {
                    blueStrtPos4 = blueSeedPath[a - currentDiceNumber];
                }

                if (redStrtPos1 === redSeedPath[a] && (redStrtPos1 === 100 || redStrtPos1 === 200 || redStrtPos1 === 300 || redStrtPos1 === 400 || redStrtPos1 === 500 || redStrtPos1 === 600)) {
                    redStrtPos1 = redSeedPath[a - currentDiceNumber];
                }
                if (redStrtPos2 === redSeedPath[a] && (redStrtPos2 === 100 || redStrtPos2 === 200 || redStrtPos2 === 300 || redStrtPos2 === 400 || redStrtPos2 === 500 || redStrtPos2 === 600)) {
                    redStrtPos2 = redSeedPath[a - currentDiceNumber];
                }
                if (redStrtPos3 === redSeedPath[a] && (redStrtPos3 === 100 || redStrtPos3 === 200 || redStrtPos3 === 300 || redStrtPos3 === 400 || redStrtPos3 === 500 || redStrtPos3 === 600)) {
                    redStrtPos3 = redSeedPath[a - currentDiceNumber];
                }
                if (redStrtPos4 === redSeedPath[a] && (redStrtPos4 === 100 || redStrtPos4 === 200 || redStrtPos4 === 300 || redStrtPos4 === 400 || redStrtPos4 === 500 || redStrtPos4 === 600)) {
                    redStrtPos4 = redSeedPath[a - currentDiceNumber];
                }

                if (yellowStrtPos1 === yellowSeedPath[a] && (yellowStrtPos1 === 100 || yellowStrtPos1 === 200 || yellowStrtPos1 === 300 || yellowStrtPos1 === 400 || yellowStrtPos1 === 500 || yellowStrtPos1 === 600)) {
                    yellowStrtPos1 = yellowSeedPath[a - currentDiceNumber];
                }
                if (yellowStrtPos2 === yellowSeedPath[a] && (yellowStrtPos2 === 100 || yellowStrtPos2 === 200 || yellowStrtPos2 === 300 || yellowStrtPos2 === 400 || yellowStrtPos2 === 500 || yellowStrtPos2 === 600)) {
                    yellowStrtPos2 = yellowSeedPath[a - currentDiceNumber];
                }
                if (yellowStrtPos3 === yellowSeedPath[a] && (yellowStrtPos3 === 100 || yellowStrtPos3 === 200 || yellowStrtPos3 === 300 || yellowStrtPos3 === 400 || yellowStrtPos3 === 500 || yellowStrtPos3 === 600)) {
                    yellowStrtPos3 = yellowSeedPath[a - currentDiceNumber];
                }
                if (yellowStrtPos4 === yellowSeedPath[a] && (yellowStrtPos4 === 100 || yellowStrtPos4 === 200 || yellowStrtPos4 === 300 || yellowStrtPos4 === 400 || yellowStrtPos4 === 500 || yellowStrtPos4 === 600)) {
                    yellowStrtPos4 = yellowSeedPath[a - currentDiceNumber];
                }

                if (greenStrtPos1 === greenSeedPath[a] && (greenStrtPos1 === 100 || greenStrtPos1 === 200 || greenStrtPos1 === 300 || greenStrtPos1 === 400 || greenStrtPos1 === 500 || greenStrtPos1 === 600)) {
                    greenStrtPos1 = greenSeedPath[a - currentDiceNumber];
                }
                if (greenStrtPos2 === greenSeedPath[a] && (greenStrtPos2 === 100 || greenStrtPos2 === 200 || greenStrtPos2 === 300 || greenStrtPos2 === 400 || greenStrtPos2 === 500 || greenStrtPos2 === 600)) {
                    greenStrtPos2 = greenSeedPath[a - currentDiceNumber];
                }
                if (greenStrtPos3 === greenSeedPath[a] && (greenStrtPos3 === 100 || greenStrtPos3 === 200 || greenStrtPos3 === 300 || greenStrtPos3 === 400 || greenStrtPos3 === 500 || greenStrtPos3 === 600)) {
                    greenStrtPos3 = greenSeedPath[a - currentDiceNumber];
                }
                if (greenStrtPos4 === greenSeedPath[a] && (greenStrtPos4 === 100 || greenStrtPos4 === 200 || greenStrtPos4 === 300 || greenStrtPos4 === 400 || greenStrtPos4 === 500 || greenStrtPos4 === 600)) {
                    greenStrtPos4 = greenSeedPath[a - currentDiceNumber];
                }
            }

            //if seed has 6 and it's at opening position, call out (for blue)
            if (target.parent().hasClass("1")) {
                blueStrtPos1 = 25;
            } else if (target.parent().hasClass("2")) {
                blueStrtPos2 = 25;
            } else if (target.parent().hasClass("8")) {
                blueStrtPos3 = 25;
            } else if (target.parent().hasClass("9")) {
                blueStrtPos4 = 25;
            }

            //if seed has 6 and it's at opening position, call out (for red seed)
            if (target.parent().hasClass("85")) {
                redStrtPos1 = 61;
            } else if (target.parent().hasClass("84")) {
                redStrtPos2 = 61;
            } else if (target.parent().hasClass("78")) {
                redStrtPos3 = 61;
            } else if (target.parent().hasClass("77")) {
                redStrtPos4 = 61;
            }

            //if seed has 6 and it's at opening position, call out (for yellow seed)
            if (target.parent().hasClass("79")) {
                yellowStrtPos1 = 74;
            } else if (target.parent().hasClass("80")) {
                yellowStrtPos2 = 74;
            } else if (target.parent().hasClass("72")) {
                yellowStrtPos3 = 74;
            } else if (target.parent().hasClass("73")) {
                yellowStrtPos4 = 74;
            }

            //if seed has 6 and it's at opening position, call out (for green seed)
            if (target.parent().hasClass("6")) {
                greenStrtPos1 = 12;
            } else if (target.parent().hasClass("7")) {
                greenStrtPos2 = 12;
            } else if (target.parent().hasClass("13")) {
                greenStrtPos3 = 12;
            } else if (target.parent().hasClass("14")) {
                greenStrtPos4 = 12;
            }

            //remove added dice number if the bluepath doesn't exist
            console.log(blueStrtPos3);
            target.parent().removeClass("blue-seed");
            target.parent().removeClass("red-seed");
            target.parent().removeClass("yellow-seed");
            target.parent().removeClass("green-seed");
            //call the setBlunRed function to rearrange blue and red seeds on position
            setSeedOnBoard();
            console.log(blueStrtPos1);
            console.log(blueStrtPos2);

            //remove spotter on all seeds after playerTurn
            $("td").each(function (index) {
                $("." + index).children().remove();
            });
        }
    });
});