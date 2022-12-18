import { ReviewResults, Reviews } from "../interfaces/details.interface";
import { HttpMethod } from "../interfaces/services/rest.interface";
import { mapFilmResults } from "./film.service";
import { rest } from "./shared/rest.service";

export async function getDetailReviews(movie_id:string): Promise<ReviewResults[]> {
    const apiKey = process.env.REACT_APP_API_V3_AUTH;
    const url = `/movie/${movie_id}/reviews?api_key=${apiKey}`;

    try {
        const response = await rest<Reviews>(HttpMethod.GET, url);
        return response.data.results || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}