interface Envs {
    prod: string;
    [key: string]: string;
}

export const envs: Envs = {
    prod: 'https://auto.am',
};