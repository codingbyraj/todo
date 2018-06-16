import { StaticInjector } from "@angular/core/src/di/injector";

export class Todo {
    id: number;
    data: string;
    status: boolean;
    isEditable:boolean;

    constructor(id, data, status, isEditable) {
        this.id = id;
        this.data = data;
        this.status = status;
        this.isEditable = isEditable;
    }
}