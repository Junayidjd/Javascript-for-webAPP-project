function countVowels(name) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Example usage:
const userName = "Alice";
const numberOfVowels = countVowels(userName);
console.log(`The number of vowels in the name "${userName}" is:`, numberOfVowels); // Outputs: The number of vowels in the name "Alice" is: 3
