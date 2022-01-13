// const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];

export const SERVER_IP = "http://localhost:4000";

export const HEADERS = {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff', // reinforces the declared content-type
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'sameorigin'
};

export const LOGIN_TOKEN = '12345luggage';

// Use this line instead of the above if using Docker Toolbox
// export const SERVER_IP = windowsPlatforms.indexOf(window.navigator.platform) < 0 ? 'http://localhost:4000' : 'http://192.168.99.100:4000';