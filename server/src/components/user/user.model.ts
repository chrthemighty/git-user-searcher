export interface User {
    username: string;
    avatar: string;
    following: number;
    followers: number;
}

export interface UserSearchResponse {
    login: string;
}

export interface UserProfileResponse {
    login: string;
    avatar_url: string;
    followers: number;
    following: number;
}