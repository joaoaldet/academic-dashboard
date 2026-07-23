# Academic Dashboard

## Description

This project implements a **student academic dashboard** using native web technologies. The application displays class schedules, exam information, attendance records, and grades through a reusable Web Component.

The dashboard loads academic data from a JSON file and dynamically renders the information, providing students with a simple and organized way to monitor their academic activities.

## Features

* Displays daily class schedules
* Shows subjects, locations, and class times
* Highlights upcoming exams
* Tracks attendance information
* Displays grades with visual performance indicators
* Dynamically loads data from JSON files
* Uses reusable Web Components with Shadow DOM

## Technologies

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Web Components
* Shadow DOM
* JSON Data Handling

## Project Structure

```text
academic-dashboard/
│
├── index.html
├── classes.json
├── classes-component.js
├── classes-component.css
└── README.md
```

## Architecture

The application is built around a custom Web Component:

### `ClassesComponent`

The main component is responsible for:

* Loading academic data asynchronously.
* Filtering classes by day.
* Generating the dashboard interface dynamically.
* Applying visual styles based on grade performance.
* Encapsulating its structure and styles using Shadow DOM.

The component is registered as:

```html
<classes-component></classes-component>
```

This allows the dashboard component to be reused and embedded into different HTML pages.

## User Interface

The dashboard provides information about:

### Classes

* Subject name
* Classroom location
* Schedule

### Exams

* Exam dates
* Exam alerts

### Academic Performance

* Attendance records
* Grades with color-based indicators

Grade visualization:

* 🔴 Red: Grade below 6
* 🟠 Orange: Grade between 6 and 7.9
* 🟢 Green: Grade 8 or higher

## Web Components Concepts

This project demonstrates the use of:

### Custom Elements

Creation of reusable HTML components using the browser's native Web Components API.

### Shadow DOM

Encapsulation of component structure and styles, preventing conflicts with external pages.

### Component-Based Architecture

Organization of interface logic into an independent and reusable component.

### Dynamic Rendering

Generation of interface elements based on external JSON data.

## Data Structure

Academic information is stored in a JSON file containing:

* Subject information
* Class schedule
* Classroom location
* Exam dates
* Attendance records
* Grades

Example:

```json
{
  "disciplina": "S05 - Interface Homem-máquina",
  "horario": "10:00",
  "local": "P1-S17",
  "nota": 9
}
```

## Running the Project

1. Clone this repository.
2. Open `index.html` in a web browser.
3. Ensure `classes.json` is available in the project directory.
4. View the academic dashboard.

## Live Demo

Available through GitHub Pages:

https://joaoaldet.github.io/academic-dashboard/

## License

This project was developed for educational purposes.
