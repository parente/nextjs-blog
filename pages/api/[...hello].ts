import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const hello = req.query.hello as string[]
  res.status(200).json({text: hello.join(' ')})
}
