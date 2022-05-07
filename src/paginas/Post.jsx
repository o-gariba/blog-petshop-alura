import { useEffect, useState } from "react"
import busca from "../api/api"


const Post = () => {

    const [post, setPost] = useState([])

    useEffect( () => {
        busca(`/post/${id}`, setPost)
    }, [id])
    
    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="cartao__texto">{post.body}</p>
            </article>
        </main>
    )
}

export default Post