
import axios from 'axios'

import Counter from './Counter'
import { useAxios } from './hooks/useAxios'



function App() {

  // const {data, error, loading} = useAxios({
  //   instance: axios,
  //   method: 'get',
  //   url: 'https://rickandmortyapi.com/api/character',
  //   enabled: true
  // })
  //console.log('data', data)
  return (
    <>
      <h2>My Hooks Lib 📖</h2>
      <br />
      <Counter/>
    </>
  )
}

export default App
