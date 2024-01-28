const readlineSync = require('readline-sync');

// Movie Class to display id and title
class Movie {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

// Movie Rental class
class MovieRentalSystem {
  constructor() {
    this.movies = [];
    this.rentedMovies = [];
  }

  // method to display available Movies by accessing the movie class
  displayAvailableMovies() {
    console.log('Available Movies:');
    this.movies.forEach(movie => {
      console.log(`${movie.id}. ${movie.title}`);
    });
  }

  // method to rent a Movie based on the ID chosen 
  rentMovie(movieId) {
    const selectedMovie = this.movies.find(movie => movie.id === movieId);
    if (selectedMovie) {
      this.rentedMovies.push(selectedMovie);
      this.movies = this.movies.filter(movie => movie.id !== movieId);
      console.log(`You have rented "${selectedMovie.title}".`);
    } else {
      console.log('Invalid movie ID. Please try again.');
    }
  }

  // Method for checking returned and movie after renting
  returnMovie(movieId) {
    const returnedMovie = this.rentedMovies.find(movie => movie.id === movieId);
    if (returnedMovie) {
      this.movies.push(returnedMovie);
      this.rentedMovies = this.rentedMovies.filter(movie => movie.id !== movieId);
      console.log(`You have returned "${returnedMovie.title}".`);
    } else {
      console.log('Invalid movie ID. Please try again.');
    }
  }
}

// Sample data
const movieSystem = new MovieRentalSystem();
movieSystem.movies.push(new Movie(1, 'Movie A'));
movieSystem.movies.push(new Movie(2, 'Movie B'));
movieSystem.movies.push(new Movie(3, 'Movie C'));

// Main program loop
while (true) {
  console.log('\n1. Display Available Movies');
  console.log('2. Rent a Movie');
  console.log('3. Return a Movie');
  console.log('4. Exit');

  const choice = readlineSync.question('Enter your choice: ');

  switch (choice) {
    case '1':
      movieSystem.displayAvailableMovies();
      break;
    case '2':
      const rentId = readlineSync.question('Enter the ID of the movie you want to rent: ');
      movieSystem.rentMovie(parseInt(rentId));
      break;
    case '3':
      const returnId = readlineSync.question('Enter the ID of the movie you want to return: ');
      movieSystem.returnMovie(parseInt(returnId));
      break;
    case '4':
      process.exit();
    default:
      console.log('Invalid choice. Please try again.');
  }
}
