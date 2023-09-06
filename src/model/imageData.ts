export class ImageData {
    id: string;
    name: string;
    url: string;
    like: number;
    category: string;
    constructor(id: string, name: string, url: string, like: number, category: string) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.like = like;
        this.category = category;
    }
}
