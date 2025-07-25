import  { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './contextapi/DataContext';

const PostPage = () =>{
  const{id} = useParams();
  const {posts,handledelete} = useContext(DataContext)
  const post = posts.find(post => (post.id).toString()===id);
  return(
    <main className='PostPage'>
      <article className='post'>
        {post &&
        <>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
        <p className='postBody'>{post.body}</p>
        <Link to={`/edit/${id}`}><button className='editbutton'>Edit Post</button></Link>
        <button className='deletebutton' onClick={() => handledelete(post.id)}>Delete Post
          </button>
          </>
          }

          {!post &&
          <>
          <h2>Post Not Found</h2>
          <p>Well,that's disappointing</p>
          <p>
            <Link to ='/'>Visit Our Homepage</Link>
            </p>
            </>
            }


      </article>
    </main>
  )

}

export default PostPage