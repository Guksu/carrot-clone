import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/withHandler";

function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ ok: true });
}

export default withHandler("POST", handler);
