import * as Yup from 'yup';

import Client from '../models/Client';

class ClientController {
  async store(req, res) {

    const schema = Yup.object().shape({
      barbeiro_id: Yup.number(),
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      numero: Yup.string().required(),
    });
    try {
      await schema.validate(req.body);
    } catch (err) {
      return res.status(422).json({ error: `Validation fails: ${err.message}` });
    }
    const userExists = await Client.findOne({ where: { numero: req.body.numero } });

    if (userExists) {
      return res.status(422).json({ error: 'usuario ja existe' });
    }
    const response = await Client.create(req.body);

    return res.status(201).json(response);
  }
  async index(req, res) {
    const response = await Client.findAll({ where: { barbeiro_id: req.userId } });

    return res.status(200).json(response)
  }
}

export default new ClientController();
