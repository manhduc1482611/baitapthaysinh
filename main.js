let fullName = "Nguyen Manh Duc";
let studentId = "27A4043285";

let parts = fullName.split(" ");
let lastName = parts[0];
let middleName = parts[1];
let firstName = parts[parts.length - 1];

let email = 
    lastName[0].toLowerCase() +
    middleName[0].toLowerCase() +
    firstName[0].toLowerCase() +
    "." +
    studentId.toLowerCase() +
    "@hvnh.edu.vn";

let coursePeriod = studentId.substring(0, 2);
let faculty = studentId[2];

let last4 = studentId.slice(-4);
let sum = 
    Number(last4[0]) +
    Number(last4[1]) +
    Number(last4[2]) +
    Number(last4[3]);

let output =
    "Email: " + email + "\n" +
    `Xin chào ${fullName}, bạn là sinh viên khóa ${coursePeriod}, khoa ${faculty}, tổng 4 số cuối trong mã sinh viên là ${sum}.`;

document.getElementById("output").innerText = output;