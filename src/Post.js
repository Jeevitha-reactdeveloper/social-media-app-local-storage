
import { Link } from 'react-router-dom'

function Post({post}) {
  return (
    <article className='post'>
        <Link to = {`/post/${post.id}`}><h2 className='postheading'>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
        </Link>
        <p className='postBody'>{
            (post.body).length <=25
            ? post.body :`${(post.body).slice(0,25)}...`
            }</p>
    </article>
  )
}

export default Post