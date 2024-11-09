{

    function getProperty<P, A extends keyof P>(obj: P, key: A): P[A] {
        return obj[key];
    }
    
    
    const person = { name: "Alice", age: 30 };
    
    console.log(getProperty(person, "name"));
}