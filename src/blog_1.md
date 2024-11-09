# The significance of union and intersection types in Typescript

## Union Types(|)

Union Types allows to hold different types of values in a variable or parameters. It is useful when u have to use different kind of values in a single variable.

### Usage and Benefits

- Union types allow for handling multiple possible types within a single variable or parameter.

- TypeScript’s type-checking ensures that only the allowed types are used.

### Example

type StringOrNumber = string | Number
function display(value: StringOrNumber){
if (typeof value === "string") {
console.log("String value:", value);}
else {console.log("Number value:", value);}
}

In this example, display can accept either a string or a number due to the union type StringOrNumber. 

## Intersection Types (&)

An intersection type combines multiple types into a single type.  This is useful when you need a type that combines the properties of multiple types.

### Usage and Benefits

- Intersection types allow you to combine types, creating a new type with all properties from the combined types.

- All properties from the intersected types must be present, ensuring strict type conformity.

### Example

type Person = { name: string; age: number };
type Employee = { employeeId: string; department: string };

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "Alice",
  age: 30,
  employeeId: "E123",
  department: "HR"
}

In this example, EmployeePerson has properties from both Person and Employee. So you can set value from both Person and Employee type by using the EmployeePerson type.