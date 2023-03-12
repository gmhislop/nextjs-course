import { useRouter } from "next/router"

const ClientProjectPage = () => {
  const router = useRouter();
  const loadProjectHandler = () => {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'proejcta'}
    });
  }
  return (
    <div>
      <h1>TheProject of a Given Client</h1>
      <button onclick={loadProjectHandler}>Load Project A</button>
      </div>
  )
}

export default ClientProjectPage