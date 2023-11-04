import { useState,useEffect } from 'react'
import './App.css'
import Product from './components/Product'

function App() {
  const [category, setCategory] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const changeFilter = (filter) => {
    setCategory(filter)
  }

  useEffect( () => {
    async function fetchData () {
      try {
        const response = await fetch(`https://fakestoreapi.com/products${category}`);
        if (!response.ok) {
          throw new Error('error al obtener los datos')
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('error fetching data', error);
        setLoading(false)
      }
    }

    fetchData()
  }, [category])




  return (
    <>
      <div>
          <h1 className='banner'>Online Store 🛒</h1>
          <div className='nav'>
          <button onClick={() =>changeFilter('')}>all</button>
            <button onClick={() =>changeFilter('/category/electronics')}>electronics</button>
            <button onClick={() =>changeFilter('/category/jewelery')}>jewelery</button>
            <button onClick={() =>changeFilter("/category/men's%20clothing")}>men clothing</button>
            <button onClick={() =>changeFilter("/category/women's%20clothing")}>women category</button>
          </div>
          <div className='grid'>
            {loading ? 'Cargando...' : 
             products.map((p) => <Product key={p.id} image={p.image} title={p.title} price={p.price} description={p.description} category={p.category}/>)}
          </div>
          
      </div>
    </>
  )
}

export default App
