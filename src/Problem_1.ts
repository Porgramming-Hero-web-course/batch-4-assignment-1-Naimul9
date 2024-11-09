{
    function sumArray(numbers: number[]): number {
        const total = numbers.reduce((acc, grade) => acc + grade, 0);
        return total 
      }
      console.log(sumArray([1, 2, 3, 4, 5]));
}