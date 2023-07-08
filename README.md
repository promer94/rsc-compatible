# Make your React library RSC compatible
This guide is intended for library authors or maintainers who wish to make their libraries RSC compatible. **It's incomplete now and will be updated as i learn more.**

## Your library might be used in wrong environment

React now has different types of component which has different APIs available to them.

* **Recat Server Component (RSC)** 
React Server Component is a new feature introduced in React 18. It allows developers to write React components which can only be rendered on the server. **It can't use any client-side hooks (useState, etc) and Web APIs**. It can use Node.js APIs or Web Platform APIs.

* **Client Component**
Client Component is the component we used to familiar with.It has client-side interactivity and can use client-side hooks (useState, useRef, etc) and Web APIs.

if users try to use your library as they used to do, it probably will cause a runtime error because RSC becomes default.


```jsx
import clientOnly from 'client-lib'

clientOnly()

function ServerComponent() {
  return <div>Server Component</div>;
}
```

![client-in-RSC](./screenshot/client-in-RSC.png)

The error message is not informative enough for users to come up the correct solution - **use `'use client'` directive to mark the current component as client component**. Instead, it will probably confuse users who are not familiar with RSC since they would assume `localStorge` should always be available.

```jsx
'use client';
// Web APIs and client-side hooks would be available now
import clientOnly from 'client-lib';

clientOnly();

function ClientComponent() {
  const [state,] = useState("Client Component")
  return <div>{state}</div>;
}
``` 

## References
* [directives](https://react.dev/reference/react/directives)
* [react essentials](https://nextjs.org/docs/getting-started/react-essentials)
* [server-module-conventions](https://github.com/reactjs/rfcs/blob/main/text/0227-server-module-conventions.md)

