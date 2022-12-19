import { AccountStatesRes, ApiResponse, CommonPostRes, HttpMethod } from "../interfaces/services/rest.interface";
import { rest } from "./shared/rest.service";

const badEndMessage = 'Unable to read ENV';
const API_KEY = process.env.react_app_api_v3_auth || badEndMessage;


export async function addToFavorites(account_id:number, session_id: string, media_type: string, media_id:number, favorite:boolean): Promise<ApiResponse<CommonPostRes>> {
    const url = `account/${account_id}/favorite?api_key=${API_KEY}&session_id=${session_id}`;
    const body = {
        media_type:media_type,
        media_id: media_id,
        favorite: favorite
    }
    try {
        const response = await rest<CommonPostRes>(HttpMethod.POST, url,{},body);
        return response
    } catch (error) {
        console.error(error);
        throw error
    }
}
export async function addToWatchlist(account_id:number, session_id: string, media_type: string, media_id:number, watchlist:boolean): Promise<ApiResponse<CommonPostRes>> {
    const url = `account/${account_id}/watchlist?api_key=${API_KEY}&session_id=${session_id}`;
    const body = {
        media_type:media_type,
        media_id: media_id,
        watchlist: watchlist
    }
    try {
        const response = await rest<CommonPostRes>(HttpMethod.POST, url,{},body);
        return response
    } catch (error) {
        console.error(error);
        throw error
    }
}

export async function getIdMediaInformation(id:number, session_id: string, media_type: string): Promise<ApiResponse<AccountStatesRes>>{
    const url = `${media_type}/${id}/account_states?api_key=${API_KEY}&session_id=${session_id}`;
    try {
        const response = await rest<AccountStatesRes>(HttpMethod.GET, url);
        return response
    } catch (error) {
        console.error(error);
        throw error
    }
}