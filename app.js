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

  $.each($('#employeeFrom').serializeArray(), function(i, field){
    values[field.name] = field.value;
  });

  $('#employeeFrom').find('input[type=text]').val('');
  employeeArray.push(employees);
  console.log(employeeArray);
  console.log('!');

});
});

employeeArray = [];
