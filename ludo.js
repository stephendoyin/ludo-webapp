$(document).ready(function(){
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
        currentDiceNumber = 6;//Math.floor((Math.random() * 6) + 1);
        console.log(currentDiceNumber);
        diceFace.src = allDiceFaces[currentDiceNumber];
        setSeedOnBoard();
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
    var bluePos1 = blueSeedPath[0];
    var bluePos2 = blueSeedPath[1];
    var bluePos3 = blueSeedPath[2];
    var bluePos4 = blueSeedPath[3];


    //initial positions for red-seed
    var redPos1 = redSeedPath[10];
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

    //show spotter on blue and red seed to allow playerTurner to see movable seed
    function setSpotterForBnR() {

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

    function blueMvAnimation(i, seed, rmv){
        
        setTimeout(function(){
            console.log(seed)
            $("."+seed).addClass("blue-seed");
            $("."+rmv).removeClass("blue-seed");
            if(bluePos1 === rmv || bluePos2 === rmv || bluePos3 === rmv || bluePos4 === rmv)
            $("."+rmv).addClass("blue-seed");
        }, 400 * i);
    }

    function redMvAnimation(i, seed, rmv){
        
        setTimeout(function(){
            console.log(seed)
            $("."+seed).addClass("red-seed");
            $("."+rmv).removeClass("red-seed");
            if(redPos1 === rmv || redPos2 === rmv || redPos3 === rmv || redPos4 === rmv)
            $("."+rmv).addClass("red-seed");
        }, 400 * i);
        
    }

    // function redMvAnimation(i, seed, rmv){
        
    //     setTimeout(function(){
    //         console.log(seed)
    //         $("."+seed).addClass("red-seed");
    //         $("."+rmv).removeClass("red-seed");
    //         if(redPos1 === rmv || redPos2 === rmv || redPos3 === rmv || redPos4 === rmv)
    //         $("."+rmv).addClass("red-seed");
    //     }, 400 * i);
    // }

    //click event that uses jquery delegation
    $("table").on("click", "td", function (event) {
        console.log(turn);
        let target = $(event.target);
        if (target.is("img")) {
            console.log(target.parent().attr("class").split(" ")[0]);
            targetClass = Number(target.parent().attr("class").split(" ")[0]);
            for (var k = 4; k < blueSeedPath.length; k++) {
                if (target.parent().hasClass("blue-seed")) {
                    switch (targetClass) {
                        case bluePos1:
                            if (blueSeedPath[k] === bluePos1){
                                for(let i = 1; i <= currentDiceNumber; i++){
                                    let reduction = bluePos1;
                                    bluePos1 = blueSeedPath[k+=1];
                                    blueMvAnimation(i, bluePos1, reduction);
                                }
                            }
                            break;
                        case bluePos2:
                            if (blueSeedPath[k] === bluePos2){
                                for(let i = 1; i <= currentDiceNumber; i++){
                                    let reduction = bluePos2;
                                    bluePos2 = blueSeedPath[k+=1];
                                    blueMvAnimation(i, bluePos2, reduction);
                                }
                            }
                            break;
                        case bluePos3:
                            if (blueSeedPath[k] === bluePos3){
                                for(let i = 1; i <= currentDiceNumber; i++){
                                    let reduction = bluePos3;
                                    bluePos3 = blueSeedPath[k+=1];
                                    blueMvAnimation(i, bluePos3, reduction);
                                }
                            }
                            break;
                        case bluePos4:
                            if (blueSeedPath[k] === bluePos4){
                                for(let i = 1; i <= currentDiceNumber; i++){
                                    let reduction = bluePos4;
                                    bluePos4 = blueSeedPath[k+=1];
                                    blueMvAnimation(i, bluePos4, reduction);
                                }
                            }
                            break;
                    }
                } else if (target.parent().hasClass("red-seed")) {
                    switch (targetClass) {
                        case redPos1:
                            if (redSeedPath[k] === redPos1){
                                for(let i = 1; i <= currentDiceNumber; i++){
                                    let reduction = redPos1;
                                    redPos1 = redSeedPath[k+=1];
                                    redMvAnimation(i, redPos1, reduction);
                                }
                            }
                            break;
                        case redPos2:
                        if (redSeedPath[k] === redPos2){
                                for(let i = 1; i <= currentDiceNumber; i++){
                                    let reduction = redPos2;
                                    redPos2 = redSeedPath[k+=1];
                                    redMvAnimation(i, redPos2, reduction);
                                }
                            }
                            break;
                        case redPos3:
                            if (redSeedPath[k] === redPos3){
                                for(let i = 1; i <= currentDiceNumber; i++){
                                    let reduction = redPos3;
                                    redPos3 = redSeedPath[k+=1];
                                    redMvAnimation(i, redPos3, reduction);
                                }
                            }
                            break;
                        case redPos4:
                            if (redSeedPath[k] === redPos4){
                                for(let i = 1; i <= currentDiceNumber; i++){
                                    let reduction = redPos4;
                                    redPos4 = redSeedPath[k+=1];
                                    redMvAnimation(i, redPos4, reduction);
                                }
                            }
                            break;
                    }
                } else if (target.parent().hasClass("yellow-seed")) {
                    switch (targetClass) {
                        case yellowPos1:
                            if (yellowSeedPath[k] === yellowPos1)
                                yellowPos1 = yellowSeedPath[k + currentDiceNumber];
                            break;
                        case yellowPos2:
                            if (yellowSeedPath[k] === yellowPos2)
                                yellowPos2 = yellowSeedPath[k + currentDiceNumber];
                            break;
                        case yellowPos3:
                            if (yellowSeedPath[k] === yellowPos3)
                                yellowPos3 = yellowSeedPath[k + currentDiceNumber];
                            break;
                        case yellowPos4:
                            if (yellowSeedPath[k] === yellowPos4)
                                yellowPos4 = yellowSeedPath[k + currentDiceNumber];
                            break;
                    }
                } else {
                    switch (targetClass) {
                        case greenPos1:
                            if (greenSeedPath[k] === greenPos1)
                                greenPos1 = greenSeedPath[k + currentDiceNumber];
                            break;
                        case greenPos2:
                            if (greenSeedPath[k] === greenPos2)
                                greenPos2 = greenSeedPath[k + currentDiceNumber];
                            break;
                        case greenPos3:
                            if (greenSeedPath[k] === greenPos3)
                                greenPos3 = greenSeedPath[k + currentDiceNumber];
                            break;
                        case greenPos4:
                            if (greenSeedPath[k] === greenPos4)
                                greenPos4 = greenSeedPath[k + currentDiceNumber];
                            break;
                    }
                }

            }
            //check if seed is close to home 
            for (var a = 0; a < blueSeedPath.length; a++) {

                if (bluePos1 === blueSeedPath[a] && (bluePos1 === 100 || bluePos1 === 200 || bluePos1 === 300 || bluePos1 === 400 || bluePos1 === 500 || bluePos1 === 600)) {
                    bluePos1 = blueSeedPath[a - currentDiceNumber];
                }
                if (bluePos2 === blueSeedPath[a] && (bluePos2 === 100 || bluePos2 === 200 || bluePos2 === 300 || bluePos2 === 400 || bluePos2 === 500 || bluePos2 === 600)) {
                    bluePos2 = blueSeedPath[a - currentDiceNumber];
                }
                if (bluePos3 === blueSeedPath[a] && (bluePos3 === 100 || bluePos3 === 200 || bluePos3 === 300 || bluePos3 === 400 || bluePos3 === 500 || bluePos3 === 600)) {
                    bluePos3 = blueSeedPath[a - currentDiceNumber];
                }
                if (bluePos4 === blueSeedPath[a] && (bluePos4 === 100 || bluePos4 === 200 || bluePos4 === 300 || bluePos4 === 400 || bluePos4 === 500 || bluePos4 === 600)) {
                    bluePos4 = blueSeedPath[a - currentDiceNumber];
                }

                if (redPos1 === redSeedPath[a] && (redPos1 === 100 || redPos1 === 200 || redPos1 === 300 || redPos1 === 400 || redPos1 === 500 || redPos1 === 600)) {
                    redPos1 = redSeedPath[a - currentDiceNumber];
                }
                if (redPos2 === redSeedPath[a] && (redPos2 === 100 || redPos2 === 200 || redPos2 === 300 || redPos2 === 400 || redPos2 === 500 || redPos2 === 600)) {
                    redPos2 = redSeedPath[a - currentDiceNumber];
                }
                if (redPos3 === redSeedPath[a] && (redPos3 === 100 || redPos3 === 200 || redPos3 === 300 || redPos3 === 400 || redPos3 === 500 || redPos3 === 600)) {
                    redPos3 = redSeedPath[a - currentDiceNumber];
                }
                if (redPos4 === redSeedPath[a] && (redPos4 === 100 || redPos4 === 200 || redPos4 === 300 || redPos4 === 400 || redPos4 === 500 || redPos4 === 600)) {
                    redPos4 = redSeedPath[a - currentDiceNumber];
                }

                if (yellowPos1 === yellowSeedPath[a] && (yellowPos1 === 100 || yellowPos1 === 200 || yellowPos1 === 300 || yellowPos1 === 400 || yellowPos1 === 500 || yellowPos1 === 600)) {
                    yellowPos1 = yellowSeedPath[a - currentDiceNumber];
                }
                if (yellowPos2 === yellowSeedPath[a] && (yellowPos2 === 100 || yellowPos2 === 200 || yellowPos2 === 300 || yellowPos2 === 400 || yellowPos2 === 500 || yellowPos2 === 600)) {
                    yellowPos2 = yellowSeedPath[a - currentDiceNumber];
                }
                if (yellowPos3 === yellowSeedPath[a] && (yellowPos3 === 100 || yellowPos3 === 200 || yellowPos3 === 300 || yellowPos3 === 400 || yellowPos3 === 500 || yellowPos3 === 600)) {
                    yellowPos3 = yellowSeedPath[a - currentDiceNumber];
                }
                if (yellowPos4 === yellowSeedPath[a] && (yellowPos4 === 100 || yellowPos4 === 200 || yellowPos4 === 300 || yellowPos4 === 400 || yellowPos4 === 500 || yellowPos4 === 600)) {
                    yellowPos4 = yellowSeedPath[a - currentDiceNumber];
                }

                if (greenPos1 === greenSeedPath[a] && (greenPos1 === 100 || greenPos1 === 200 || greenPos1 === 300 || greenPos1 === 400 || greenPos1 === 500 || greenPos1 === 600)) {
                    greenPos1 = greenSeedPath[a - currentDiceNumber];
                }
                if (greenPos2 === greenSeedPath[a] && (greenPos2 === 100 || greenPos2 === 200 || greenPos2 === 300 || greenPos2 === 400 || greenPos2 === 500 || greenPos2 === 600)) {
                    greenPos2 = greenSeedPath[a - currentDiceNumber];
                }
                if (greenPos3 === greenSeedPath[a] && (greenPos3 === 100 || greenPos3 === 200 || greenPos3 === 300 || greenPos3 === 400 || greenPos3 === 500 || greenPos3 === 600)) {
                    greenPos3 = greenSeedPath[a - currentDiceNumber];
                }
                if (greenPos4 === greenSeedPath[a] && (greenPos4 === 100 || greenPos4 === 200 || greenPos4 === 300 || greenPos4 === 400 || greenPos4 === 500 || greenPos4 === 600)) {
                    greenPos4 = greenSeedPath[a - currentDiceNumber];
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
                        if (bluePos[n] === greenPos[p] || redPos[n] === greenPos[p]) {
                            console.log("same kill green at position" + greenPos[p]);
                            switch(p){
                                case 0:
                                $("." + greenPos[0]).removeClass("green-seed");
                                greenPos1 = greenSeedPath[0];
                                break;
                                case 1:
                                $("." + greenPos[1]).removeClass("green-seed");
                                greenPos2 = greenSeedPath[1];
                                break;
                                case 2:
                                $("." + greenPos[2]).removeClass("green-seed");
                                greenPos3 = greenSeedPath[2];
                                break;
                                case 3:
                                $("." + greenPos[3]).removeClass("green-seed");
                                greenPos4 = greenSeedPath[3];
                                break;
                            }
                        } else if (bluePos[n] === yellowPos[p] || redPos[n] === yellowPos[p]) {
                            console.log("same kill yellow at position" + yellowPos[p]);
                            switch(p){
                                case 0:
                                $("." + yellowPos[0]).removeClass("yellow-seed");
                                yellowPos1 = yellowSeedPath[0];
                                break;
                                case 1:
                                $("." + yellowPos[1]).removeClass("yellow-seed");
                                yellowPos2 = yellowSeedPath[1];
                                break;
                                case 2:
                                $("." + yellowPos[2]).removeClass("yellow-seed");
                                yellowPos3 = yellowSeedPath[2];
                                break;
                                case 3:
                                $("." + yellowPos[3]).removeClass("yellow-seed");
                                yellowPos4 = yellowSeedPath[3];
                                break;
                            }
                        }
                    }
                }
                console.log("i answered");
            } else if (target.parent().hasClass("green-seed") || target.parent().hasClass("yellow-seed")) {
                for (var n = 0; n < 4; n++) {
                    for (var p = 0; p < 4; p++) {
                        if (yellowPos[n] === bluePos[p] || greenPos[n] === bluePos[p]) {
                            switch(p){
                                case 0:
                                $("." + bluePos[0]).removeClass("blue-seed");
                                bluePos1 = blueSeedPath[0];
                                break;
                                case 1:
                                $("." + bluePos[1]).removeClass("blue-seed");
                                bluePos2 = blueSeedPath[1];
                                break;
                                case 2:
                                $("." + bluePos[2]).removeClass("blue-seed");
                                bluePos3 = blueSeedPath[2];
                                break;
                                case 3:
                                $("." + bluePos[3]).removeClass("blue-seed");
                                bluePos4 = blueSeedPath[3];
                                break;
                            }
                            console.log("same kill blue at position" + bluePos[p]);
                        } else if (yellowPos[n] === redPos[p] || greenPos[n] === redPos[p]) {
                            switch(p){
                                case 0:
                                $("." + redPos[0]).removeClass("red-seed");
                                redPos1 = redSeedPath[0];
                                break;
                                case 1:
                                $("." + redPos[1]).removeClass("red-seed");
                                redPos2 = redSeedPath[1];
                                break;
                                case 2:
                                $("." + redPos[2]).removeClass("red-seed");
                                redPos3 = redSeedPath[2];
                                break;
                                case 3:
                                $("." + redPos[3]).removeClass("red-seed");
                                redPos4 = redSeedPath[3];
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
            
            //setSeedOnBoard(bluePlay);
        }
    });
});


