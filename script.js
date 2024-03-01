
  // TODO: Get user input to create and return an array of employee objects
  // get user input
  // ask for first name
  // ask for last name
  // ask for salary
  // make employee objects
  // add them to an array

  // Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

  // Collect employee data
let employeesArray = []
const collectEmployees = function() {
  let addEmployees = true;
  while (addEmployees) {
       // firstName
      let firstName = prompt("Please enter your first name");
        // lastName
      let lastName = prompt("Please enter your last name");
       // salary 
      let salary = parseFloat(prompt("please enter salary"));

      console.log(firstName);
    
      let employee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary,
      };
      employeesArray.push(employee);
      console.log(employeesArray);
      let addAgain = confirm("Would you like to add more employees?")
      if (!addAgain){
       addEmployees = false;
      }
    }
      return employeesArray
    //};
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
   // My instructor Dan wrote this comment:  use a for loop to go through all the objects
  // My instructor Dan wrote this comment:  get salaries from objects
  /*const salary = employeesArray.filter(employeesArray => employeesArray.salary >= 0);
  for (let i = 0; 1 < salary.length; i++){
    sum +- salary[i];
  }
  let averageSalary = sum / salary.length;
  console.log(`The average employee salary between ${salary.length} employee(s) is ${averageSalary}`);
  }*/

  let totalSalary = 0;
  let numEmp = employeesArray.length;

  for(i=0; i<employeesArray.length;i++){
    totalSalary = totalSalary + employeesArray[i].salary;
  }

  const avgSalary = totalSalary/numEmp;
  console.log("Average Salary is: "+avgSalary);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // My instructor Dan wrote this comment: don't forget: Math.floor(Math.random()*# of employees)
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  


  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
