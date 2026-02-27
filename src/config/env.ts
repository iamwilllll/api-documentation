import 'dotenv/config';

export const env = {
    isDev: process.env.NODE_ENV === 'development',
    PORT: process.env.PORT || 3000,
    baseUrl: process.env.BASE_URL || '',

    DB: {
        USER: process.env.DATABASE_USER || '',
        PASS: process.env.DATABASE_PASSWORD || '',
        URL: process.env.DATABASE_URL || '',
    },
};
