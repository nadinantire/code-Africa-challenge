function transformString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        // Perform both transformations in the specified order
        return str.split('').reverse().join('').split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Reverse the entire string
        return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // No transformation needed
        return str;
    }
}

// Example usage:
console.log(transformString("Hamburger"));         // Output: "regrubmaH"
console.log(transformString("Pizza"));             // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
