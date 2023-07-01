export class Pokemon {
    _id?: string;
    pokeNum: number;
    pokeName: string;
    pokeDesc: string;
    pokeType: string;
    pokeImg: string;

    constructor(num: number, name: string, desc: string, type: string, image: string) {
        this.pokeNum = num;
        this.pokeName = name;
        this.pokeDesc = desc;
        this.pokeType = type;
        this.pokeImg = image;
    }
}