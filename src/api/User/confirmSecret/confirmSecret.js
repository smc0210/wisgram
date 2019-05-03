import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        confirmSecret: async (_, args) => {
            const { email, secret } = args;
            const user = await prisma.user({ email });

            if (user.loginSecret === secret) {
                // JWT
                return "TOKEN";
            } else {
                throw Error("잘못된 email/secret 조합입니다.")
            }
            
        }
    }
}