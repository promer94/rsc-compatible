import ClientComponent from './client-comp'
import { serverOnly } from 'server-lib'
import { shared } from 'hybrid-lib'

export default function Page() {
  return (
    <div className=''>
      <div>server components</div>
      <div>{serverOnly()}</div>
      <div>{shared()}</div>
      <ClientComponent></ClientComponent>
    </div>
  );
}
