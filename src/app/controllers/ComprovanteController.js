import * as Yup from 'yup';

import Comprovante from '../models/Comprovante';
import Parcela from '../models/Parcela';
import File from '../models/File';

class ComprovanteController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            parcelas_id: Yup.number().required(),
        });

        try {
            await schema.validate(req.body);
        } catch (err) {
            return res.status(422).json({ error: `Validation fails: ${err.message}` });
        }
        
        var file = await uploadFile(req);
        if(file){
            req.body.user_id = req.userId
            req.body.id_imagem = file.dataValues.id
            
            const comprovante = await Comprovante.create(req.body);
            await updateParcela(req);
            return res.status(201).json(comprovante);
        }else{
            return res.status(400).json({error: 'Essa parcela já tem um comprovante'});
        }
    }
}

async function uploadFile(req) {
    var exists = await Comprovante.findOne({ where: { parcelas_id: req.body.parcelas_id } })
    console.log(exists);
    if(!exists){
        const { originalname: name, filename: path } = req.file;
        const file = await File.create({ name, path });
        return file;
    }
    return false
}

async function updateParcela(req) {
    const parcela = await Parcela.findByPk(req.body.parcelas_id);
    console.log(parcela.status)
    parcela.status = 'Pago';
    await parcela.save();
}

export default new ComprovanteController();
