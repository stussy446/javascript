///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1990);


// function calculateAge(year){
//   console.log(2016 - year);
// }

// var retirement = function(year){
//   console.log(65 - (2016 - year));
// }















///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a);
// }




///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

// calculateAge(1992);

// function calculateAge(year){
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: "John",
    yob: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016 - this.yob);

        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: "Mike",
    yob: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();








