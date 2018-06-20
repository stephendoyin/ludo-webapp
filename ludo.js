$(document).ready(function () {
    let bluePlay = 0;
    //get btn
    let btn = $("#btn");

    //initialize dice to 1
    let currentDiceNumber = 0;

    //get dice face from the dom
    let diceFace = document.getElementById("dice-face1");

    //path to the faces of the dice
    let allDiceFaces = ["img/diceface.jpg", "img/diceface1.jpg", "img/diceface2.jpg", "img/diceface3.jpg", "img/diceface4.jpg", "img/diceface5.jpg", "img/diceface6.jpg"];

    //get the a random number
    function rollDice() {
        currentDiceNumber = Math.floor((Math.random() * 6) + 1);
        console.log(currentDiceNumber);
        diceFace.src = allDiceFaces[currentDiceNumber];
        setSeedOnBoard();
        playerTurn();
    }

    //REfresh game 
    $(".refresh").on("click", function () {
        location.reload();
    });

    //blueseed path
    var blueSeedPath = [1, 2, 8, 9, 25, 26, 27, 28, 29, 21, 18, 15, 10, 3, 4, 5, 12, 17, 20, 23, 31, 32, 33, 34, 35, 36, 49, 62, 61, 60, 59, 58, 57, 65, 68, 71, 76, 83, 82, 81, 74, 69, 66, 63, 55, 54, 53, 52, 51, 50, 37, 38, 39, 40, 41, 42, 43, 100, 200, 300, 400, 500, 600];
    //redseed path
    var redSeedPath = [85, 84, 78, 77, 61, 60, 59, 58, 57, 65, 68, 71, 76, 83, 82, 81, 74, 69, 66, 63, 55, 54, 53, 52, 51, 50, 37, 24, 25, 26, 27, 28, 29, 21, 18, 15, 10, 3, 4, 5, 12, 17, 20, 23, 31, 32, 33, 34, 35, 36, 49, 48, 47, 46, 45, 44, 43, 100, 200, 300, 400, 500, 600];
    //yellowseed path
    var yellowSeedPath = [79, 80, 72, 73, 74, 69, 66, 63, 55, 54, 53, 52, 51, 50, 37, 24, 25, 26, 27, 28, 29, 21, 18, 15, 10, 3, 4, 5, 12, 17, 20, 23, 31, 32, 33, 34, 35, 36, 49, 62, 61, 60, 59, 58, 57, 65, 68, 71, 76, 83, 82, 75, 70, 67, 64, 56, 43, 100, 200, 300, 400, 500, 600];
    //greensee path
    var greenSeedPath = [6, 7, 13, 14, 12, 17, 20, 23, 31, 32, 33, 34, 35, 36, 49, 62, 61, 60, 59, 58, 57, 65, 68, 71, 76, 83, 82, 81, 74, 69, 66, 63, 55, 54, 53, 52, 51, 50, 37, 24, 25, 26, 27, 28, 29, 21, 18, 15, 10, 3, 4, 11, 16, 19, 22, 30, 43, 100, 200, 300, 400, 500, 600];

    //initial positions for blue-seed
    var bluePos1 = blueSeedPath[0];
    var bluePos2 = blueSeedPath[1];
    var bluePos3 = blueSeedPath[2];
    var bluePos4 = blueSeedPath[3];


    //initial positions for red-seed
    var redPos1 = redSeedPath[0];
    var redPos2 = redSeedPath[1];
    var redPos3 = redSeedPath[2];
    var redPos4 = redSeedPath[3];

    //initial positions for yellow-seed
    var yellowPos1 = yellowSeedPath[0];
    var yellowPos2 = yellowSeedPath[1];
    var yellowPos3 = yellowSeedPath[2];
    var yellowPos4 = yellowSeedPath[3];

    //initial positions for green-seed
    var greenPos1 = greenSeedPath[0];
    var greenPos2 = greenSeedPath[1];
    var greenPos3 = greenSeedPath[2];
    var greenPos4 = greenSeedPath[3];


    //set seed on positions required
    function setSeedOnBoard() {

        // arrange blue seeds to current position
        $("td").each(function (index) {
            if (index === bluePos1 || index === bluePos2 || index === bluePos3 || index === bluePos4) {
                $("." + index).addClass("blue-seed");
            }
        });

        //arrange red seeds to current position
        $("td").each(function (index) {
            if (index === redPos1 || index === redPos2 || index === redPos3 || index === redPos4) {
                $("." + index).addClass("red-seed");
            }
        });

        //arrange yellow seeds to current position
        $("td").each(function (index) {
            if (index === yellowPos1 || index === yellowPos2 || index === yellowPos3 || index === yellowPos4) {
                $("." + index).addClass("yellow-seed");
            }
        });

        //arrange green seeds to current position
        $("td").each(function (index) {
            if (index === greenPos1 || index === greenPos2 || index === greenPos3 || index === greenPos4) {
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

        if (turn === "blueandred") {
            if (currentDiceNumber !== 6)
                turn = "greenandyellow";
            setSpotterForBnR();
        } else {
            if (currentDiceNumber !== 6)
                turn = "blueandred";
            setSpotterForGnY();
        }
    }


    //move arrow to indicate player turn
    function checkTurn(){
        if(turn === "blueandred"){
            $(".icon1").addClass("dropup");
            $(".icon2").removeClass("dropup");
        } else {
            $(".icon1").removeClass("dropup");
            $(".icon2").addClass("dropup");
        }
    }
    //show spotter on blue and red seed to allow playerTurner to see movable seed
    function setSpotterForBnR() {
        checkTurn();
        if (currentDiceNumber === 6) {
            $("td").each(function (index) {
                if (index === bluePos1 || index === bluePos2 || index === bluePos3 || index === bluePos4) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === bluePos1 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === bluePos2 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === bluePos3 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === bluePos4 && index !== 2 && index !== 1 && index !== 8 && index !== 9)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if (index === redPos1 || index === redPos2 || index === redPos3 || index === redPos4) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === redPos1 && index !== 85 && index !== 84 && index !== 78 && index !== 77) || (index === redPos2 && index !== 85 && index !== 84 && index !== 78 && index !== 77) || (index === redPos3 && index !== 84 && index !== 85 && index !== 78 && index !== 77) || (index === redPos4 && index !== 84 && index !== 85 && index !== 78 && index !== 77)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });


        } else {
            $("td").each(function (index) {
                if ((index === bluePos1 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === bluePos2 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === bluePos3 && index !== 2 && index !== 1 && index !== 8 && index !== 9) || (index === bluePos4 && index !== 2 && index !== 1 && index !== 8 && index !== 9)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === redPos1 && index !== 85 && index !== 84 && index !== 78 && index !== 77) || (index === redPos2 && index !== 85 && index !== 84 && index !== 78 && index !== 77) || (index === redPos3 && index !== 84 && index !== 85 && index !== 78 && index !== 77) || (index === redPos4 && index !== 84 && index !== 85 && index !== 78 && index !== 77)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });
        }
    }


    //show spotter on blue and red seed to allow playerTurner to see movable seed
    function setSpotterForGnY() {
//move arrow to indicate player turn
        checkTurn();
        if (currentDiceNumber === 6) {
            $("td").each(function (index) {
                if (index === yellowPos1 || index === yellowPos2 || index === yellowPos3 || index === yellowPos4) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === yellowPos1 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowPos2 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowPos3 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowPos4 && index !== 79 && index !== 80 && index !== 72 && index !== 73)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if (index === greenPos1 || index === greenPos2 || index === greenPos3 || index === greenPos4) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === greenPos1 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenPos2 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenPos3 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenPos4 && index !== 6 && index !== 7 && index !== 13 && index !== 14)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });


        } else {
            $("td").each(function (index) {
                if ((index === yellowPos1 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowPos2 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowPos3 && index !== 79 && index !== 80 && index !== 72 && index !== 73) || (index === yellowPos4 && index !== 79 && index !== 80 && index !== 72 && index !== 73)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });

            $("td").each(function (index) {
                if ((index === greenPos1 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenPos2 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenPos3 && index !== 6 && index !== 7 && index !== 13 && index !== 14) || (index === greenPos4 && index !== 6 && index !== 7 && index !== 13 && index !== 14)) {
                    $("." + index).html("<img src='img/spotter.gif'>");
                }
            });
        }
    }

    function blueMvAnimation(i, seed, rmv) {

        setTimeout(function () {
            console.log(seed);
            $("." + seed).addClass("blue-seed");
            $("." + rmv).removeClass("blue-seed");
            if (bluePos1 === rmv || bluePos2 === rmv || bluePos3 === rmv || bluePos4 === rmv)
                $("." + rmv).addClass("blue-seed");
        }, 400 * i);

    }

    function redMvAnimation(i, seed, rmv) {

        setTimeout(function () {
            console.log(seed);
            $("." + seed).addClass("red-seed");
            $("." + rmv).removeClass("red-seed");
            if (redPos1 === rmv || redPos2 === rmv || redPos3 === rmv || redPos4 === rmv)
                $("." + rmv).addClass("red-seed");
        }, 400 * i);

    }

    function yellowMvAnimation(i, seed, rmv) {

        setTimeout(function () {
            console.log(seed);
            $("." + seed).addClass("yellow-seed");
            $("." + rmv).removeClass("yellow-seed");
            if (yellowPos1 === rmv || yellowPos2 === rmv || yellowPos3 === rmv || yellowPos4 === rmv)
                $("." + rmv).addClass("yellow-seed");
        }, 400 * i);

    }

    function greenMvAnimation(i, seed, rmv) {

        setTimeout(function () {
            console.log(seed);
            $("." + seed).addClass("green-seed");
            $("." + rmv).removeClass("green-seed");
            if (greenPos1 === rmv || greenPos2 === rmv || greenPos3 === rmv || greenPos4 === rmv)
                $("." + rmv).addClass("green-seed");
        }, 400 * i);

    }

    
    //click event that uses jquery delegation
    $("table").on("click", "td", function (event) {
        let target = $(event.target);
        if (target.is("img")) {
            console.log(target.parent().attr("class").split(" ")[0]);
            targetClass = Number(target.parent().attr("class").split(" ")[0]);
            for (var k = 4; k < blueSeedPath.length; k++) {
                if (target.parent().hasClass("blue-seed")) {
                    switch (targetClass) {
                        case bluePos1:
                            if ((blueSeedPath[k] === bluePos1) && (!(blueSeedPath[k + currentDiceNumber] === 100 || blueSeedPath[k + currentDiceNumber] === 200 || blueSeedPath[k + currentDiceNumber] === 300 || blueSeedPath[k + currentDiceNumber] === 400 || blueSeedPath[k + currentDiceNumber] === 500 || blueSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = bluePos1;
                                    bluePos1 = blueSeedPath[k += 1];
                                    blueMvAnimation(i, bluePos1, reduction);
                                }
                            }
                            break;
                        case bluePos2:
                            if ((blueSeedPath[k] === bluePos2) && (!(blueSeedPath[k + currentDiceNumber] === 100 || blueSeedPath[k + currentDiceNumber] === 200 || blueSeedPath[k + currentDiceNumber] === 300 || blueSeedPath[k + currentDiceNumber] === 400 || blueSeedPath[k + currentDiceNumber] === 500 || blueSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = bluePos2;
                                    bluePos2 = blueSeedPath[k += 1];
                                    blueMvAnimation(i, bluePos2, reduction);
                                }
                            }
                            break;
                        case bluePos3:
                            if ((blueSeedPath[k] === bluePos3) && (!(blueSeedPath[k + currentDiceNumber] === 100 || blueSeedPath[k + currentDiceNumber] === 200 || blueSeedPath[k + currentDiceNumber] === 300 || blueSeedPath[k + currentDiceNumber] === 400 || blueSeedPath[k + currentDiceNumber] === 500 || blueSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = bluePos3;
                                    bluePos3 = blueSeedPath[k += 1];
                                    blueMvAnimation(i, bluePos3, reduction);
                                }
                            }
                            break;
                        case bluePos4:
                            if ((blueSeedPath[k] === bluePos4) && (!(blueSeedPath[k + currentDiceNumber] === 100 || blueSeedPath[k + currentDiceNumber] === 200 || blueSeedPath[k + currentDiceNumber] === 300 || blueSeedPath[k + currentDiceNumber] === 400 || blueSeedPath[k + currentDiceNumber] === 500 || blueSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = bluePos4;
                                    bluePos4 = blueSeedPath[k += 1];
                                    blueMvAnimation(i, bluePos4, reduction);
                                }
                            }
                            break;
                    }
                } else if (target.parent().hasClass("red-seed")) {
                    switch (targetClass) {
                        case redPos1:
                            if ((redSeedPath[k] === redPos1) && (!(redSeedPath[k + currentDiceNumber] === 100 || redSeedPath[k + currentDiceNumber] === 200 || redSeedPath[k + currentDiceNumber] === 300 || redSeedPath[k + currentDiceNumber] === 400 || redSeedPath[k + currentDiceNumber] === 500 || redSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = redPos1;
                                    redPos1 = redSeedPath[k += 1];
                                    redMvAnimation(i, redPos1, reduction);
                                }
                            }
                            break;
                        case redPos2:
                            if ((redSeedPath[k] === redPos2) && (!(redSeedPath[k + currentDiceNumber] === 100 || redSeedPath[k + currentDiceNumber] === 200 || redSeedPath[k + currentDiceNumber] === 300 || redSeedPath[k + currentDiceNumber] === 400 || redSeedPath[k + currentDiceNumber] === 500 || redSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = redPos2;
                                    redPos2 = redSeedPath[k += 1];
                                    redMvAnimation(i, redPos2, reduction);
                                }
                            }
                            break;
                        case redPos3:
                            if ((redSeedPath[k] === redPos3) && (!(redSeedPath[k + currentDiceNumber] === 100 || redSeedPath[k + currentDiceNumber] === 200 || redSeedPath[k + currentDiceNumber] === 300 || redSeedPath[k + currentDiceNumber] === 400 || redSeedPath[k + currentDiceNumber] === 500 || redSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = redPos3;
                                    redPos3 = redSeedPath[k += 1];
                                    redMvAnimation(i, redPos3, reduction);
                                }
                            }
                            break;
                        case redPos4:
                            if ((redSeedPath[k] === redPos4) && (!(redSeedPath[k + currentDiceNumber] === 100 || redSeedPath[k + currentDiceNumber] === 200 || redSeedPath[k + currentDiceNumber] === 300 || redSeedPath[k + currentDiceNumber] === 400 || redSeedPath[k + currentDiceNumber] === 500 || redSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = redPos4;
                                    redPos4 = redSeedPath[k += 1];
                                    redMvAnimation(i, redPos4, reduction);
                                }
                            }
                            break;
                    }
                } else if (target.parent().hasClass("yellow-seed")) {
                    switch (targetClass) {
                        case yellowPos1:
                            if ((yellowSeedPath[k] === yellowPos1) && (!(yellowSeedPath[k + currentDiceNumber] === 100 || yellowSeedPath[k + currentDiceNumber] === 200 || yellowSeedPath[k + currentDiceNumber] === 300 || yellowSeedPath[k + currentDiceNumber] === 400 || yellowSeedPath[k + currentDiceNumber] === 500 || yellowSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = yellowPos1;
                                    yellowPos1 = yellowSeedPath[k += 1];
                                    yellowMvAnimation(i, yellowPos1, reduction);
                                }
                            }
                            break;
                        case yellowPos2:
                            if ((yellowSeedPath[k] === yellowPos2) && (!(yellowSeedPath[k + currentDiceNumber] === 100 || yellowSeedPath[k + currentDiceNumber] === 200 || yellowSeedPath[k + currentDiceNumber] === 300 || yellowSeedPath[k + currentDiceNumber] === 400 || yellowSeedPath[k + currentDiceNumber] === 500 || yellowSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = yellowPos2;
                                    yellowPos2 = yellowSeedPath[k += 1];
                                    yellowMvAnimation(i, yellowPos2, reduction);
                                }
                            }
                            break;
                        case yellowPos3:
                            if ((yellowSeedPath[k] === yellowPos3) && (!(yellowSeedPath[k + currentDiceNumber] === 100 || yellowSeedPath[k + currentDiceNumber] === 200 || yellowSeedPath[k + currentDiceNumber] === 300 || yellowSeedPath[k + currentDiceNumber] === 400 || yellowSeedPath[k + currentDiceNumber] === 500 || yellowSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = yellowPos3;
                                    yellowPos3 = yellowSeedPath[k += 1];
                                    yellowMvAnimation(i, yellowPos3, reduction);
                                }
                            }
                            break;
                        case yellowPos4:
                            if ((yellowSeedPath[k] === yellowPos4) && (!(yellowSeedPath[k + currentDiceNumber] === 100 || yellowSeedPath[k + currentDiceNumber] === 200 || yellowSeedPath[k + currentDiceNumber] === 300 || yellowSeedPath[k + currentDiceNumber] === 400 || yellowSeedPath[k + currentDiceNumber] === 500 || yellowSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = yellowPos4;
                                    yellowPos4 = yellowSeedPath[k += 1];
                                    yellowMvAnimation(i, yellowPos4, reduction);
                                }
                            }
                            break;
                    }
                } else if (target.parent().hasClass("green-seed")){
                    switch (targetClass) {
                        case greenPos1:
                            if ((greenSeedPath[k] === greenPos1) && (!(greenSeedPath[k + currentDiceNumber] === 100 || greenSeedPath[k + currentDiceNumber] === 200 || greenSeedPath[k + currentDiceNumber] === 300 || greenSeedPath[k + currentDiceNumber] === 400 || greenSeedPath[k + currentDiceNumber] === 500 || greenSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = greenPos1;
                                    greenPos1 = greenSeedPath[k += 1];
                                    greenMvAnimation(i, greenPos1, reduction);
                                }
                            }
                            break;
                        case greenPos2:
                            if ((greenSeedPath[k] === greenPos2) && (!(greenSeedPath[k + currentDiceNumber] === 100 || greenSeedPath[k + currentDiceNumber] === 200 || greenSeedPath[k + currentDiceNumber] === 300 || greenSeedPath[k + currentDiceNumber] === 400 || greenSeedPath[k + currentDiceNumber] === 500 || greenSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = greenPos2;
                                    greenPos2 = greenSeedPath[k += 1];
                                    greenMvAnimation(i, greenPos2, reduction);
                                }
                            }
                            break;
                        case greenPos3:
                            if ((greenSeedPath[k] === greenPos3) && (!(greenSeedPath[k + currentDiceNumber] === 100 || greenSeedPath[k + currentDiceNumber] === 200 || greenSeedPath[k + currentDiceNumber] === 300 || greenSeedPath[k + currentDiceNumber] === 400 || greenSeedPath[k + currentDiceNumber] === 500 || greenSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = greenPos3;
                                    greenPos3 = greenSeedPath[k += 1];
                                    greenMvAnimation(i, greenPos3, reduction);
                                }
                            }
                            break;
                        case greenPos4:
                            if ((greenSeedPath[k] === greenPos4) && (!(greenSeedPath[k + currentDiceNumber] === 100 || greenSeedPath[k + currentDiceNumber] === 200 || greenSeedPath[k + currentDiceNumber] === 300 || greenSeedPath[k + currentDiceNumber] === 400 || greenSeedPath[k + currentDiceNumber] === 500 || greenSeedPath[k + currentDiceNumber] === 600))) {
                                for (let i = 1; i <= currentDiceNumber; i++) {
                                    let reduction = greenPos4;
                                    greenPos4 = greenSeedPath[k += 1];
                                    greenMvAnimation(i, greenPos4, reduction);
                                }
                            }
                            break;
                    }
                }

            }
            

            //if seed has 6 and it's at opening position, call out (for blue)
            if (target.parent().hasClass("1")) {
                target.parent().removeClass("blue-seed");
                bluePos1 = 25;
                setSeedOnBoard();
            } else if (target.parent().hasClass("2")) {
                target.parent().removeClass("blue-seed");
                bluePos2 = 25;
                setSeedOnBoard();
            } else if (target.parent().hasClass("8")) {
                target.parent().removeClass("blue-seed");
                bluePos3 = 25;
                setSeedOnBoard();
            } else if (target.parent().hasClass("9")) {
                target.parent().removeClass("blue-seed");
                bluePos4 = 25;
                setSeedOnBoard();
            }

            //if seed has 6 and it's at opening position, call out (for red seed)
            if (target.parent().hasClass("85")) {
                target.parent().removeClass("red-seed");
                redPos1 = 61;
                setSeedOnBoard();
            } else if (target.parent().hasClass("84")) {
                target.parent().removeClass("red-seed");
                redPos2 = 61;
                setSeedOnBoard();
            } else if (target.parent().hasClass("78")) {
                target.parent().removeClass("red-seed");
                redPos3 = 61;
                setSeedOnBoard();
            } else if (target.parent().hasClass("77")) {
                target.parent().removeClass("red-seed");
                redPos4 = 61;
                setSeedOnBoard();
            }

            //if seed has 6 and it's at opening position, call out (for yellow seed)
            if (target.parent().hasClass("79")) {
                target.parent().removeClass("yellow-seed");
                yellowPos1 = 74;
                setSeedOnBoard();
            } else if (target.parent().hasClass("80")) {
                target.parent().removeClass("yellow-seed");
                yellowPos2 = 74;
                setSeedOnBoard();
            } else if (target.parent().hasClass("72")) {
                target.parent().removeClass("yellow-seed");
                yellowPos3 = 74;
                setSeedOnBoard();
            } else if (target.parent().hasClass("73")) {
                target.parent().removeClass("yellow-seed");
                yellowPos4 = 74;
                setSeedOnBoard();
            }

            //if seed has 6 and it's at opening position, call out (for green seed)
            if (target.parent().hasClass("6")) {
                target.parent().removeClass("green-seed");
                greenPos1 = 12;
                setSeedOnBoard();
            } else if (target.parent().hasClass("7")) {
                target.parent().removeClass("green-seed");
                greenPos2 = 12;
                setSeedOnBoard();
            } else if (target.parent().hasClass("13")) {
                target.parent().removeClass("green-seed");
                greenPos3 = 12;
                setSeedOnBoard();
            } else if (target.parent().hasClass("14")) {
                target.parent().removeClass("green-seed");
                greenPos4 = 12;
                setSeedOnBoard();
            }


            // //elimination code

            let bluePos = [bluePos1, bluePos2, bluePos3, bluePos4];
            let redPos = [redPos1, redPos2, redPos3, redPos4];
            let greenPos = [greenPos1, greenPos2, greenPos3, greenPos4];
            let yellowPos = [yellowPos1, yellowPos2, yellowPos3, yellowPos4];
            if (target.parent().hasClass("blue-seed") || target.parent().hasClass("red-seed")) {
                for (var n = 0; n < 4; n++) {
                    for (var p = 0; p < 4; p++) {
                        if ((bluePos[n] === greenPos[p] || redPos[n] === greenPos[p]) && (greenPos[p] !== 43 )) {
                            console.log("same kill green at position" + greenPos[p]);
                            switch (p) {
                                case 0:
                                    $("." + greenPos[0]).removeClass("green-seed");
                                    greenPos1 = greenSeedPath[0];
                                    $("." + greenPos1).addClass("green-seed");
                                    break;
                                case 1:
                                    $("." + greenPos[1]).removeClass("green-seed");
                                    greenPos2 = greenSeedPath[1];
                                    $("." + greenPos2).addClass("green-seed");
                                    break;
                                case 2:
                                    $("." + greenPos[2]).removeClass("green-seed");
                                    greenPos3 = greenSeedPath[2];
                                    $("." + greenPos3).addClass("green-seed");
                                    break;
                                case 3:
                                    $("." + greenPos[3]).removeClass("green-seed");
                                    greenPos4 = greenSeedPath[3];
                                    $("." + greenPos4).addClass("green-seed");
                                    break;
                            }
                        } else if ((bluePos[n] === yellowPos[p] || redPos[n] === yellowPos[p]) && (yellowPos[p] !== 43 )) {
                            console.log("same kill yellow at position" + yellowPos[p]);
                            switch (p) {
                                case 0:
                                    $("." + yellowPos[0]).removeClass("yellow-seed");
                                    yellowPos1 = yellowSeedPath[0];
                                    $("." + yellowPos1).addClass("yellow-seed");
                                    break;
                                case 1:
                                    $("." + yellowPos[1]).removeClass("yellow-seed");
                                    yellowPos2 = yellowSeedPath[1];
                                    $("." + yellowPos2).addClass("yellow-seed");
                                    break;
                                case 2:
                                    $("." + yellowPos[2]).removeClass("yellow-seed");
                                    yellowPos3 = yellowSeedPath[2];
                                    $("." + yellowPos3).addClass("yellow-seed");
                                    break;
                                case 3:
                                    $("." + yellowPos[3]).removeClass("yellow-seed");
                                    yellowPos4 = yellowSeedPath[3];
                                    $("." + yellowPos4).addClass("yellow-seed");
                                    break;
                            }
                        }
                    }
                }
                console.log("i answered");
            } else if (target.parent().hasClass("green-seed") || target.parent().hasClass("yellow-seed")) {
                for (var n = 0; n < 4; n++) {
                    for (var p = 0; p < 4; p++) {
                        if ((yellowPos[n] === bluePos[p] || greenPos[n] === bluePos[p]) && (bluePos[p] !== 43 )) {
                            switch (p) {
                                case 0:
                                    $("." + bluePos[0]).removeClass("blue-seed");
                                    bluePos1 = blueSeedPath[0];
                                    $("." + bluePos1).addClass("blue-seed");
                                    break;
                                case 1:
                                    $("." + bluePos[1]).removeClass("blue-seed");
                                    bluePos2 = blueSeedPath[1];
                                    $("." + bluePos2).addClass("blue-seed");
                                    break;
                                case 2:
                                    $("." + bluePos[2]).removeClass("blue-seed");
                                    bluePos3 = blueSeedPath[2];
                                    $("." + bluePos3).addClass("blue-seed");
                                    break;
                                case 3:
                                    $("." + bluePos[3]).removeClass("blue-seed");
                                    bluePos4 = blueSeedPath[3];
                                    $("." + bluePos4).addClass("blue-seed");
                                    break;
                            }
                            console.log("same kill blue at position" + bluePos[p]);
                        } else if ((yellowPos[n] === redPos[p] || greenPos[n] === redPos[p]) && (redPos[p] !== 43 )) {
                            switch (p) {
                                case 0:
                                    $("." + redPos[0]).removeClass("red-seed");
                                    redPos1 = redSeedPath[0];
                                    $("." + redPos1).addClass("red-seed");
                                    break;
                                case 1:
                                    $("." + redPos[1]).removeClass("red-seed");
                                    redPos2 = redSeedPath[1];
                                    $("." + redPos2).addClass("red-seed");
                                    break;
                                case 2:
                                    $("." + redPos[2]).removeClass("red-seed");
                                    redPos3 = redSeedPath[2];
                                    $("." + redPos3).addClass("red-seed");
                                    break;
                                case 3:
                                    $("." + redPos[3]).removeClass("red-seed");
                                    redPos4 = redSeedPath[3];
                                    $("." + redPos4).addClass("red-seed");
                                    break;
                            }
                            console.log("same kill red at position" + redPos[p]);
                        }
                    }
                }
                console.log("i also answered");
            }



            //remove added dice number if the bluepath doesn't exist
            console.log(bluePos3);
            // target.parent().removeClass("blue-seed");
            // target.parent().removeClass("red-seed");
            // target.parent().removeClass("yellow-seed");
            // target.parent().removeClass("green-seed");

            //remove spotter on all seeds after playerTurn
            $("td").each(function (index) {
                $("." + index).children().remove();
            });

            //call the setseed function to rearrange blue and red seeds on position

            //check who wins
            if(bluePos1 === 43 && bluePos2 === 43 && bluePos3 === 43 && bluePos4 === 43 && redPos1 === 43 && redPos2 === 43 && redPos3 === 43 && redPos4 === 43 ){
                $(".game-msg").html("<h1>Player 1 Wins!</h1><h1>Game Over</h1>");
            } else if(greenPos1 === 43 && greenPos2 === 43 && greenPos3 === 43 && greenPos4 === 43 && yellowPos1 === 43 && yellowPos2 === 43 && yellowPos3 === 43 && yellowPos4 === 43 ){
                $(".game-msg").html("<h1>Player 2 Wins!</h1><h1>Game Over</h1>");
            }

            console.log(blueSeedPath.length)
        }
    });
});


