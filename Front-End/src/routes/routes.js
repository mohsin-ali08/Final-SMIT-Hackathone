const prodUrl = "http://localhost:5000/";
// const prodUrl = "https://final-smit-backend-fl2utncoo-mohsin-ali-s-projects.vercel.app/"; // Add the backend production URL here

// Set BASE_URL depending on the environment
export const BASE_URL = prodUrl;

export const AppRoutes = {

    // Auth Routes
    login: BASE_URL + "api/v1/auth/login",
    register: BASE_URL + "api/v1/auth/register",

    // User Routes
    getMyInfo: BASE_URL + "api/v1/user/get-my-info",

    // Send Password to Email
    sendLoginPassword: BASE_URL + "api/v1/user/send-email",

};