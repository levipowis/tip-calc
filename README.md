# Tip Calculator in HTML/CSS/JavaScript

## MVP V1

### Functional Requirements

1. It should have a text field to input the bill total
   - Create a form with a "Bill Total" text input field
   - Give it an id of "billTotal"
2. It should have a radio button group to select the tip percentage
   - Create four radio buttons with labels in a group named "tipPercentage"
3. It should have a "Calulate Tip" button that runs a function onClick to calculate the tip percentage
   - Create a submit button with the text "Calculate Tip"
   - Write a calculateTip() function to get values from the billTotal and tipPercentage then multiplies them together and returns a totalTip value
   - Add an onClick to the button to call the function
4. It should have a "Total Tip" output field
   - Create a "Total Tip" div with a span for "Total Tip" label and a span for output of the totalTip value
   - Add the totalTip value calculated by the calculateTip() function
5. It should have a "Total Amount" output field
   - Create a "Total Amount" div with a span for a label and a span for an output of the totalAmount
   - Add a totalAmount calculation to the calculateTip() function
