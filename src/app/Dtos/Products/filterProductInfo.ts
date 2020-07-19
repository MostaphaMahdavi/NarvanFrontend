import { productInfo } from './productInfo';

export class filterProductInfo {
    constructor(

        public Title: string,
        public StartPrice: number,
        public EndPrice: number,
        public PageId: number,
        public PageCount: number,
        public ActivePage: number,
        public StartPage: number,
        public EndPage: number,
        public TakeEntity: number,
        public SkipEntity: number,

        public Products: productInfo[]



    ) { }
}