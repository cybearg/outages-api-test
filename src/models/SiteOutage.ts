class SiteOutage {
    id: string;
    name?: string;
    begin: Date;
    end: Date;

    constructor(id:string, begin:string, end:string){
        this.id = id;
        this.begin = new Date(begin);
        this.end = new Date(end);
    }

}

export default SiteOutage;