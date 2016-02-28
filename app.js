

//jQuery interaction for the employeeForm

$(document).ready(function(){

  $('#employeeForm').on('submit', function(event){
    event.preventDefault();
    var employees = {};
    // console.log('Test');

    $.each($('#employeeForm').serializeArray(), function(i, field){
      employees[field.name] = field.value;
    });

    $('#employeeForm').find('input[type=text]').val('');

    employeeArray.push(employees);
    calTotalSalary();
    console.log(employeeArray);

    $('.employee-info').append('<div class="employees"></div>');

    var $el = $('.employee-info').children().last();

    $el.append('<p>Employee: ' + employees.firstname + ' ' + employees.lastname + '</p>');
    $el.append('<p>Employee ID: ' + employees.employeeid + '</p>');
    $el.append('<p>Job Title: ' + employees.jobtitle + '</p>');
    $el.append('<p>Annual Salary: ' + employees.salary + '</p>');
    // console.log('!');

  });
  calTotalSalary();
});

//Decalred variables to be used:
//employeeArray will be the Array that the employee objects are stored
//combinedMonthlySalary is where the total monthly salary of all employees is stored

var employeeArray = [];
var combinedMonthlySalary = 0;
var i = 0;
// var totMonthSalary = 0;

//The calTotalSalary function calculates the all of the employees' salaries and converts it to monthly
function calTotalSalary () {
  var totMonthSalary = 0;
  for (var i = 0; i < employeeArray.length; i++){
    var empSalary = employeeArray[i];
    totMonthSalary += parseInt(empSalary.salary) / 12;
  }
  combinedMonthlySalary = totMonthSalary;
  // return combinedMonthlySalary;
  console.log(totMonthSalary);
  displaySalary();
}

//The displaySalary function displays the combinedMonthlySalary only if it is > 0
function displaySalary() {
  if (combinedMonthlySalary > 0) {
    return $('.total-monthly-salary').text("Total Monthly Salary: " + combinedMonthlySalary);
  }else {
    return $('.total-monthly-salary').text(" ");
  }
}


// < -- SCOTT'S NOTES -- >
//          ******
// console.log('This works!');
//Code from lecture ***
//   $("#catForm").on("submit", function(event){
//      event.preventDefault();
//      var values = {};
//   // values["puppies"] = "woof";
//   // values.puppies = "woof";
//   // values["numPups"] = 6;
//
//   // console.log($("#catForm").serializeArray());
//   //This strips the form and creates an object with the info in it
//   $.each($("#catForm").serializeArray(), function(i, field){
//     values[field.name] = field.value;
//   });
//   // this clears out the form
//     $("#catForm").find("input[type=text]").val("");
//     catArray.push(values);
//     totalCatAge();
// });
// totalCatAge();
