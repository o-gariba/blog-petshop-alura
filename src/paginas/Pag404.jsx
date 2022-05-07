import '../assets/css/404.css'

import imagem from '../assets/img/doguito404.svg'

const Pag404 = () => {
    return (
        <main className='container flex flex--centro flex--coluna'>
            <img src={imagem} alt="ilustração de um cachorro triste com pontos de interrogação em cima da cabeça" className='doguito-imagem'/>
            <h2 className='naoencontrado-texto'>Ops, essa página não existe :(</h2>
        </main>
    )
}

export default Pag404