# code-Africa-challenge
## Garelly

### HTML Structure: 
The HTML structure consists of sections for introduction and  Gallery 01.
Each section is wrapped inside a <div> element with a unique id.
Navigation links are provided in a <nav> element for easy navigation between sections.

### CSS Styling:

Defined the styling for the navigation bar, body, text sizes, and various sections.
Utilizes CSS flexbox and absolute positioning for layout and positioning of elements.
Provides styles for the boxes containing images in the galleries, including hover effects.


### JavaScript Interactivity:

Adds event listeners to each box element to toggle the 'hovered' class on mouse enter and mouse leave events.
The 'hovered' class triggers a CSS transition effect to scale the box slightly on hover.

### Testing Responsiveness:

#### Laptop Screen:

Open the HTML file in a web browser on your laptop.
Resize the browser window to different sizes, including full-screen and smaller sizes.
Observe how the layout adjusts and whether elements rearrange appropriately to fit the viewport width.
Check if navigation remains accessible and readable.

#### Phone Screen:

Open the HTML file on your smartphone's web browser.
Rotate your phone between portrait and landscape orientations to test responsiveness.
Swipe up and down to scroll through the content.
Verify that the navigation remains usable and the content layout adjusts effectively to smaller screen sizes.

## 4.2 Coding Challenge 1: Array Manipulation

### Initialize currentSum and start: 
currentSum keeps track of the sum of the current subarray.
Using a Map: The sumMap stores the sums we have seen so far.

### Loop through the array:
Add the current element to currentSum.
If currentSum equals the target, we found a subarray.
If (currentSum - target) exists in sumMap, it means there is a subarray that sums to the target.
Store currentSum and its index in sumMap.
Return false if no such subarray is found.

## 4.3 Coding Challenge 2: String Transformation

 file named stringTransform.js was created in challeges repo and implement the function to solve the problem.

 Get the length of the string.
### Check divisibility:
If the length is divisible by 15, reverse the string and then convert each character to its ASCII code.
If the length is divisible by 3, reverse the string.
If the length is divisible by 5, convert each character to its ASCII code.
If none of the above conditions are met, return the string as is.

### how to test

1. Install Node.js: Before you can run JavaScript code on your computer, you need to have Node.js installed. Node.js is a JavaScript runtime that allows you to execute JavaScript code outside of a web browser. You can download and install Node.js from the official website.

2. Navigate to the Project Directory: Once Node.js is installed, you need to go to the directory (or folder) where your JavaScript project is located. You can do this using the command line interface (CLI) on your computer. The command cd stands for "change directory", and you use it to move from one directory to another.

3. Execute JavaScript File: After you've navigated to the directory where your JavaScript file (arrayMap.js in this case) is located, you can run the JavaScript code using Node.js. The command node is used to execute JavaScript files. So, when you type node arrayMap.js or node stringTransform.js and press enter, Node.js will run the JavaScript code in the arrayMap.js file.