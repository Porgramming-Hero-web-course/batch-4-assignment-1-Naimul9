{

  
 
    function validateKeys<T extends object>(object:T, keys: (keyof T)[]): boolean{
        const findKeys = keys.filter(key => object[key] === undefined);
        // console.log(findKeys.length);
        return findKeys.length === 0;
      }
    
    
      const person = { name: "Alice", age: 25, email: "alice@example.com" };
      console.log(validateKeys(person, ["name", "age"]));


}