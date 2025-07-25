import { useContext } from "react"
import DataContext from "./contextapi/DataContext"


const NewPost = ()  =>{
      const { handleSubmit,postTitle,setpostTitle,postBody,setpostBody} = useContext(DataContext)

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input
        id="postTitle"
        type='text'
        required
        value={postTitle}
        onChange={(e)=>setpostTitle(e.target.value)}
        />

        <label htmlFor="postBody">Post:</label>
        <input
        id=""
        type="text"
        required
        value={postBody}
        onChange={(e)=>setpostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
       
       
    </main>
  )
}

export default NewPost