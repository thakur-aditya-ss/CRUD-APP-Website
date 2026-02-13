const employeesContainerEle = document.getElementById("employees-container");




async function getAllEmployees(){
    try{
        // let res = await fetch(`${import.meta.env.BASE_URL}/employee`);
        let res = await fetch(`http://localhost:5000/employees`);
        let data = await res.json();
        console.log(data);   // [{},{},{},{}]
        displayEmployees(data);
    }catch(err){
        console.log(err);
        alert("Something went wrong❌");
        
    }
}


//CALL FUNCTION AFTER DOM TREE CREATION:--->

window.addEventListener("DOMContentLoaded",()=>{
    getAllEmployees();
});

function displayEmployees(getAllEmployees){
    getAllEmployees.map((emp) =>{
        const empCard = document.createElement("article")
        empCard.className = "emp-card";

        empCard.innerHTML = `
         <header class="emp-header">

        <h3 class="emp-name"></h3>
            ${emp.firstname} ${emp.middlename} ${emp.lastname}
            </h3>
            <span class="emp-id">ID: ${emp.id}</span>
        </header>

        <section class="emp-info">
            <p><strong>Date of Birth:</strong> ${emp.dob}</p>
            <p><strong>Marital Status:</strong> ${emp.maritalstatus}</p>
        </section>

        <section class="emp-contact">
            <p><strong>Email:</strong> ${emp.email}</p>
            <p><strong>Phone:</strong> ${emp.phoneno}</p>
        </section>

        <section class="emp-address">
            <p><strong>Address:</strong></p>
            <p>
            ${emp.address.street}, ${emp.address.city},<br>
            ${emp.address.state}, ${emp.address.country} - ${emp.address.zipcode}
            </p>
        </section>
        <footer class="emp-actions">
            <button class="btn edit-btn" data-id="${emp.id}">Edit</button>
            <button class="btn delete-btn" data-id="${emp.id}">Delete</button>
        </footer>
        `;
       

        employeesContainerEle.append(empCard);

    });

}