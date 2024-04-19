import {
    getServerSession, type NextAuthOptions,
} from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { userService } from './services/userService'

export const authOptions: NextAuthOptions = {
    session:{
        strategy: 'jwt', //The default strategy is JWT when no adapter is defined, we redefined it here to mkae it obvious what stratgey we use
    },
    callbacks:{
        async jwt({token, account, profile}){
            // This is wehre you want to store the userID in the User Object. The id is coming from the authorize callback and is available in the account parameter when the type is 'credentials'. This is ehre you can also add additional information from databse ot external API to the token like user prefences access level...etc.
            console.log("----------------JWT----------------")
            console.log({token}, {account}, {profile})
            if(account && account.type === 'credentials'){
                token.userId = account.providerAccountId
                // This Id that is coming from authorize() callback
            }
            return token;
        },
        async session({session, token, user}){
            // After the token is created in JWT call back we need to pass the userID to true suer.id so it will beavaible to the UI
            // Because the user type only consits of name, email ...etc we will create a type definition to add id in to the user object later
            console.log("----------------Session----------------")
            console.log({session}, {token}, {user})
            session.user.id = token.userId
            return session
        },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        //   },
    },
    pages:{
        signIn: '/login', //custom sign in path
        signOut: '/'
        /*
        signOut: '/path',
        error: '/error',
        verifyRequest: '/requestVerification',
        newUser: '/newUser'
        */
    },
    providers: [
        Credentials({
            name:"Credentials",
            credentials: {
                username: {label: "Username", type:"text", placeholder:"username"},
                password: {label: "Password", type:"password"}
            },
            async authorize(credentials, req){
                const {username, password} = credentials as {
                    username: string,
                    password: string
                };

                return userService.authenticate(username, password);
                // Here we authenticate the username and password using the userService that we created earlier
            }
        })
    ]
}

export const getServerAuthSession = () => getServerSession(authOptions)