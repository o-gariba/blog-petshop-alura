import { useParams } from "react-router-dom"
import ListaPost from "../assets/components/ListaPost"

import '../assets/css/blog.css'

const SubCategoria = () => {
    const { subcategoria } = useParams()

    return (
        <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
    )
}

export default SubCategoria