{

    function removeDuplicates( array  : number[]): number[] {
        return array.filter((num, index) => array.indexOf(num) === index);
      }
      
      console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}