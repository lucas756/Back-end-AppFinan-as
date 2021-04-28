const xlsxj = require("xlsx-to-json");
import File from '../models/File';
import Parcela from '../models/Parcela';

class ParcelaController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    var caminho = "C:/Users/salle/workspace/sistema-do-de/tmp/uploads/"

    const file = await File.create({ name, path });
    processFile(caminho, file.path, req)
    return res.json(file);
  }
  async index(req, res){
      const parcelas = await Parcela.findAll({
        where: {
          grupo_id: req.query.grupo_id
        }
      })
      return res.json(parcelas)
  }

}
function processFile(caminho, nome, req) {
  xlsxj({
    input: caminho + nome,
    output: `output.json`,
    sheet: 'Planilha1'
  }, function (err, data) {
    if (err) {
      console.error(err);
    } else {
      addParcelas(data, req)
    }
  });
}

function addParcelas(data, req) {
  data.forEach(e=>{
    e.valor = e.valor.replace('R$', '').replace(',','')
    e.juros = e.juros.replace('R$', '').replace(',','')
    e.user_id = req.userId
    e.grupo_id = Number(req.body.grupo_id)
    console.log(e);
    Parcela.create(e);
  }); 
};

export default new ParcelaController();
