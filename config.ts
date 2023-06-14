interface configType {
    BASE_API_URL: string;
    BASE_API_URI: string;
}

const config: configType = {
    BASE_API_URL: import.meta.env.VITE_BASE_API_URL,
    BASE_API_URI: import.meta.env.VITE_BASE_API_URI  
};

export default config;