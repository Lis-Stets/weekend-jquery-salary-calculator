$( document ).ready( onReady );

function onReady(){
    $( console.log( "Ready." ) );
    $( '#submitInputsbutton' ).on( 'click', newEmployee );
    $( '#employeeListOutput' ).on( 'click', '.removeEmployeeButton', removeEmployee )
}//end onReady

let employees = [];

//collects _employee first name, last name, ID number, job title, annual salary_. 
function newEmployee(){
    console.log('in newEmployee' );
    let employeeToAdd = {
        firstName: $( '#firstNameInput' ).val(),
        lastName: $( '#lastNameInput' ).val(),
        idNumber: $( '#idNumberInput' ).val(),
        jobTitie: $( '#jobTitieInput' ).val(),
        annualSalary: $( '#annualSalaryInput' ).val(),

    }
    employees.push( employeeToAdd );
    //clear the input fields (js)
    $( '#firstNameInput' ).val( '' );
    $( '#lastNameInput' ).val( '' );
    $( '#idNumberInput' ).val( '' );
    $( '#jobTitieInput' ).val( '' );
    $( '#annualSalaryInput' ).val( '' );

    displayInputs( employees );
}// end newEmployee
console.log( employees );

//append information to the DOM (html, jq?)
//calculate monthly costs (js)
//append this to the to DOM. (html, jq)
function displayInputs( inputArray ){
    console.log( 'in displayInputs' );
    let unorderedListItemToBeDisplayed = $( '#employeeListOutput' );
    unorderedListItemToBeDisplayed.empty();
    let totalMonthlyCost = 0;

    for( let i=0;i<inputArray.length; i++ ){
        unorderedListItemToBeDisplayed.append(`<li>${inputArray[i].firstName} ${inputArray[i].lastName}: ${inputArray[i].idNumber}, ${inputArray[i].jobTitie}, $${inputArray[i].annualSalary}  <button id="removeEmployeeButton" class="removeEmployeeButton" data-index= "${i}">Remove Employee</button> </li>`);
        totalMonthlyCost += Number( inputArray[i].annualSalary ).toFixed( 2 )/12;
        console.log( totalMonthlyCost );
    }
    $('#totalMonthlyCostOutput').empty();
    $('#totalMonthlyCostOutput').append( totalMonthlyCost )
//If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost. (js, css)
    if( totalMonthlyCost > 20000){
        $( '#totalMonthlyCostOutput' ).css( 'background-color', 'rgba(255, 0, 0, 0.863)');
    }
    else{
        $( '#totalMonthlyCostOutput' ).css( 'background-color', 'rgb(230, 250, 231)');
    }
}

// Create a delete button that removes an employee from the DOM.(Jq)
function removeEmployee(){
    //$( this ).parent().remove();
    console.log( $( this ).data( 'index' ) );
    employees.splice( $( this ).data( 'index' ), 1 );
    displayInputs( employees );
}