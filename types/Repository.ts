export type Repository = {
    __typename: string;
    id: string;
    name: string;
    description: string;
    url: string;
    repositoryTopics: {
        nodes: [{ __typename: string; topic: { id: string; name: string } }];
    };
    primaryLanguage: {
        color: string;
        id: string;
        name: string;
    };
    forkCount: number;
    stargazerCount: number;
};
