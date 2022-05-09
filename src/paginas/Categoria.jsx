import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { useEffect, useState  } from 'react'
import ListaCategorias from '../assets/components/ListaCategorias'
import ListaPost from '../assets/components/ListaPost'

import '../assets/css/blog.css'
import busca from '../api/api'
import SubCategoria from './SubCategoria'

const Categoria = () => {
    const { id } = useParams()

    const { path, url } = useRouteMatch()

    const [subCategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div> 

            <ListaCategorias />
            <ul className='lista-categorias container flex'>
                {
                    subCategorias.map((subcategoria) => (

                    <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>

                        <Link to={`${url}/${subcategoria}`}>
                            {subcategoria}
                        </Link>
                    </li>
                    ))
                }
            </ul>

            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>

                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>

        </>
    )
}

export default Categoria