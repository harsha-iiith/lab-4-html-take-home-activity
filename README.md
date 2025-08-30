# CS6.302 Lab 4: Document Object Model

Software System Development Monsoon 2025  
**Total Marks: 20**

## Overview
This lab assignment focuses on implementing dynamic web applications using the Document Object Model (DOM) in JavaScript. Students will create two interactive web applications demonstrating DOM manipulation and event handling.

## Submission Instructions
Submit a zipped file named with your roll number containing the following structure:
```
[Roll_No].zip
├── Q1/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── Q2/
    ├── index.html
    ├── script.js
    └── style.css
```

## Tasks

### Task 1: Dynamic Greeting Card (10 Marks)
Create a personalized greeting card that changes content and style based on user interaction.

**HTML Requirements:**
- A `div` with id `"card"`
- Inside the card div:
  - An `h2` element with id `"greeting-text"` (initial text: "Hello, Guest!")
  - A `p` element with id `"card-message"` (placeholder text)
- A button with id `"personalize-btn"` (text: "Personalize")

**Functionality:**
- When "Personalize" button is clicked:
  - Prompt user to enter their name
  - Update greeting text to "Hello, [User's Name]!"
  - Change card message to a welcoming message
  - Change background color of the card div
  - Change text color of the greeting-text element

### Task 2: Simple To-Do List (10 Marks)
Build a basic to-do list application for adding tasks.

**HTML Requirements:**
- Text input field with id `"task-input"`
- Button with id `"add-task-btn"` (text: "Add Task")
- Empty unordered list (`<ul>`) with id `"task-list"`

**Functionality:**
- When "Add Task" button is clicked:
  - Create new list item (`<li>`) with input field value
  - Add the new item to the end of the task list
  - Clear the input field after adding
  - Validation: Do not add empty tasks

## Technical Requirements
- Use vanilla JavaScript (no frameworks)
- Implement proper DOM manipulation
- Handle user input validation
- Ensure responsive design with CSS
- Follow semantic HTML structure

## Grading Criteria
- Correct HTML structure and semantic elements
- Proper JavaScript DOM manipulation
- CSS styling and visual presentation
- Input validation and error handling
- Code organization and readability