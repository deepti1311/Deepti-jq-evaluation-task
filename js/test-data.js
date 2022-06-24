// //   });
// // });

// let fname = localStorage.getItem("fname");

// let age = localStorage.getItem("age");
// let phone = localStorage.getItem("phone");
// let email = localStorage.getItem("email");
// let gender = localStorage.getItem("gender");

// let sunday = localStorage.getItem("sunday", $("#sun").val());
// let monday = localStorage.getItem("monday", $("#mon").val());
// let tuesday = localStorage.getItem("tuesday", $("#tue").val());
// let wednesday = localStorage.getItem("wednesday", $("#wed").val());
// let thursday = localStorage.getItem("thursday", $("#thu").val());
// let friday = localStorage.getItem("friday", $("#fri").val());
// let saturday = localStorage.getItem("saturday", $("#sat").val());
let fname = localStorage.getItem("fname");
let age = localStorage.getItem("age");
let email = localStorage.getItem("email");
let phone = localStorage.getItem("phone");
let gender = localStorage.getItem("gender");
let sunday =
  localStorage.getItem("sunday", $("#sun").val()) == "none"
    ? ""
    : localStorage.getItem("sunday", $("#sun").val());
let monday =
  localStorage.getItem("monday", $("#mon").val()) == "none"
    ? ""
    : localStorage.getItem("monday", $("#mon").val());
let tuesday =
  localStorage.getItem("tuesday", $("#tue").val()) == "none"
    ? ""
    : localStorage.getItem("tuesday", $("#tue").val());
let wednesday =
  localStorage.getItem("wednesday", $("#wed").val()) == "none"
    ? ""
    : localStorage.getItem("wednesday", $("#wed").val());
let thursday =
  localStorage.getItem("thursday", $("#thurs").val()) == "none"
    ? ""
    : localStorage.getItem("thursday", $("#thurs").val());
let friday =
  localStorage.getItem("friday", $("#fri").val()) == "none"
    ? ""
    : localStorage.getItem("friday", $("#fri").val());
let saturday =
  localStorage.getItem("saturday", $("#sat").val()) == "none"
    ? ""
    : localStorage.getItem("saturday", $("#sat").val());

// windows.open("../html/test-data.html");
if (sunday == "null") {
  sunday = "";
}
if (monday == "null") {
  monday = "";
}
if (tuesday == "null") {
  tuesday = "";
}
if (wednesday == "null") {
  wednesday = "";
}
if (thursday == "null") {
  thursday = "";
}
if (friday == "null") {
  friday = "";
}
if (saturday == "null") {
  saturday = "";
}

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
localStorage.clear();
window.open("../htm/test-data.html");
