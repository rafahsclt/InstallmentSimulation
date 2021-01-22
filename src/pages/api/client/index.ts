import { NextApiRequest, NextApiResponse } from 'next'

import api from '../../../../api.json'

export default function hander(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET') {
        res.status(200).json(api.client)
    }
}