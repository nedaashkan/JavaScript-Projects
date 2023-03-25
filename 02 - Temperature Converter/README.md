# Temperature Converter

![temperature-converter]()

- View project Live : ()

# Step Guide :

- Step 1: Start with HTML structure by creating two boxes, one for Celsius and the other for Fahrenheit. Put the label for each box denoting its unit value.
- Step 2: Add an input text field inside each box which will take the temperature value from the user. Give each input field a specific ID.
- Step 3: Use the 'oninput' attribute on each input field to link it to a JavaScript function that will convert the entered temperature from one unit to another automatically.
- Step 4: In your JavaScript code, get both Celsius and Fahrenheit value variables by using the IDs of their respective input fields.
- Step 5: Define two functions, 'celToFar' and 'farToCel' to convert Celsius to Fahrenheit and Fahrenheit to Celsius, respectively. Inside each function, perform the calculation for the desired conversion as necessary. Use the 'parseFloat' and 'toFixed' methods to round off the calculated values.
- Step 6: Finally, set the value of the other input field with the calculated converted temperature whenever a user enters a temperature in one the input fields.
- Step 7: Convert Celsius to Fahrenheit using the formula (temperature \* 1.8) + 32.
- Step 8: Convert the Fahrenheit to Celsius using the formula (temperature - 32) / 1.8.
