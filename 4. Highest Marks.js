// var x = 15;
// var z;
// z= (x>45 ? z= "true":z="false")
// console.log(z) 






function findHighestMarks(marks) {
    let highestMarks = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    console.log("The highest marks scored by any student is:", highestMarks);
}

// Example usage:
const marks = [78, 85, 62, 90, 88];
findHighestMarks(marks);
