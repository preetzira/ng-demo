export class Cart{
    private _id: number
    private _count: number

    get id(){
        return this._id
    }

    get count(){
        return this._count
    }

    set id(value){
        this._id = value
    }

    set count(value){
        this._count = value
    }

    constructor(id?: number, count?: number){
        this.id = id
        this.count = count
    }
}