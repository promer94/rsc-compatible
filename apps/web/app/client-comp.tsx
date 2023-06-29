'use client'
import { clientOnly } from 'client-lib'
import { shared, clientOnlyInSharded } from 'hybrid-lib'

export default function Page() {
  return (
    <div style={{
      border: '1px solid red',
    }}>
      <div>client component</div>
      <div>{clientOnly()}</div>
      <div>{shared()}</div>
      <div>{clientOnlyInSharded()}</div>
    </div>
  );
}
