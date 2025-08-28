1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   When we want to find only one element using its ID, we use the getElementById method. 
When we want to find many elements with the same class. We use getElementsByClassName  
To find the first matching element. We use querySelector
To find all the matching elements. We use querySelectorAll

2. How do you create and insert a new element into the DOM?
    Make the element = document.createElement("div")
Add text or attributes = element.innerText = "Asraful"
Put it somewhere = parent.appendChild(element)

3. What is Event Bubbling and how does it work?
   When you click on a child element, the event also goes upwards to its parent, then to the grandparent, and so on. Like bubbles rising in water.
4. What is Event Delegation?
   Instead of adding many event listeners to each child, you add one listener to the parent and check which child was clicked. Saves time, memory, and makes code cleaner.
5. Difference between preventDefault() and stopPropagation()
   preventDefault() = Stops the default browser action (example: stops a form from submitting).
stopPropagation() = Stops the event from bubbling up to parent elements.
