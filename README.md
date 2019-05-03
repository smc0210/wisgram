# wisgram

Instagram clone with nodejs prisma react react native

## User Stories

- [ ] Log in
- [ ] Like / Unlike a photo
- [ ] Comment on a photo
- [ ] Search by user
- [ ] Search by location
- [ ] See user profile
- [ ] Follow / Unfollow User
- [ ] See the full photo
- [ ] Edit my profile
- [ ] Create account
- [ ] Upload a photo
- [ ] Edit the photo (Delete)
- [ ] See the feed

## Required
- yarn ( npm )
- NodeJS
- GraphQL
- Prisma (https://app.prisma.io)
- React

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

`package.json` scripts 참조

```bash
# 필요한 패키지 설치
yarn add

# prisma deploy & generate
yarn prisma

# nodemon graphql server run
yarn dev
```