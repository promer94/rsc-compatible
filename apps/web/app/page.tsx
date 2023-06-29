import ClientComponent from './client-comp'
import { testServerOnly } from 'server-lib'
import { testShared } from 'hybrid-lib'
export default function Page() {
  return (
    <>
      {testServerOnly()}
      {testShared()}
      <ClientComponent></ClientComponent>
    </>
  );
}
