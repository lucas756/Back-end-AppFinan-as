import * as Yup from 'yup';

import Services from '../models/Services';

class ServicesController {
  async store(req, res) {
    const schema = Yup.object().shape({
      barbeiro_id: Yup.number(),
      Tipo: Yup.string().required(),
      preço: Yup.number().required(),
    });
    try {
      await schema.validate(req.body);
    } catch (err) {
      return res.status(422).json({ error: `Validation fails: ${ err.message }` });
    }
    const serviceExists = await Services.findOne({ where: {Tipo: req.body.Tipo} });

    if (serviceExists) {
      return res.status(422).json({ error: 'Service already exists.' });
    }
    req.body.barbeiro_id = req.userId
    console.log(req.body);
    const response = await Services.create(req.body);

    return res.status(201).json(response);
  }
  async index(req, res){
    const response = await Services.findAll({where: {barbeiro_id: req.userId}});

    return res.status(200).json(response)
  }
}

export default new ServicesController();
