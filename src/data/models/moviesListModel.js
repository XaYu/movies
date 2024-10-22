class MoviesListModel {
  constructor(
    id,
    originalTitle,
    originalLanguage,
    title,
    overview,
    posterPath,
    genreIds,
  ) {
    this.id = id;
    this.originalTitle = originalTitle;
    this.originalLanguage = originalLanguage;
    this.title = title;
    this.overview = overview;
    this.posterPath = posterPath;
    this.genreIds = genreIds;
  }

  static buildFromJSON({
    id,
    original_title: originalTitle,
    original_language: originalLanguage,
    title,
    overview,
    poster_path: posterPath,
    genre_ids: genreIds,
  }) {
    return new MoviesListModel(
      id,
      originalTitle,
      originalLanguage,
      title,
      overview,
      posterPath,
      genreIds,
    );
  }
}

export default MoviesListModel;
