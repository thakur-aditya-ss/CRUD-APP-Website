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

 const params = new URLSearchParams(window.location.search);   // ye inbuilt function jo edit form me all employees ke data ko fill karta hai
    const id = params.get("id");

async function getEditEmployees (){

    try{
        let resp = await fetch(`http://localhost:5000/employees/${id}`);
        let data = await resp.json();
        console.log(data); 
        // PRE-FILL INPUT FILL

        firstNameEle.value = data.firstname;
        middleNameEle.value = data.middlename;    
        lastNameEle.value = data.lastname;
        dodEle.value = data.dob ;
        emailEle.value = data.email;
        maritalStatusEle.value = data.maritalStatus;
        phoneNoEle.value = data.phoneNo ;
        streetEle.value = data.address.street;
        stateEle.value = data.address.state;
        cityEle.value = data.address.city;
        countryEle.value = data.address.country;
        zipcodeEle.value = data.address.zipcode;




    }catch(error){
        console.log(error);
        alert("Something went wrong ❌")   
    }
}

window.addEventListener("DOMContentLoaded",() => {
    getEditEmployees()
})

employeeFormEle.addEventListener("submit",async (e) => {
    e.preventDefault();

    // CREATE NEW UPDATE EMP OBJECT 
    let updateEmployeeData ={
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

try{
    let resp = await fetch(`http://localhost:5000/employees/${id}`,{
    method: "PUT",
    header : {
    "Content-Type": "application/json", 
    },
    body: JSON.stringify(updateEmployeeData),
});
console.log(resp);
}catch(err){
    console.log(err);
}
});