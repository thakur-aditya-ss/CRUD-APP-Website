// const { log } = require("node:console");

const employeeFormEle = document.getElementById("employee-form");

const firstNameEle = document.getElementById("firstname");
const middleNameEle = document.getElementById("middlename");
const lastNameEle = document.getElementById("lastname");
const dodEle = document.getElementById("dob");
const emailEle = document.getElementById("email");
const maritalStatusEle = document.getElementById("maritalstatus");
const phoneNoEle = document.getElementById("phoneno");
const streetEle = document.getElementById("address");
const cityEle = document.getElementById("city");
const stateEle = document.getElementById("state");
const countryEle = document.getElementById("country");
const zipcodeEle = document.getElementById("zipcode");


console.log(employeeFormEle);

employeeFormEle.addEventListener("submit", async (e) =>{
    e.preventDefault(0);
        console.log("Form Submitted");

let newEmployeeData ={
    firstname : firstNameEle.value.trim(),
    middlename : middleNameEle.value.trim(),
    lastname : lastNameEle.value.trim(),
    dob : dodEle.value.trim(),
    email : emailEle.value.trim(),
    maritalStatus : maritalStatusEle.value.trim(),
    phoneNo : phoneNoEle.value.trim(),
    address:{
        street : streetEle.value.trim(),
        city : cityEle.value.trim(),
        state : stateEle.value.trim(),
        country : countryEle.value.trim(),
        zipcode : zipcodeEle.value.trim(),

   },
};
try {
let resp = await fetch("http://localhost:5000/employees",{
    method : "POST",
    hearders: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(newEmployeeData)   // <------ SEND EMP DATA IN JSON-FORMAT
    
});
console.log(resp);

// Navigation
window.location.href = "AllEmployee.html"


} catch(err){
    alert("something went wrong❌")
}

// console.log(newEmployeeData);

});


