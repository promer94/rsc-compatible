// index.tsx
import "server-only";
var serverOnly = () => {
  return "I should only be used in server components";
};
export {
  serverOnly
};
