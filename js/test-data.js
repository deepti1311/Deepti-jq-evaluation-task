//   });
// });

let fname = localStorage.getItem("fname");

let age = localStorage.getItem("age");
let phone = localStorage.getItem("phone");
let email = localStorage.getItem("email");
let gender = localStorage.getItem("gender");

let sunday = localStorage.getItem("sunday", $("#sun").val());
let monday = localStorage.getItem("monday", $("#mon").val());
let tuesday = localStorage.getItem("tuesday", $("#tue").val());
let wednesday = localStorage.getItem("wednesday", $("#wed").val());
let thursday = localStorage.getItem("thursday", $("#thu").val());
let friday = localStorage.getItem("friday", $("#fri").val());
let saturday = localStorage.getItem("saturday", $("#sat").val());

// windows.open("../html/test-data.html");
$("#disTable").append(
  '<tr class="child"><td>' +
    fname +
    "</td><td>" +
    age +
    "</td><td>" +
    phone +
    "</td><td>" +
    email +
    "</td><td>" +
    gender +
    "</td><td>" +
    sunday +
    "</td><td>" +
    monday +
    "</td><td>" +
    tuesday +
    "</td><td>" +
    wednesday +
    "</td><td>" +
    thursday +
    "</td><td>" +
    friday +
    "</td><td>" +
    saturday +
    "</td></tr>"
);
window.open("../htm/test-data.html");
