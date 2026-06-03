// Api Validation
// status code = 200,202,201,400,300

let status_code = 500;
switch (status_code) {
    case 200:
        console.log("✅ Success: Request fulfilled successfully.");
        break;
    case 201:
        console.log("✅ Created: Resource created successfully.");
        break;
    case 400:
        console.log('⚠️ Bad Request: The server could not understand the request.');
        break;
    case 401:
        console.log('🔒 Unauthorized: Authentication is required.');
        break;
    case 403:
        console.log('🚫 Forbidden: You do not have permission to access this resource.');
        break;
    case 404:
        console.log('❌ Not Found: The requested resource could not be found.');
        break;
    case 500:
        console.log('💥 Internal Server Error: Something went wrong on the server.');
        break;
    case 503:
        console.log('⏳ Service Unavailable: The server is temporarily unable to handle the request.');
        break;
    default:
        console.log(`❓ Unknown Status Code: ${statusCode}`);
}