import { PrismaClient } from "@prisma/client";

export default new PrismaClient();

//  client는 prisma가 스키마의 TS타입을 자동으로 만들어준다
// 클라이언트 설치 후  npx prisma generate로 실행

// 또한 다음과 같은 기능을 사용할 수 있다.
// const client = new PrismaClient();
// client.user.create({
//   data: {
//     name: "first",
//     phone: 1111111,
//   },
// });
