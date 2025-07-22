
import { Link, Outlet } from 'react-router-dom'

function PostLayout() {
  return (
      <>
        <Link to="/PostPage/1">Post 1</Link>
        <br/>
        <Link to="/PostPage/2">Post 2</Link>
        <br/>
        <Link to="/PostPage/3">Post 3</Link>
        <br/>
        <Link to="/PostPage/Newpost">NewPost</Link>
        <Outlet/>
    </>
  )
}

export default PostLayout