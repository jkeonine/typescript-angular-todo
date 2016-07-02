import {ITodoItem, IStorageService} from '../../model';

export const NAME = 'itemStorageService';

export class service implements IStorageService {
    STORAGE_ID = 'todos-angularjs-typescript';

    get(): ITodoItem[] {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
    }

    put(todos: ITodoItem[]) {
        localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
    }
}