# Introduction
- This project is completed with [TheOdinProject's instructions](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator). 
- [Live Preview](https://talipakcelik.github.io/calculator/)
- Read this and detailed walkthrough summary in [Turkish](https://github.com/talipakcelik/calculator/blob/main/README.tr.md).

## Key Point Summary
- Difference between DOM and state:
	- when I press delete button in calculator, it is deleting from the DOM.
	- I am deleting from display, but what about the **state**?
	- Display should be secondary. and so, display must be reflect the internal state (js variables).

- Calculator's lower display clear and upper display update (something like pseudo code):
	- (1) when I press the number button,
		- (1.1) first value equal to number value e.g. 4, 5, 6...
		- (1.2) and so, lower display text equal to first value

	- (2) when I press the operator button, 
		- (2.1) set the second value equal to the first value (second value can also be thought of as stored value)
		- (2.1.1) because of that (and 2.3), upper and lower display showing same thing at the same time
		- (2.2) operator variable equal to operator's value (+, -,  /, x)
		- (2.3) then, upper display text equal to first value and operator (e.g. 4 +)
		- (2.4) finally, first value equal to blank. because I want to see the display clean every time I press the operator button
