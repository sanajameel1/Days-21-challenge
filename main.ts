// // QUESTION 61

// // Making a list (enum) for different types of vehicles
// enum VehicleType {
//     Car,
//     Truck,
//     Motorcycle
// }

// // Showing one type of vehicle from the list
// console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// // Here, we're just checking what number the Car category got in our list.

// // QUESTION 62

// // Creating a blueprint (interface) for student information
// interface Student {
//     name: string;
//     age: number;
//     courses: string[];
// }

// // Filling in the blueprint with an example student
// let student: Student = {
//     name: "SANA",
//     age: 22,
//     courses: ["English", "Science", "urdu"]
// };

// // Showing the student's information
// console.log(student);
// // We're using the blueprint to make sure our student has a name, age, and list of courses.

//QUESTION 63
// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 15,
    height: 20
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.

