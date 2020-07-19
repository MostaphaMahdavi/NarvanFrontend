export interface ILoginUserAccount{
    status:string,
    code:number,
    data:{
        token:string,
        expireTime:number,
        firstName:string,
        lastName:string,
        userId:number,
        email:string,
        address:string
    }
}