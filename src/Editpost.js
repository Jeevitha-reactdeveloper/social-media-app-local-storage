import   { useContext } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './contextapi/DataContext'

const Editpost =() => {
     const{posts,handleEdit,editBody,seteditbody,editTitle,seteditTitle} = useContext(DataContext)
  const{id} = useParams()
   const post = posts.find(post => (post.id).toString() === id)
  useEffect( () =>{
    if(post){
        seteditTitle(post.title)
        seteditbody(post.body)
    }
    },[post,seteditTitle,seteditbody])


  return ( 
    <main className='NewPost'>
        {editTitle &&
    <>      
     <h2>Edit Post:</h2>
        <form className='newPostForm' onSubmit={handleEdit}>
            <label htmlFor='postTitle'>Edit Title:</label>
            <input 
            id='postTitle'
            type='text'
            value={editTitle}
            onChange={(e)=>seteditTitle(e.target.value)}
            required
            />
            <label htmlFor='postBody'>Edit Post:</label>
            <textarea
            id='postBody'
            type='text'
            value={editBody}
            onChange={(e)=>seteditbody(e.target.value)}
            required
            />
        <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
    </form>
    </> 
}
{!editTitle &&
<>
<h2>Post Not Found</h2>
<p>Well,That's disappointing.</p>
<Link to ='/'>Visit Our Homepage</Link></>}
</main>
  )
}

export default Editpost