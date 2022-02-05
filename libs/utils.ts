// 함수를 만들어서 사용하면 `${}`와 같이 사용하는 것 보다 깔끔한 코드를 작성할 수 있다.
export function cls(...classnames: string[]) {
  return classnames.join("");
}
