
# Express.js Server with EJS Rendering and Form Submission

This project demonstrates a basic setup of an Express.js server using EJS as the view engine for rendering dynamic content. The server handles form submissions and renders an EJS template with the submitted data.

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/express-ejs-form-demo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd express-ejs-form-demo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000)

3. You can access the form at the root URL and submit it to see the dynamic rendering in action.

### Project Structure

- `server.js`: The main server file containing the Express.js setup.
- `index.html`: The HTML form to be served.
- `index.ejs`: The EJS template for rendering dynamic content.

### Dependencies

- `express`: Web application framework for Node.js.
- `ejs`: Embedded JavaScript templates for dynamic content.
- `body-parser`: Middleware for handling form data.

### Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.
