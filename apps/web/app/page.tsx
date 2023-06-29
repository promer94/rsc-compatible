import ClientComponent from './client-comp'
import { serverOnly } from 'server-lib'
import { shared } from 'hybrid-lib'


export default function Page() {
  return (
    <div className='p-4 border-4 border-red-200'>
      <div>server components</div>
      <div>{serverOnly()}</div>
      <div>{shared()}</div>
      <div>{`import { clientOnly } from "client-lib" ❌`}</div>
      <ClientComponent></ClientComponent>
    </div>
  );
}
