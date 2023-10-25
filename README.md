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

---- OCT/16/23 ----
Added validation to the form when submit is pressed. So far validation only checks for empty strings, looking to improve each input as time goes on! Learned about useEffect and also learned about functional updates on state. State update is asynchronous, therefore changes in state could possibly have old values when you're working with state that is constantly changing. Functional updates provides the most recent change to work with. For example: setValidInput((prevValidInput) =>({...prevValidInput,[key]: false})) ---> functional update <--- vs setValidInput({...validInput, [key]: false}) --> puts in possibly old data, then only add/replaces data after render. <---

---- OCT/24/23 ----
Made the "Add Date" button actually add dates to the screen. When clicking the "add date" button, the "add date" button dissapears and then a date form appears. You can then enter a date and either hit the "enter" button or the "cancel" button. My intention with this is to create a new block element for each date, and within those blocks have the calorie information! So far for validation, you just cannot enter the same date twice. Otherwise when pressing the "enter" button with the same date, it will just return to the "add date" button and do nothing. 

A major lesson I've learned today is that projects really do take large amounts of time. I started this app on the 10th of october, and I've logged every day I've worked on it. So far it seems like it has only been 5 days of actual work done, and each day consisted of approximately 2 hours of real work (so in essence 10 hours of straight work). For 10 hours of real work, I would say this is pretty good and I will try to log the total amount of hours and time from now on to see an accurate progress report!

HOURS LOGGED: 10 HOURS
TIME STUDIED: 6:00PM - 8:00PM