export interface Repository {
    list(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(data: any): Promise<any>;
    delete(data: any): Promise<any>;
    update(id: string, data: any): Promise<any>;
}
