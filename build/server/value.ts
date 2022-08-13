let port : number;
if(process.env.PORT == null || undefined || ""){
    port = 80;
}else{
    port = (process.env.PORT as unknown) as number
}


module.exports = {
    port
}