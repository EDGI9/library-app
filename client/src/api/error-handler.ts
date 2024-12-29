import { toast } from 'react-hot-toast';

export function ErrorHandler(type, message: string) {
    console.log(type, message);
    toast.error(message);
}
