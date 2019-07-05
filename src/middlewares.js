export const isAuthenticated = (request) => {
  if (!request.user) {
    throw Error('로그인이 필요합니다.');
  }
  return;
}
