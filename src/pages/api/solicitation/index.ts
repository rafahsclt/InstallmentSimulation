import { NextApiRequest, NextApiResponse } from 'next'

import server from '../../../../server.json'

export default function hander(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET') {
        res.status(200).json(server.solicitation)
    }
}