# Make your React library RSC compatible
This guide is intended for library authors or maintainers who wish to make their libraries RSC compatible. **It's incomplete now and will be updated as i learn more.**

## The problem

React now has different types of component which has different APIs available to them.
* **Recat Server Component (RSC)** 
React Server Component is a new feature introduced in React 18. It allows developers to write React components which **can only be rendered on the server**. It can't use any client-side hooks (useState, etc) and Web APIs. It can use Node.js APIs or Web Platform APIs.

* **Client Component**
Client Component is the component we used to familiar with.It has client-side interactivity and can use client-side hooks (useState, useRef, etc) and Web APIs.

So if your library uses client-side hooks (useState, etc) and Web APIs, it would throw runtime error in RSC.
## Client Only

* **Client only** means your lib can only be used in client component. It needs to be used with **'use client'** directive.

* **Client only** does not mean your library cannot be used for pre-rendering (SSR, SSG, ISR). You still need to ensure your library is SSR compatible.

* A library should be designated as **client only** if it uses client-side hooks (useState, useRef, etc) and requires user interactions. A typical example would be react hooks collections.

### Make your lib **client only**
  * `npm install client-only`
  * add `import 'client-only'` to the top of your lib entry.


## Server Only

* **Server only** means your lib can only be used in server component.
* **Server only** lib can't be used in client components and should not be bundled into client assets
* A library should be designated as **server-only** if it uses Node.js api or has native dependencies.
### Make your lib **server only**
  * `npm install server-only`
  * add `import 'server-only'` to the top of your lib entry.

## Hybrid
* Hybrid means your library has different APIs collections in different runtime.
* A hybrid library needs to have separate entries for different runtimes. **If you lib only has a single entry then it is RSC incompatible. Users won't be able to import your lib in RSC.**
### Make your hybrid lib RSC compatible without introducing breaking change

* Create a new entry for APIs which could be used in server components.

* Use it as **react-server** exports in your lib. 

```json
{
  "exports": {
    ".": {
      "import": "./dist/lib.mjs",
      "react-server": "./dist/lib.react-server.mjs"
    }
  }
}
```

This approach has drawbacks. If you import APIs that are not available RSC, typescript would not be able to throw the error. Bundler will throw error but the message is ambiguous. You also need to make a list of APIs that are available in RSC and document them separately.


## Reference
* [directives](https://react.dev/reference/react/directives)
* [react essentials](https://nextjs.org/docs/getting-started/react-essentials)
* [server-module-conventions](https://github.com/reactjs/rfcs/blob/main/text/0227-server-module-conventions.md)

