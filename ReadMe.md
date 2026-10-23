# Temperature Converter

![MIT License](https://img.shields.io/badge/MIT-green?style=for-the-badge) 
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

A simple and useful temperature converter for Celsius and Fahrenheit, featuring a complementary text formatter to present information in a clean, user-friendly way. Originally designed as a lightweight web widget.

---

## Features

- **Instant Conversion:** Seamlessly converts values between Celsius and Fahrenheit.
- **Text Formatter:** Includes a built-in text formatting utility to display results comfortably.
- **Lightweight:** Built entirely in vanilla JavaScript with no heavy external dependencies.

## Technologies Used

- **JavaScript:** Chosen for its simplicity, flexibility, and native accessibility for web development and UI widgets.

## Challenges Faced

During the development of this program, effectively connecting and orchestrating the functions to pass data smoothly between the conversion logic and the formatter was the most challenging part.

## How to Use

1. Clone or download the code into your project directory.
2. Import or adapt the functions to your needs. The underlying math is already solved—you just need to pass the required parameters into the functions.

```javascript
const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'));

//Output: 77 F
```
## License

This project is licensed under the MIT License.