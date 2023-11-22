# Function
# Prerequisite
- basic functions
- if else 

# Content
- Returning Boolean Values from Functions
- Return Early Pattern for Functions
- Counting Cards


[1.Returning Boolean Values from Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/returning-boolean-values-from-functions)
```js
// Finish and Paste your solution here
// function isLess(a, b) {
//   // Only change code below this line
//   return a < b;
    
//   // Only change code above this line
// }

// isLess(10, 15);



```

[2.Return Early Pattern for Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions)
```js
// Finish and Paste your solution here
// Setup
// function abTest(a, b) {
//   // Only change code below this line
//   if (a<0 || b<0) return undefined;


//   // Only change code above this line

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// abTest(2,2);



```

# Application
[1.Counting Cards](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards)
```js
// Finish and Paste your solution here
// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2: 
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count+=1;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       count+=0;
//       break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count-=1;
//       break;
//   }
//   if (count > 0) return count + " Bet";
//   else return count + " Hold";
  
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');



```
