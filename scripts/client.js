$( document ).ready( onReady );

function onReady(){
    $( console.log( "Ready." ) );
    $( '#submitInputsbutton' ).on( 'click', newEmployee );
}

let employees = [];

function newEmployee(){
    console.log('in newEmployee' );
    let newEmployee = {
        firstName: $( '#firstNameInput' ).val(),
        lastName: $( '#lastNameInput' ).val(),
        idNumber: $( '#idNumberInput' ).val(),
        jobTitie: $( '#jobTitieInput' ).val(),
        annualSalary: $( '#annualSalaryInput' ).val(),

    }

}

//collects _employee first name, last name, ID number, job title, annual salary_. 

// A 'Submit' button should collect the form information, (html, js)
//store the information (js)
//append information to the DOM (html, jq?)
//clear the input fields (js)
//calculate monthly costs (js)
//append this to the to DOM. (html, jq)
//If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost. (js, css)

// Create a delete button that removes an employee from the DOM.(Jq)
