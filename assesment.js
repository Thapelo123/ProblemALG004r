function generateSquare(n)
{
   let magicSquare = Array(n).fill(0).map(x => Array(n).fill(0));
 
    // Initialize position for 1
    var i = parseInt(n / 2);
    var j = n - 1;
 
    // One by one put all values in magic square
    for (let num = 1; num <= n * n;) {
        if (i == -1 && j == n) // 3rd condition
        {
            j = n - 2;
            i = 0;
        }
        else {
            // 1st condition helper if next number
            // goes to out of square's right side
            if (j == n)
                j = 0;
 
            // 1st condition helper if next number is
            // goes to out of square's upper side
            if (i < 0)
                i = n - 1;
        }
 
        // 2nd condition
        if (magicSquare[i][j] != 0) {
            j -= 2;
            i++;
            continue;
        }
        else
            // set number
            magicSquare[i][j] = num++;
 
        // 1st condition
        j++;
        i--;
    }
 
    // print magic square
    console.log("The Magic Square for " + n
                       + ":\n");
    console.log("Sum of each row or column "
                       + parseInt(n * (n * n + 1) / 2) + ":\n");
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++)
            console.log(magicSquare[i][j] + " ");
        console.log("\n");
    }
}
 
// driver program
 // Works only when n is odd
var n = 3;
generateSquare(n);//Magic Square of any odd dimension where (i.e. n is an odd number)

const ProblemALG004r = (n) => {

    //convert Array to a matrix box
    let matrixSquare = Array(n).fill(0).map(x => Array(n).fill(0));

    //Initialize row and columns
    let row = n - 1;
    let column = parseInt(n / 2);


    // Check each and put all values in matrix square
    for (let num = 1; num <= n * n;) {
        if (column == -1 && row == n) {

            row = n - 2;
            column = 0;
        }
        else {
            if (row == n)

                row = 0;

            if (column < 0) {

                column = n - 1;
            }
        }

        if (matrixSquare[column][row] != 0) {

            row -= 2;
            column++;
            continue;
        }
        else {

            matrixSquare[column][row] = num++;
            row++;
            column--;
        }

    }
    // print matrix square
    console.log("The Matrix Square for " + n
        + ":\n");
    console.log("Sum of each row and column "
        + parseInt(n * (n * n + 1) / 2) + ":\n");

    for (column = 0; column < n; column++) {
        for (row = 0; row < n; row++)
            console.log(matrixSquare[column][row] + " ");
        console.log("\n");
    }

}

ProblemALG004r(3);