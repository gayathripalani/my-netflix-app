export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Video {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}  
  
export interface RootState {
    movies: {
        nowPlayingMovies: Movie[];
        topRatedMovies: Movie[];
        popularMovies: Movie[];
        upcomingMovies: Movie[];
        trailerVideo: Video;
    };
    gpt: {
        showGptSearch: boolean;
        movieResults: [Movie[]];
        movieNames: string[];
    };
    config: {
        lang: string;
    }; 
    user: User;
}

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string | null;
}
interface Language {
    search: string;
    gptSearchPlaceholder: string;
  }
  
export interface Languages {
    en: Language;
    no: Language;
    fr: Language;
  }