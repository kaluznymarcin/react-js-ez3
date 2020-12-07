export const UNSPLASH_BASE_URL = "https://api.unsplash.com";
export const UNSPLASH_ACCESS_KEY = "3f664ef5e4273eb908008a62f5bb36a44010ddbd641644700adac1dcd8a48e49";


/*
The first mistake is called Callback Hell. This is a pattern in which each callback function contains the code to request the next unit of work. That request provides a callback that also requests another unit of work, and so on. Programs written this way are difficult to read, difficult to maintain, and brittle.

The second mistake is called Promises. In their original form, promises were brilliant. They were created to support the development of secure, distributed programs. Unfortunately, when promises migrated to JavaScript, they lost all of their new paradigm features. All that is left is an awkward control flow mechanism. Promises were not designed to manage local control flow, which is why they do not do it very well. They are definitely an improvement over callback hell, but they are not satisfactual.

The third mistake is called Async Await. It is a pair of keywords that are used to decorate ordinary sequential code and magically transform it into eventual code. It is similar to ES6 generators in that the code you write is quite different than the code you get. To its credit, it masks much of the disappointment of promises. The thing that is most liked about async await is that you can continue to write in the style of the old paradigm. That is also the biggest problem with it.

The new paradigm is important. Understanding the new paradigm can be difficult because it is new, but that is how we make progress. Async await gives us a way to be productive without actually making progress. Its users are writing code that they do not fully understand. That is never a good thing. A growing problem is coders who are putting the async and await decorators everywhere. Because they do not understand what they do, they do not understand how to use them well. We should not be trying to deny or hide the next paradigm. We should be embracing it.

Something that all three mistakes have in common is the tight coupling of logic and control flow. That yields poor cohesion because too many disparate activities are pasted together. It is better to separate them.

Douglas Crockford. „How JavaScript Works”
*/
