var port;
if (process.env.PORT == null || undefined || "") {
    port = 80;
}
else {
    port = process.env.PORT;
}
module.exports = {
    port: port
};
