// Write your solution in this file!

//Start the employee object

// Initialize the employee Object
const employee = {
    name: 'John  Jane',
    streetAddress: '318 St Lucia'
  };
  
  // Function to update the employee Object with a key and value (non-destructively)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update the employee Object with a key and value (destructively)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a property from the employee Object by key (non-destructively)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a property from the employee Object by key (destructively)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }