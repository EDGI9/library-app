import { AuthorDrivenService } from '../../index';

export function connectToGetDrivenSide() {
    return AuthorDrivenService.get();
}

export function connectToUpdateDrivenSide() {
    return AuthorDrivenService.update();
}
