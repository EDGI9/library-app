import { toast } from 'react-hot-toast';
import EventHandlerTypes from '../config/event-handler-types';

export function ErrorHandler(
    type: string = EventHandlerTypes.ERROR,
    message: string,
) {
    //Triggers toast with specified Type and the message to display
    toast[type](message);
}
