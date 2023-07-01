# Make your library RSC compatible

This is a incomplete guide for lib authors and maintainers who wants to make their libs RSC compatible.

Most of libraries should just work if they are in the correct runtime. But it would be better if libraries can give clear hints when user does not pick the right runtime .

In general, There are three kinds of library based on its runtime compatibility.

## Client Only

* **client only** means your lib can only be used in client component. It needs to be used with **'use client'** directive.

* **client only** does not means your lib can't be used for pre-rendering (SSR, SSG, ISR).  You still need to make you lib SSR compatible.

* A lib should be **client only** if it uses lots of client side hook (useState, useRef, etc) and requires user interactions.  A typical example would be react hook collections.

### Make your lib **client only**
  * `npm install client-only`
  * add `import 'client-only'` to the top of your lib entry.


## Server Only

* **server only** means your lib can only be used in server component.
* **server only** lib can't be used in client components and should not be bundled into client assets
* A lib should be **server-only** if it uses Node.js api or has native dependencies.
### Make your lib **server only**
  * `npm install server-only`
  * add `import 'server-only'` to the top of your lib entry.

## Hybrid
* hybrid means your library has different APIs collections in different runtime.
* hybrid lib need to have separate entries for different runtime. **If you lib only has a single entry then it is RSC incompatible. Users won't be able to import your lib in RSC.**
### Make your hybrid lib RSC compatible without introducing breaking change

* create a new entry for APIs which could be used in server components.

* use it as **react-server** exports in your lib. 

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
This approach has some drawbacks.

* If you import APIs that are not available RSC, typescript would not be able to throw the error.
* Bundler will throw the error but the error message might not be helpful.

