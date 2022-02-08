import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

// upsert로 간략하게 코드를 작성할 수 있다.

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Someone",
      ...payload,
    },
    update: {},
  });

  return res.status(200).end();
}

export default withHandler("POST", handler);
