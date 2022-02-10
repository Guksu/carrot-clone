import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import withHandler, { ResponseType } from "../../../libs/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  // +""을 통해 string으로 변환해준다.
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  // upsert로 간략하게 코드를 작성할 수 있다.
  // const user = await client.user.upsert({
  //   where: {
  //     ...payload,
  //   },
  //   create: {
  //     name: "Someone",
  //     ...payload,
  //   },
  //   update: {},
  // });

  // 원래는 user를 먼저 만들고 token을 줘야 하지만 connectOrCreate라는 메소드를 통해
  // 유저가 있으면 토큰만 유저와 연결하여 생성하고
  // 유저가 없으면 유저를 생성하고 토큰을 만들 수 있다.

  const token = await client.token.create({
    data: {
      payload: payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Someone",
            ...user,
          },
        },
      },
    },
  });

  return res.json({
    ok: true,
  });
}

export default withHandler({ method: "POST", handler, isPrivate: false });
