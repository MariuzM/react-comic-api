import React, { useContext } from 'react'
import ComicButtonView from '../components/ComicButtonView'
import { ApiContext } from '../components/_context'

export default function PageOne() {
  const { loader } = useContext(ApiContext)

  // return <ComicButtonView />
  return <div>{loader.loading ? <div>Loading...</div> : <ComicButtonView />}</div>
}
