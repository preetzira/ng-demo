export class Recipe{
    public id : number
    public title : string;
    public description : string;
    public image : string;


    constructor(title: string,desc: string, image: string,id?:any){
        this.title = title
        this.description = desc
        this.image = image
        this.id = id || Date.now()
    }
}