import  { useContext } from 'react'
import DataContext from './contextapi/DataContext'

const Header = ({title}) => {
  const {width} = useContext(DataContext)
  return (
    <header className='Header'>
        <h1>{title}</h1>
        </header>
  )
}

export default Header