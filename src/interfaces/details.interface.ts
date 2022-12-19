import { PaginatedResponse } from "./services/rest.interface";
import { IFilm, MediaType } from "./film.interface";

export interface DetailsInterface {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: any;
    budget?: number;
    genres?: Genres[];
    homepage?: string;
    id?: number;
    images?: Images;
    imdb_id?: string,
    keywords?: {
        keywords: Keywords[]
    },
    lists?: PaginatedResponse<List>;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCompany[];
    recommendations?: PaginatedResponse<IFilm>;
    release_date?: string;
    revenue?: string;
    reviews?: PaginatedResponse<ReviewResults>;
    runtime?: string;
    similar?: PaginatedResponse<IFilm>;
    spoken_languages?: Language[];
    status?: string;
    tagline?: string;
    title?: string;
    name?:string;
    video?: boolean;
    videos?: {
        results: Video[]
    };
    vote_average?: string;
    vote_count?: string;
    media_type?: MediaType;
}


interface Video {
    id?: string;
    iso_639_1?: string;
    iso_3166_1?: string;
    key?: string;
    name?: string;
    official?: boolean;
    published_at?: string;
    site?: string;
    size?: number;
    type?: string;
}

interface Language {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
}


interface ProductionCompany {
    id?: number;
    logo_path?: string;
    name?: string;
    origin_countr?: string
}

interface List {
    description?: string;
    favorite_count?: number;
    id: number;
    iso_639_1?: string;
    item_count?: number;
    list_type?: string;
    name?: string;
    poster_path?: string;
}

interface Keywords {
    id: number,
    name: string
}

interface Images {
    backdrops?: MediaDetail[];
    logos?: MediaDetail[];
    posters?: MediaDetail[];
}

interface MediaDetail {
    aspect_ratio?: number;
    file_path?: string;
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number;
}

interface Genres {
    id?: number;
    name?: string;
}

export interface ReviewResults {
    author: string;
    author_details: ReviewAuthorDetails;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
}

export interface ReviewAuthorDetails {
    name?: string;
    username?: string;
    avatar_path?: string;
    rating?: number;
}


export interface HeroComponent {
    details: DetailsInterface
}

export interface AccountOptionsInterface {
    favorite?: boolean;
    id?: number;
    rated?: boolean;
    watchlist?: boolean;
}

export interface ProviderResults {
    results?: Record<string, ProviderOptions>
}

interface ProviderOptions {
    flatrate: Provider[];
    rent: Provider[];
    buy: Provider[];
}

export interface Provider{
    display_priority?: number;
    logo_path?: string;
    provider_id?: number;
    provider_name?: string;
}

export interface ProviderDetails {
    operation: 'flatrate' | 'rent' | 'buy';
    provider: Provider
}
