1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById -> With it, we can find the element's ID and access it quickly and directly.Returns only one element.

getElementByClassName -> Select all elements with a class together. Perfect for handling many elements instead of one.

querySelector -> Can get an element using selector like:<p>, .classname, <div>, #id, <h1>-<h6>

querySelectorAll -> Using for matching element select. Mostly use for button,cards

2. How do you **create and insert a new element into the DOM**?
In DOM create a new element use createElement(), if create new html use innerHTML.
Insert new element use appendChild()

3. What is **Event Bubbling** and how does it work?
This means that the event propagates from the target to the parent elements above.


4. What is **Event Delegation** in JavaScript? Why is it useful?
Handling multiple child elements with parent listener.This is very useful for efficiency, dynamic content handling, and clean code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() -> Prevents browser default action.like Form submit, link click, context menu etc.

stopPropagation() -> Stops bubbling/capturing of events. like to stop listener trigger on parent/ancestor element


