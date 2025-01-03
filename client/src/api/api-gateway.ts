import { ErrorHandler } from './error-handler.js';
import BASE_URL from '../config/api-root.js';
import EventHandlerTypes from '../config/event-handler-types.js';

function ApiGateway() {
    async function request(endpoint, options = {}) {
        const url = `${BASE_URL}${endpoint}`;

        // Default headers
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        // Add Authorization token if available
        const token = localStorage.getItem('token');
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const config = {
            ...options,
            headers,
        };

        try {
            const response = await fetch(url, config);

            // Handle non-2xx responses
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'API Error');
            }

            // Return parsed JSON data
            return await response.json();
        } catch (error) {
            const status = EventHandlerTypes.ERROR;
            const message = error.message || 'API Gateway Error';
            ErrorHandler(status, message);
            throw error; // Re-throw error for caller to handle
        }
    }

    function get(endpoint, options = {}) {
        return request(endpoint, { method: 'GET', ...options });
    }

    function post(endpoint, body, options = {}) {
        return request(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
            ...options,
        });
    }
    
    function put(endpoint, body, options = {}) {
        console.log('2',body);
        return request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(body),
            ...options,
        });
    }

    function remove(endpoint, options = {}) {
        return request(endpoint, { method: 'DELETE', ...options });
    }

    return {
        get,
        post,
        put,
        remove,
    };
}

export default ApiGateway();
