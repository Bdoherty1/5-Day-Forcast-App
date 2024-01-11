# Weather Dashboard

## Description

The Weather Dashboard is a web application that allows users to search for a city and view current and future weather conditions. It provides a user-friendly interface for checking the weather forecast, including temperature, wind speed, and humidity. Additionally, the search history feature allows users to quickly access weather information for previously searched cities.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [API Key Setup](#api-key-setup)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

To use the Weather Dashboard, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your preferred web browser.

## Usage

- Enter a city in the provided input field.
- Click the "Search" button to fetch and display current and future weather conditions.
- View detailed information, including temperature, wind speed, and humidity.
- Access a 5-day forecast with date, weather icon, temperature, wind speed, and humidity.
- Click on a city in the search history to retrieve weather conditions for that city.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

The project structure is organized into different sections:

- **HTML & CSS**: Structured to ensure a responsive and visually appealing design.
- **JavaScript**: Manages the functionality of fetching weather data and updating the UI dynamically.

## API Key Setup

To access weather data, you need to obtain an API key:

1. Visit [OpenWeatherMap](https://openweathermap.org/) and sign up for a free account.
2. Obtain your API key.
3. Insert your API key in the `script.js` file:

   ```javascript
   const API_KEY = "YOUR_OWN_API_KEY";