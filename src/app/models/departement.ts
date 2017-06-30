export class Departement {
    depName: string;
    depAbrv: string;
    depRspnsbl: string;
    depPrncpl: string;
    introDep: string;

    constructor(depData: any){
        this.depName = depData.depName;
        this.depAbrv = depData.depAbrv;
        this.depRspnsbl = depData.depRspnsbl;
        this.depPrncpl = depData.depPrncpl;
        this.introDep = depData.introDep;
    }

}
