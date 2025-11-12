import { HEADER_LINKS  } from '../Dummy_Data.js'

export default function Links() {

  const updateData = HEADER_LINKS.map( link => {
    return <li key={link.id}>
      <a href={link.target}>{link.title}</a>
      </li>
  })

  return updateData;
}