// ***********************************************************************************************
// **** ARQUIVO DUPLICADO APENAS PARA REFERÊNCIA, CONTENDO TODOS OS NOSSOS COMENTÁRIOS INICIAIS 
// ***********************************************************************************************


import React, {useState} from 'react' // importando o useState pra gerenciar o estado da nossa aplicação 
import "./PaletaLista.css"
import { paletas } from "./src/mocks/paletas"

console.log("paletas", paletas)

// paletaSelecionadas = 
// {
//     "0": 4, 
//     "5": 1, 
//     "6": 2, 
//     }

function PaletaLista(){

    const [paletaSelecionadas, setPaletaSelecionadas ] = useState({})

    // variável que guarda o valor do meu state
    // método que atualiza o meu state 
    // valor inicial dessa variável 

    function adicionarItem(index){
        // const initialValue = paletaSelecionadas[index] ? paletaSelecionadas[index] : 0 
        const initialValue = Number(paletaSelecionadas[index] || 0) 
        // o operador "||" retorna o valor indicado (0), caso a primeira condição seja falsa, ou seja, se não encontrar 
        // o index da paleta clicada no obj paletas selecionadas
        const paleta = {
            [index]: initialValue + 1
        }
        // Spread operator = espalhar => ...
        setPaletaSelecionadas({...paletaSelecionadas, ...paleta})
    }

    function removerItem(index){
        const initialValue = Number(paletaSelecionadas[index] || 0) 
        // if(initialValue > 0){
        //     const paleta = {
        //         [index]: initialValue - 1
        //     }
        //     // Spread operator = espalhar => ...
        //     setPaletaSelecionadas({...paletaSelecionadas, ...paleta})
        // }
        const paleta = {
            [index]: initialValue - 1
        }
        // Spread operator = espalhar => ...
        setPaletaSelecionadas({...paletaSelecionadas, ...paleta})
    }

    // OPÇÃO TERNARIO 
    // const badgeCounter = (canRender, index) => {
    //     return (
    //         <> 
    //             {Boolean(canRender)
    //                 ? <span className="PaletaListaItem__badge">{paletaSelecionadas[index]}</span>
    //                 : null 
    //             }
    //         </>
    //         )
    // }

    const badgeCounter2 = (canRender, index) => {
        return (
            <> 
            {/* SHORT-CIRCUIT */}
                {Boolean(canRender) && <span className="PaletaListaItem__badge">{paletaSelecionadas[index]}</span>}
            </>
            )
    }

    const removeButton = (canRender, index) => {
        return (
            <> 
            {/* SHORT-CIRCUIT */}
                {Boolean(canRender) && 
                    <button className="Acoes__remover " onClick={() => removerItem(index)}>remover</button>}
            </>
            )
        }

    return(
        <div className="PaletaLista"> 
        {/* MAP => iterando pela nossa lista (array) e renderizando cada componente dessa lista na tela  */}
        {paletas.map((paleta, index)=> {
            return (
                <div key={index} className="PaletaListaItem">
                    <div>
                        {/* {badgeCounter(paletaSelecionadas[index], index)} */}
                        {badgeCounter2(paletaSelecionadas[index], index)}
                        <div className="PaletaListaItem__titulo">
                            {paleta.titulo}
                        </div>
                        <div className="PaletaListaItem__preco">R$ {paleta.preco}</div>
                            <div className="PaletaListaItem__descricao">
                                {paleta.descricao}
                            </div>
                            <div className="PaletaListaItem__acoes Acoes">
                                {/* RENDERIZAÇÃO CONDICIONAL DE ESTILO */}
                                <button className={`Acoes__adicionar ${!paletaSelecionadas[index] && "Acoes__adicionar--preencher"}`} 
                                    onClick={() => adicionarItem(index)}
                                >
                                adicionar
                                </button>
                                {removeButton(paletaSelecionadas[index], index) }
                            </div>
                    </div>
                    <img
                        className="PaletaListaItem__foto"
                        src={paleta.foto}
                        alt={`Paleta de ${paleta.sabor}`}
                    />
                </div>
        )})}
        </div>
    )
}

export default PaletaLista