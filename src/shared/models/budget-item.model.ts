export class BudgetItem
{
    /* _description:string;
    _amount:number;

    constructor(description:string,amount:number)
    {
        this._description=description;
        this._amount=amount;
    } */
    //TypeScript gives use the abillity to use like this:
    constructor(public description: string, public amount: number)
    {}
}