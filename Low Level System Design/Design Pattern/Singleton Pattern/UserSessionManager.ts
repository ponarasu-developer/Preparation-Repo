// 🧩 UserSessionManager (TypeScript)

// Requirements:

// Singleton
// Store userId
// Methods:
// login(userId)
// logout()
// getUser()


class UserSessionManager {
    private static instance: UserSessionManager;

   private UserId : string; // This can be undefined → unsafe  (private userId: string | null = null;)
    public static getInstance() : UserSessionManager {
        if(!UserSessionManager.getInstance){ // You’re checking the method, not the instance.  if (!UserSessionManager.instance)  always check instance 
            UserSessionManager.instance = new UserSessionManager();
        }
        return UserSessionManager.instance
        
    }

    public login(userId:string) : boolean{
        // login logic

        return true;  // based on check
    }

    public logout():boolean{
        //logout logic

        return false;
    }

    public getUser(){

    }
}