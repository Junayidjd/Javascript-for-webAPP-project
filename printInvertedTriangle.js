
function printInvertedTriangle(rows) {
    for (let i = rows; i > 0; i--) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += '*';
        }
        console.log(line);
    }
}

// Example usage:
let t = 6;
printInvertedTriangle(t);
