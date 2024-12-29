import { toast } from 'react-hot-toast';
import EventHandlerTypes from '../config/event-handler-types';

export function ErrorHandler(
    type: string = EventHandlerTypes.ERROR,
    message: string,
) {
    console.log(type, message);
    toast[type](message);
}
