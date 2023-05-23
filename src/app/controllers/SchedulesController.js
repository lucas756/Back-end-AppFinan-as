import * as Yup from 'yup';

import Schedules from '../models/Schedules';

class SchedulesController {
  async store(req, res) {
    const schema = Yup.object().shape({
      date_schedule: Yup.string(),
      status: Yup.string().required(),
      client_id: Yup.number().required(),
      barbeiro_id: Yup.number(),
      service_id: Yup.number().required(),
    });
    try {
      await schema.validate(req.body);
    } catch (err) {
      return res.status(422).json({ error: 'valdação falhou' });
    }
    const serviceExists = await Schedules.findOne({ where: { date_schedule: req.body.date_schedule } });

    if (serviceExists) {
      return res.status(422).json({ error: 'Service already exists.' });
    }
    req.body.barbeiro_id = req.userId
    const response = await Schedules.create(req.body);
    return res.status(201).json(response);
  }
  async index(req, res) {
    const response = await Schedules.findAll({
      where: { barbeiro_id: req.userId },
      include: [
        {
          model: Service,
          as: 'services',
          attributes: ['id', 'preço', 'tipo'],
        },
      ],
    });

    return res.status(200).json(response)
  }
}

export default new SchedulesController();
