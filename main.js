let fullName = "Nguyen Manh Duc";
let studentId = "27A4043285";

let parts = fullName.trim().split(/\s+/);
let lastName = parts[0];
let firstName = parts[parts.length - 1];

let initials = parts.map(part => part[0].toLowerCase()).join("");
let email = initials + "." + studentId.toLowerCase() + "@hvnh.edu.vn";

let coursePeriod = studentId.substring(0, 2);
let faculty = studentId[2];

let last4 = studentId.slice(-4);
let sum = 0;
for (let char of last4) {
    sum += Number(char);
}

let output = "Email: " + email + "\n" +
             `Xin chào ${fullName}, bạn là sinh viên khóa ${coursePeriod}, khoa ${faculty}, tổng 4 số cuối trong mã sinh viên là ${sum}.`;

document.getElementById("output").innerText = output;