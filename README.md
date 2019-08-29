# wisgram

Instagram clone with nodejs prisma react react native

## User Stories

- [x] Create account
- [x] Request Secret
- [x] Confirm Secret (Login)
- [x] Like / Unlike a photo
- [x] Comment on a photo
- [x] Search by user
- [x] Search by location
- [x] Follow / Unfollow User
- [x] Edit my profile
- [x] See user profile
- [x] See my profile
- [x] See the full photo
- [x] Upload a photo
- [x] Edit the photo (Delete)
- [x] See the feed
- [ ] See room
- [ ] Send private Message
- [ ] Receive Message (Realtime)

## Required

- yarn ( npm )
- NodeJS
- GraphQL
- Prisma (https://app.prisma.io) / 계정필요
- React
- sendGrid (https://app.sendgrid.com/) / 계정필요

## Usage

### prisma 설치

```bash
# brew 설치 권장
brew install prisma
# or
npm install -g prisma
# or
yarn global add prisma
```

`prisma init`을 `git clone` 받아서 또 해야하는지는 확인해봐야됨.
prisma service 생성시 한번 셋팅으로 끝인지 아닌지 해보고 재작성 필요!

아닐경우 `prisma deploy`, `prisma generate` 로 확인

> `prisma generate`명령어로 생성되는 generated 폴더는 git으로 관리하지 않아서 gitignore에 등록되어 있음

`package.json` scripts 참조

```bash
# 필요한 패키지 설치
yarn add

# prisma deploy & generate
yarn prisma

# nodemon graphql server run
yarn dev
```
