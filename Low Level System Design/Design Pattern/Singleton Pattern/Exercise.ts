// Problem:

// Design a Logger that:

// Stores log history
// Method: log(message)
// Method: getLogs()
// Expectation:
// Shared log list across app

// 👉 Focus:
// Shared state
// Verify same instance


class Logger {
   private messages : string[] = [];

   private static instance: Logger;

   private constructor() {}

   public log(message:string){
   this.messages.push(message)
   };
   public getLogs(){
    return this.messages;
   }
}

// 👉 Problem:

// ❌ There is no way to access the instance

// So:

// You prevented new Logger() ✔
// But you also blocked usage completely ❌
// 👉 You forgot:

// getInstance() method

// This is the heart of Singleton

class Loggers {
    private messages: string[] = [];
    private static instance: Loggers;
  
    private constructor() {}
  
    public static getInstance(): Loggers {
      if (!Loggers.instance) {
        Loggers.instance = new Loggers();
      }
      return Loggers.instance;
    }
  
    public log(message: string) {
      this.messages.push(message);
    }
  
    public getLogs() {
      return this.messages;
    }
  }