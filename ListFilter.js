// Function filter out all string in an array
function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter((current) => typeof current !== "string")
}

console.log(filter_list(["w", 4, 5, "r"])); // Output: [4,5]
