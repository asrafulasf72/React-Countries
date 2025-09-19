
import { Suspense } from 'react'
import './App.css'
import Countries from './Component/Countries'
const fetchCountries = async()=>{
  const url='https://openapi.programming-hero.com/api/all'
  const res = await fetch(url)
  return res.json()
}

function App() {
  const promiseCountries = fetchCountries();

  return (
    <>
       <h1>All Countries Are Here</h1>
       <Suspense fallback={<p>Data is Loading...</p>}>
        <Countries promiseCountries={promiseCountries}></Countries>
       </Suspense>
    </>
  )
}
export default App
