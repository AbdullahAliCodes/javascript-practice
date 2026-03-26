// we have a netflix movies library
// create a Movie class that has the following 
// attributes: id, title, starring, genres 
// functions: addGenre(genre), addStars(...stars)
// create a movie object harryPotter 

class Movie {
    constructor(id, title, starring, genres) {
        this.id = id;
        this.title = title;
        this.starring = starring;
        this.genres = genres;
    }

    addGenre(genre) {
        this.genre = [...this.genre, genre];
    }
    
    addStars(...stars) {
        this.starring = [...this.starring, ...stars]
    }
}

const harryPotter = new Movie(1, "Hairy Potter", ["Helen Joseph", "john Lee"], "fantasy");

console.log(harryPotter);

harryPotter.addGenre("drama");
harryPotter.addStars("Robert Downey Jr", "Evernesence", "Bra Joe")

console.log(harryPotter);