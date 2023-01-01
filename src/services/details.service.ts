import { DetailsInterface, ProviderResults, ReviewResults } from "../interfaces/details.interface";
import { ApiResponse, HttpMethod, PaginatedResponse } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";
const API_KEY = process.env.REACT_APP_API_V3_AUTH;

export async function getDetailReviews(movie_id:string): Promise<ReviewResults[]> {
    const url = `/movie/${movie_id}/reviews?api_key=${API_KEY}`;
    try {
        const response = await rest<PaginatedResponse<ReviewResults>>(HttpMethod.GET, url);
        return response.data.results || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}
export async function getFilmDetails(film_id:number, film_type: string='movie'): Promise<ApiResponse<DetailsInterface>> {
    const requested_data = 'reviews,details,images,keywords,videos,recommendations,similar,lists'
    const url = `${film_type}/${film_id}?api_key=${API_KEY}&append_to_response=${requested_data}`;
    try {
        const response = await rest<DetailsInterface>(HttpMethod.GET, url);
        return response
    } catch (error) {
        console.error(error);
        throw error
    }
}

export async function getFilmProviders(film_id:number, film_type: string='movie'): Promise<ApiResponse<ProviderResults>> {
    const url = `${film_type}/${film_id}/watch/providers?api_key=${API_KEY}`;
    try {
        const response = await rest<ProviderResults>(HttpMethod.GET, url);
        return response
    } catch (error) {
        console.error(error);
        throw error
    }
}