// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//console.log('testing to see employee object', employees[0] );


for(person of employees){
  console.log('listing employees' , person)


}

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here

 let bonus = 0;
  
    switch(employee.reviewRating){
    
    case 0:
      console.log('this is no bonus?');
      break;
    case 1:
      console.log('this is no bonus?');
      break;
    case 2:
      console.log('this is no bonus?');
      break;
    case 3:
      bonus += .04;
      console.log('4% bonus!');
        break;
    case 4:
      bonus += .06;
      console.log('6% bonus!')
        break;
    case 5:
      bonus += .10;
      console.log('10% bonus!')
        break;
    }
  
  if(employee.employeeNumber.length === 4 && employee.reviewRating >=3){
    bonus += .05
  }

  if(bonus > .13){
    bonus = .13
  }
  
  if(Number(employee.annualSalary) > 65000 && employee.reviewRating >=3){
    bonus -= .01;
    
  }

  //return bonus
  // return new object with bonus results

  let employeeCompensation = {
    name: employee.name,
    bonusPercentage: bonus ,
    totalCompensation: (bonus + 1) * Number(employee.annualSalary),
    totalBonus:(bonus + 1) * Number(employee.annualSalary) - Number(employee.annualSalary)
  }
return employeeCompensation
}

console.log('Atticus bonus is, expect .09 :', calculateIndividualEmployeeBonus(employees[0] ));
console.log('Jem bonus is, expect: .06', calculateIndividualEmployeeBonus(employees[1] ));
console.log('Scout bonus is expect .12:', calculateIndividualEmployeeBonus(employees[2] ));
console.log('Robert bonus is, expect no bonus:', calculateIndividualEmployeeBonus(employees[3] ));
console.log('Mayella bonus is, expect no bonus:', calculateIndividualEmployeeBonus(employees[4] ));