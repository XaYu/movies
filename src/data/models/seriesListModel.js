class SeriesListModel {
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
    original_name: originalTitle,
    original_language: originalLanguage,
    name: title,
    overview,
    poster_path: posterPath,
    genre_ids: genreIds,
  }) {
    return new SeriesListModel(
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

export default SeriesListModel;
