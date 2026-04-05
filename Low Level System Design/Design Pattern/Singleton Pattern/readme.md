Singleton = “Restrict object creation to one instance and provide global access”
So 2 constraints:

Singleton requires shared state


❌ No multiple objects
✅ One global access point

*When NOT to Use Singleton*



1.Makes testing harder (global state)
2.Tight coupling
3.Hidden dependencies

👉 Use only when:
1. Exactly one instance is logically required

Module-based Singleton:

export const config = {
  apiUrl: "prod-url"
};

Example  Type Script - 

class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public sayHello() {
    console.log("Hello from Singleton");
  }
}

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true ✅

Example  -- Dart

class Singleton {
  static final Singleton _instance = Singleton._internal();

  factory Singleton() {
    return _instance;
  }

  Singleton._internal(); // private constructor

  void sayHello() {
    print("Hello from Singleton");
  }
}



Questions

export const server_error_text = (code, message) => {
  switch (code) {
    case 500:
      return 'Internal Server Error';
    case 501:
      return ' Not Implemented';
    case 502:
      return 'Bad Gateway';
    case 503:
      return 'Service Unavailable';
    case 404:
      if (message !== undefined) {
        return message;
      } else {
        return 'Page not Found';
      }

    case 400:
      if (message !== undefined) {
        return message;
      } else {
        return 'Incorrect email or password, try again.';
      }
    case 403:
      return 'Invalid User.';
    case 401:
      if (message !== undefined) {
        return message;
      } else {
        return 'Please login again.';
      }

    default:
      return 'Error. Something Went Wrong.';
  }
};


if this is a singleton function ..?

“No, this is a stateless utility function. Singleton is used when we need shared state or a single instance across the application.”

Question - 2

export const cache = {
  data: {},

  set(key, value) {
    this.data[key] = value;
  },

  get(key) {
    return this.data[key];
  }
};

This is a module-based Singleton object because it maintains shared mutable state and is reused across the application due to module caching.