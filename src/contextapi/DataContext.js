import { createContext,useState,useEffect } from "react";
import {format}  from "date-fns";
import { useNavigate } from "react-router-dom";


const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const[posts,setPosts]  = useState([])
  const[search,setSearch] = useState('')
  const[searchResults,setsearchResults]=useState([])
  const[postTitle,setpostTitle]=useState('')
  const[postBody,setpostBody]=useState('')
  const[editTitle,seteditTitle]=useState('')
  const[editBody,seteditBody] =useState('')
  const navigate = useNavigate()


  useEffect(() =>{
   const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  },[])

  useEffect(() => {
  const filteredResults = posts.filter(post =>
    ((post.title).toLowerCase().includes(search.toLowerCase())) ||   
     ((post.body).toLowerCase().includes(search.toLowerCase()) ))
    setsearchResults(
    search ? filteredResults.reverse() : posts.slice().reverse())
  
}, [posts, search]);

  

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length -1].id+1 : 1;
    const datetime = format(new Date(),'MMMM dd,yyyy pp');
    const newpost ={id,title:postTitle,datetime,body:postBody}
    const allPosts = [...posts, newpost];
    setPosts(allPosts)
    setpostBody('')
    setpostTitle('')
    navigate('/');
    };
   
  const handledelete =(id) =>{
   const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    navigate("/");
  }

  const handleEdit = async(id)=>{
    const datetime = format(new Date(),'MMMM dd,yyyy pp');
    const updatedPost ={id,title:editTitle,datetime,body:editBody}
     const updatedPosts = posts.map((post) =>
      post.id === id ? updatedPost : post
    );
    setPosts(updatedPosts);
    seteditTitle("");
    seteditBody("");
    navigate("/");
   }; 

 return(
    <DataContext.Provider value ={{
search,setSearch,posts,handleSubmit,postTitle,setpostTitle,postBody,setpostBody,searchResults,handleEdit,editBody,seteditBody,editTitle,seteditTitle,handledelete
    }}>
    {children}
    </DataContext.Provider>
 )
}
export default DataContext