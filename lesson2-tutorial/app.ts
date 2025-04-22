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

// Exercise 4: Mixed Object
// Create an object called profile with explicit types for the following properties:
// username – string
// age – number
// isPremiumUser – boolean
// Type it directly using a type or inline. Then log the object.
{
    type Profile = {
        username: string,
        age: number,
        isPremiumUser: boolean
    }

    let profileDari: Profile = {
        username: "dari.pie",
        age: 32,
        isPremiumUser: false
    }

    console.log(profileDari);
}

{

    // 1. Union type: number | string
let rating: number | "unrated" = "unrated";

// 2. Literal type: "light" | "dark"
let theme: "light" | "dark" = "dark";

// 3. Create a custom literal union type
type UserRole = "admin" | "editor" | "viewer";

// 4. Use the type to declare a variable
let currentUserRole: UserRole = "editor";

// 5. Log everything
console.log("Rating:", rating);
console.log("Theme:", theme);
console.log("Role:", currentUserRole);


}