const totalScore = (result) => {
    if (result == "win") score = 3;
    else if (result == "tie") score = 1;
    else if (result == "lose") score = 0;
    return score;
}

totalScore("win");
totalScore("tie");
totalScore("lose");
