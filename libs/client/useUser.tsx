import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

// swr은 server에서 data를 get하는데 특화된 라이브러리다.
// swr은 data를 캐싱할 수 있으므로 caching을하면 모든 component에 logincheck 코드 (useUser)를 사용하지 않아도 된다.

interface UserData {
  ok: boolean;
  profile: User;
}

const fetcher = (url: string) => {
  fetch(url).then((response) => response.json());
};

export default function useUser() {
  const { data, error } = useSWR<void | any | UserData>(
    "/api/users/me",
    fetcher
  );
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter");
    }
  }, [data, router]);
  // const [user, setUser] = useState();
  // const router = useRouter();
  // useEffect(() => {
  //   fetch("/api/users/me")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (!data.ok) {
  //         return router.replace("/enter");
  //       }
  //       setUser(data.profile);
  //     });
  // }, [router]);

  return { user: data?.profile, isLoading: !data && !error };
}
