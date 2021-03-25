/* JS Object */
let personObj = {
    name: "David",
    age: 23,
    city: "Mexico"
};

/* JS Object to JSON */
let personJson = JSON.stringify(personObj);

console.log("JSON");
console.log(personJson);

/* JSON */
let valueJson = '{"name":"Luis", "age":23, "city":"Mexico"}';

/* JSON to JS Object */
let valueObj = JSON.parse(valueJson);

console.log("Javascript Object");
console.log(valueObj);

