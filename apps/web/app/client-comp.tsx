'use client'
import { testClientOnly } from 'client-lib'
import { testHybridClient } from 'hybrid-lib'

export default function Page() {
  return (
    <>
      <div>{testClientOnly()}</div>
      <div>{testHybridClient()}</div>
    </>
  );
}
