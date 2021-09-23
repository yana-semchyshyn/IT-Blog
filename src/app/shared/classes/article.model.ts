import { IArticle } from "../interfaces/article.interface";

export class Article implements IArticle {
    constructor(
        public id: number,
        public category: string,
        public image: string,
        public title: string,
        public shortDescription: string,
        public longDescription: string,
    ){}
}