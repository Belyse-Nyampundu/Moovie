

export function filterMovies(movies, select) {
    return movies.filter((movie) => {
      if (select.toLowerCase() === "all") {
        return true;
      } else if (select.toLowerCase() === "incomplete") {
        return !movie.completed;
      } else if (select.toLowerCase() === "completed") {
        return movie.completed;
      }
    });
  }