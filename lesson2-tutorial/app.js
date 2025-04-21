//  Mini Exercise: Inference vs Explicit
// Write 5 variables like this:
// 2 that use inference
// 2 that use explicit typing
// 1 that’s declared without a value but should have a type
{
    var name_1 = "Stephanie";
    var age = 29;
    var hairColor = "black";
    var eyeshadow = "pink";
    var lipstick = void 0;
    lipstick = "light pink";
    console.log(name_1, age, hairColor, eyeshadow, lipstick);
}
// Exercise 4: Mixed Object
// Create an object called profile with explicit types for the following properties:
// username – string
// age – number
// isPremiumUser – boolean
// Type it directly using a type or inline. Then log the object.
{
    var profileDari = {
        username: "dari.pie",
        age: 32,
        isPremiumUser: false
    };
    console.log(profileDari);
}
