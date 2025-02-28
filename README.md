# Movie Database

A simple web-based movie search application that allows users to search for movies using an API and view details in a modal.

## Features

Search for movies using a keyword.

Display movie details in a modal popup.

Responsive UI using Bootstrap 5.

Styled with SCSS for better customization.

## Project Structure
  ```plaintext
├── node_modules
├── scss
│   ├── style.scss
├── index.html
├── package-lock.json
├── package.json
├── script.js
├── style.css
├── style.css.map
```

# Installation

Clone the repository:
```bash
git clone https://github.com/your-username/movie-database.git
cd movie-database
```
Install dependencies:
```bash
npm install
```
Compile SCSS to CSS (if needed):
```bash
npm run build
```

## Usage

Open index.html in a browser to start using the application.

Enter a movie title in the search bar and click the search button.

Click on a movie to view its details in a modal.

## Technologies Used

HTML, CSS, JavaScript

Bootstrap 5 for responsive design

SCSS for styling

jQuery for handling DOM interactions

## Custom Styling

The project includes a custom SCSS setup with a defined theme color:
```scss
$theme-colors: map-merge($theme-colors, ("cyan-900": #004b54));
.text-custom-cyan {
  color: map-get($theme-colors, "cyan-900");
}
```
## Contributing

Feel free to fork this repository and submit a pull request with any improvements.
