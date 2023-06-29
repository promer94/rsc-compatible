'use client'
import { clientOnly } from 'client-lib'
import { shared, clientOnlyInSharded } from 'hybrid-lib'

export default function Page() {
  return (
    <div className='p-4 mt-4 border-2 border-orange-200'>
      <div>client component</div>
      <div>{clientOnly()}</div>
      <div>{shared()}</div>
      <div>{`import { serverOnly } from "server-only" ❌`}</div>
    </div>
  );
}
