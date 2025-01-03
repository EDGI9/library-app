import { toast } from 'react-hot-toast';
import NotificationHandlerTypes from '../config/notification-handler-types';

export function NotificationHandler(
    type: string = NotificationHandlerTypes.ERROR,
    message: string,
) {
    //Triggers toast with specified Type and the message to display
    toast[type](message);
}
