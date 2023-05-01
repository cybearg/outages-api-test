class SiteOutage {
    id: string;
    name?: string;
    begin: Date;
    end: Date;

    constructor(id:string, begin:string, end:string, name:string =''){
        this.id = id;
        this.begin = new Date(begin);
        this.end = new Date(end);
        this.name = name;
    }

}

export default SiteOutage;