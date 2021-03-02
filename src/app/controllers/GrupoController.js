import * as Yup from 'yup';

import User from '../models/User';
import Grupo from '../models/Grupo';

class GrupoController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            user_id: Yup.number(),
        });

        try {
            await schema.validate(req.body);
        } catch (err) {
            return res.status(422).json({ error: `Validation fails: ${err.message}` });
        }
        req.body.user_id = req.userId
        const grupo = await Grupo.create(req.body);
        return res.status(201).json(grupo);
    }

    async buscarGrupos(req, res){
       const busca = await Grupo.findAll({
            where: {
                user_id: req.userId
            }
        })

        console.log(busca)

        return res.json(busca);
    }
}

export default new GrupoController();
