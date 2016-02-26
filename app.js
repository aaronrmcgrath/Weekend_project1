$(document).ready(function(){
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

$('#employeeForm').on('submit', function(event){
  event.preventDefault();
  var employees = {};
  // console.log('Test');

  $.each($('#employeeForm').serializeArray(), function(i, field){
    employees[field.name] = field.value;
  });

  $('#employeeFrom').find('input[type=text]').val('');

  employeeArray.push(employees);

  calTotalSalary();
  console.log(employeeArray);
  // console.log('!');

});
calTotalSalary();
});

var employeeArray = [];
var combinedMonthlySalary = 0;
// var totMonthSalary = 0;

function calTotalSalary () {
  var totMonthSalary = 0;
  for (var i = 0; i < employeeArray.length; i++){
    var empSalary = employeeArray[i];
    totMonthSalary += parseInt(empSalary.salary) / 12;
  }
  combinedMonthlySalary = totMonthSalary;
  console.log(totMonthSalary);
  // $()
}
