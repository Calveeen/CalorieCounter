---- OCT/10/23 ----
Making a calorie counting app! Trying to make it as simple as possible, the goal is to make tracking your calories easier. 

This app will not provide crazy features such as putting specific foods, and giving out food-specific calories. 

It will be the responsibility of the user to calculate their own meal's calories manually, but this app will allow to easily enter those calories and keep track of them.

The app will also have features such as:
- Daily, weekly, biweekly, and monthly total calories
- Allows inputs for desired goal calories to calculate net gains/losses.
- Calculator for potential calorie gains/losses based on any caloric routine. 
- More to come as this app progresses!

---- OCT/11/23 ----
Added functionality to the add button by having a modal pop up to enter calorie information! Also able to exit out of the modal by either clicking the "x" in the modal, or anywhere outside of the modal as well.

---- OCT/15/23 ----
Able to add entries to display to the screen with the food, calories, and time information after hitting the submit button. Also realized the "Add Date" button doesn't really make sense to be displaying the calorie information. The goal with the "Add date" button is to be able to create a unique slot for the date, and then have this display function that was created today to display for that slot. 

---- OCT/15/23 ----
Added validation to the form when submit is pressed. So far validation only checks for empty strings, looking to improve each input as time goes on! Learned about useEffect and also learned about functional updates on state. State update is asynchronous, therefore changes in state could possibly have old values when you're working with state that is constantly changing. Functional updates provides the most recent change to work with. For example: setValidInput((prevValidInput) =>({...prevValidInput,[key]: false})) ---> functional update <--- vs setValidInput({...validInput, [key]: false}) --> puts in possibly old data, then only add/replaces data after render. <---