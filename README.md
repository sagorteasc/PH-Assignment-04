1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
   Ans: i) getElementById is used select a element that have a unique id and give single element in return.
       ii) getElementsByClassName is used to select element or elements with the same class name and gives HTML collection in return
      iii) querySelector is used to select only one element from the matching class name or the id name or tag name, it only gives the first element and ignore the rest.
       iv) querySelectorAll gives all elements from the matching class name, id name(it is always unique so) or tag name.

2. How do you create and insert a new element into the DOM?
   
   Ans: First i want to find where i insert the new element, find that parent using "getElementById" or "querySelector" etc. Then we use "document.createElement('div')" to create a div element. Then we dynamically insert the HTML in it using "innerHTML" and "template string", after doing that we use "appendChild()" to insert the element inside the parent.

3. What is Event Bubbling? And how does it work?
   
   Ans: It is a event that move upwards from where it begins. For example, if I have a div and this div contains a button and this div has a child div that contains another button and the second div has another child div that contains a button also. now if we add event listener to all three button, div1, div2, div3 and add console log to show what is showing. If we click div3 button then it first execute or show the button event then its parent (div3) than the div3's parent element (div2) data or event and then it show its parent (div1) data or event and continuous until it reach to document. This is happends because of Event Bubbling. Event Bubbling checks the data that has event triggered, if that have any parent it call that automatically and if that has another parent that calls that also. That's how it works.

4. What is Event Delegation in JavaScript? Why is it useful?

   Ans: It is a method that is used for giving the event to parent instead of its child individual event. By doing this we use minimal number of event handler and it maked code more readable.

5. What is the difference between preventDefault() and stopPropagation() methods?
   
   Ans: i) preventDefault() is used in input type and anchor type tags etc. When some log in form or that kind of things used and click the link or the button that connected to it then the browser automatically refresh the page and remove all process, preventDefault() stops that from happening.
       ii) stopPropagation() is used to stop the event from bubbling from child element to go upward so that it can not go to parent element only stay where it belongs to.
