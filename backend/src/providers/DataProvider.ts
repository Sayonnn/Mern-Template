import { typeError } from "./TypeProvider";

export const origins:string[] = [
    `http://localhost:3000`,
    `http://localhost:3001`,
    `http://localhost:3002`,
    `http://localhost:5173`,
]
export const errors: typeError[] = [
    { status: 400, message: "Bad Request: The server could not understand the request due to invalid syntax." },
    { status: 401, message: "Unauthorized: The client must authenticate itself to get the requested response." },
    { status: 403, message: "Forbidden: The client does not have access rights to the content." },
    { status: 404, message: "Not Found: The server can not find the requested resource." },
    { status: 405, message: "Method Not Allowed: The request method is known by the server but has been disabled and cannot be used." },
    { status: 409, message: "Conflict: The request could not be completed due to a conflict with the current state of the target resource." },
    { status: 413, message: "Payload Too Large: The request entity is larger than limits defined by server." },
    { status: 415, message: "Unsupported Media Type: The media format of the requested data is not supported by the server." },
    { status: 429, message: "Too Many Requests: The user has sent too many requests in a given amount of time." },
    { status: 500, message: "Internal Server Error: The server has encountered a situation it does not know how to handle." },
    { status: 502, message: "Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server." },
    { status: 503, message: "Service Unavailable: The server is not ready to handle the request." },
    { status: 504, message: "Gateway Timeout: The server is acting as a gateway or proxy and did not receive a timely response from the upstream server." }
];
