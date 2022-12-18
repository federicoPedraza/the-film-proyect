import ColorThief from 'color-thief-react'
import { ReducerState } from 'react';

export const getPoster = (posterUrl?: string) => {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    return imageBaseUrl + posterUrl;
}

export const getDominantColor = (posterUrl: string) => {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500' + posterUrl;

}