import { NextApiRequest, NextApiResponse } from 'next'

import api from '../../../../api.json'

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
    const { query: { cpf }} = req
  
    const client = api.client.filter(user => user.cpf === cpf)

    res.status(200).json(client)
  }