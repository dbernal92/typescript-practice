//  Mini Exercise: Inference vs Explicit
// Write 5 variables like this:
// 2 that use inference
// 2 that use explicit typing
// 1 that’s declared without a value but should have a type
{
    let name = "Stephanie";
    let age = 29;
    let hairColor: string = "black";
    let eyeshadow: string = "pink";
    let lipstick: string;
    lipstick = "light pink";

    console.log(name, age, hairColor, eyeshadow, lipstick);
}