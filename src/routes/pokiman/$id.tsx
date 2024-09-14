import { createFileRoute, } from '@tanstack/react-router'

export const Route = createFileRoute('/pokiman/$id')({
  component: Pokiman,
})

function Pokiman() {
    const {id} = Route.useParams()
 return  (
    <>
    <div>{id}</div>
    </>
 )
}