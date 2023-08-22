export type Repository = {
    id: string;
    name: string;
    description: string;
    url: string;
    primaryLanguage: {
        color: string;
        id: string;
        name: string;
    };
    forkCount: number;
    stargazerCount: number;
};
