const dbCon = require("../configuracion/Config");

function listarInvitados(req, res, next){
    dbCon.any('SELECT * FROM guest')
    .then(
        function (data){
            res.json({
                status:"OK",
                resultado:data,
                mensaje: "Consulta de invitados exitosa",
            });
        }
    );
}

module.exports = {
    listarInvitados: listarInvitados,
}