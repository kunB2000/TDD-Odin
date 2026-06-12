function analyzeArray(numbers) {
    const averageNum = numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
    const minNum = Math.min(...numbers);
    const maxNum = Math.max(...numbers);
    const lengthNum = numbers.length;
    return {average: averageNum,
        min: minNum,
        max: maxNum,
        length: lengthNum}
}
console.log(analyzeArray([1,8,3,4,2,6]));

// module.exports = analyzeArray