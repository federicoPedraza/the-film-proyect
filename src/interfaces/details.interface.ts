export interface Reviews {
    id?: number;
    page?: number;
    results?: ReviewResults[];
    total_pages?: number;
    total_results?: number;
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