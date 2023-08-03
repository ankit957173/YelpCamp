# YelpCamp

This is a simple web application called YelpCamp that allows users to register, log in, and create their past camping details. Users can also view and comment on other users' camping experiences after signing up and logging in.

## Installation

1. Clone the repository to your local machine.

   ```
   git clone https://github.com/ankit957173/YelpCamp.git
   ```
2. Navigate to the project directory.

   ```
   cd YelpCamp
   ```
3. Install the required dependencies.

   ```
   npm install
   ```
4. Set up the database.

   - The application uses MongoDB as the database. Make sure you have MongoDB installed and running on your machine.
5. Start the application.

   ```
   node app.js
   ```
6. Open your web browser and visit `http://localhost:3000` to access the application.

## Usage

1. Register a new user account:

   - Visit the homepage and click on the "Register" button.
   - Fill out the registration form with your desired username, email address, and password.
   - Click on the "Sign Up" button to create your account.
2. Log in to your account:

   - On the homepage, click on the "Login" button.
   - Enter your registered email address and password.
   - Click on the "Log In" button to log in.
3. Create a camping entry:

   - After logging in, click on the "New Campground" button.
   - Fill out the form with the details of your camping experience, including the title, image URL, price, and description.
   - Click on the "Submit" button to save your entry.
4. View and edit your camping entries:

   - To view your camping entries, click on the "Campgrounds" link in the navigation menu.
   - From the list of campgrounds, you can click on a specific campground to view its details.
   - If you are the owner of the campground, you will see an "Edit" button that allows you to modify the details of the campground.
5. Comment on other users' camping entries:

   - To view other users' camping entries, click on the "Campgrounds" link in the navigation menu.
   - Click on a campground to view its details.
   - Scroll down to the comments section and enter your comment in the provided input field.
   - Click on the "Submit" button to post your comment.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- HTML
- CSS
- JavaScript

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

This project is based on the Web Development Bootcamp course by Colt Steele on Udemy.
