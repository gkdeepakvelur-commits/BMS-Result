// ==========================================
// School Result Portal Centralized Script
// ==========================================

// -------- Admin Login Authentication --------
function login() {
    let username = document.getElementById("username")?.value;
    let password = document.getElementById("password")?.value;
    let messageBox = document.getElementById("message");

    if (username === "admin" && password === "12345") {
        if (messageBox) {
            messageBox.innerHTML = "<span style='color:green'>Login Successful! Redirecting...</span>";
        }
        setTimeout(function() {
            window.location.href = "admin-dashboard.html";
        }, 1000);
    } else {
        if (messageBox) {
            messageBox.innerHTML = "<span style='color:red'>Invalid Username or Password</span>";
        }
    }
}

// -------- Student Result Verification --------
function showResult() {
    let roll = document.getElementById("rollNo")?.value;
    let resultDiv = document.getElementById("result");

    if (!resultDiv) return;

    if (roll === "101") {
        resultDiv.className = "success";
        resultDiv.innerHTML = `
            <h3>Student Result</h3>
            <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ccc;">
            <p><b>Name:</b> Deepak</p>
            <p><b>Class:</b> III B.Sc Computer Science</p>
            <p><b>Total Marks:</b> 450/500</p>
            <p><b>Percentage:</b> 90%</p>
            <p><b>Grade:</b> A+</p>
        `;
    } else if (roll === "102") {
        resultDiv.className = "success";
        resultDiv.innerHTML = `
            <h3>Student Result</h3>
            <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ccc;">
            <p><b>Name:</b> Rahul</p>
            <p><b>Class:</b> III B.Sc Computer Science</p>
            <p><b>Total Marks:</b> 400/500</p>
            <p><b>Percentage:</b> 80%</p>
            <p><b>Grade:</b> A</p>
        `;
    } else {
        resultDiv.className = "error";
        resultDiv.innerHTML = "<p><b>Result Not Found</b></p>";
    }
}

// -------- Upload Student Marks Form Processing --------
function uploadMarks() {
    let nameElem = document.getElementById("name");
    let rollElem = document.getElementById("roll");
    let mathElem = document.getElementById("math");
    let scienceElem = document.getElementById("science");
    let englishElem = document.getElementById("english");
    let computerElem = document.getElementById("computer");
    let socialElem = document.getElementById("social");

    if (!nameElem?.value || !rollElem?.value) {
        alert("Please fulfill all the required administrative parameters.");
        return;
    }

    let name = nameElem.value;
    let roll = rollElem.value;
    let math = parseInt(mathElem.value) || 0;
    let science = parseInt(scienceElem.value) || 0;
    let english = parseInt(englishElem.value) || 0;
    let computer = parseInt(computerElem.value) || 0;
    let social = parseInt(socialElem.value) || 0;

    let total = math + science + english + computer + social;
    let percentage = (total / 500) * 100;
    let grade = "";

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B+";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 40) grade = "C";
    else grade = "Fail";

    let result = document.getElementById("resultBox");
    if (result) {
        result.style.display = "block";
        result.className = "success";
        result.innerHTML = `
            <h3>Marks Uploaded Successfully</h3>
            <hr style="margin: 10px 0; border: 0; border-top: 1px solid #155724;">
            <p><b>Name:</b> ${name}</p>
            <p><b>Roll No:</b> ${roll}</p>
            <p><b>Total Marks:</b> ${total}/500</p>
            <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
            <p><b>Grade:</b> ${grade}</p>
        `;
    }

    document.getElementById("marksForm")?.reset();
}

// -------- Security Logout Action --------
function logout() {
    alert("Logged Out Successfully");
    window.location.href = "admin-login.html";
}