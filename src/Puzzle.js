import './App.css'
import React, {useState} from "react";


function Puzzle()
{
    const[selectState, setStateSelect] = useState(1)
    
    const values = [
           
           { id:1, nome: "Busca Cega (Largura)"},
           { id:2, nome: "Busca Cega (Profundidade)"},
           { id:3, nome: "Busca A*"}
        ]
    
    const [stateResult,setStateResult] = useState({
        flag: false,
        execucao: performance.now(),
        caminho: "",
        nodes: ""

    })
    const [stateFinal, setStatefinal] = useState({
        cell1: "?",
        cell2: "?",
        cell3: "?",
        cell4: "?",
        cell5: "?",
        cell6: "?",
        cell7: "?",
        cell8: "?",
        cell9: "?",
    })

    const [state,setState] = useState({
        cell1: 1,
        cell2: 2,
        cell3: 3,
        cell4: 4,
        cell5: 5,
        cell6: 6,
        cell7: 7,
        cell8: 8,
        cell9: "",
    })

    const [stateEmbaralhado, setStateEmbaralhado] = useState({
        cell1: state.cell1,
        cell2: state.cell2,
        cell3: state.cell3,
        cell4: state.cell4,
        cell5: state.cell5,
        cell6: state.cell6,
        cell7: state.cell7,
        cell8: state.cell8,
        cell9: "",
    })

    const resetar = () =>
    {
        setStateEmbaralhado({
            cell1: state.cell1,
            cell2: state.cell2,
            cell3: state.cell3,
            cell4: state.cell4,
            cell5: state.cell5,
            cell6: state.cell6,
            cell7: state.cell7,
            cell8: state.cell8,
            cell9: "",
        })
        setStateResult(
            {
                flag: false
            }
        )
    }



    const resolver = () =>
    {
        setStateResult(
            {
                flag: true,
                execucao: performance.now().toFixed(4)
            }
        )
    }

    var time = 0
    
    const embaralhar = () =>
    {
        var lista = [1,2,3,4,5,6,7,8,""]
        var aux
        var inicio = performance.now()
        //método Fisher-Yates
        for(let i = lista.length-1;i>0;i--)
        {   
           const random =  Math.floor(Math.random() * i)

           aux = lista[i]
           lista[i] = lista[random]
           lista[random] = aux

            
        }
        setStateEmbaralhado({
            cell1: lista[0],
            cell2: lista[1],
            cell3: lista[2],
            cell4: lista[3],
            cell5: lista[4],
            cell6: lista[5],
            cell7: lista[6],
            cell8: lista[7],
            cell9: lista[8],
        })
        //contar milisegundos
        var fim = performance.now()
        time = 3
        setStateResult(
            {
                flag: false
            }
        )
       
    }

    let saida =
    <>
    <nav className="navbar color-nav">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img
                src="https://i.pinimg.com/originals/dc/30/1d/dc301dd6fac108a2a60f103e01539f04.jpg"
               
                height="70"
                loading="lazy"
            />
            <small className="text">Inteligência Artificial - 8 Puzzle Game</small>
            </a>
        </div>
    </nav> 
     
      <div className="container">			
			<div className="row mt-3">
				<div className="col-4 left">
                <label className="label-estado">Estado Inicial</label> 
                <button onClick={resetar} className="btn-reset btn-aqua">Resetar</button>
					<div className="grid-box">
						<div className="cell">{stateEmbaralhado.cell1}</div>
						<div className="cell">{stateEmbaralhado.cell2}</div>
						<div className="cell"> {stateEmbaralhado.cell3} </div>
						<div className="cell">{stateEmbaralhado.cell4}  </div>
						<div className="cell"> {stateEmbaralhado.cell5} </div>
						<div className="cell"> {stateEmbaralhado.cell6} </div>
						<div className="cell"> {stateEmbaralhado.cell7} </div>
						<div className="cell">{stateEmbaralhado.cell8}</div>
						<div className="cell"> {stateEmbaralhado.cell9}</div>
					</div>
				</div>
			</div>
			<div className="spacer"></div>
		</div>
    <div className="center">
        
        <h3 className="title-game">Começar o Jogo:</h3>
        <label className="label">Selecione o algoritmo desejado:</label>
        <select className="form-select select" value={selectState} onChange={e=>setStateSelect(e.target.value)}>
            {values.map((item)=>
            (
                <option value={item.id}>{item.nome}</option>
            )
                
            )}
            {/* <option value={0} disabled selected>Selecione o Algoritmo desejado</option>
            <option value={1}>Busca Cega (Largura)</option>
            <option value={2}>Busca Cega (Profundidade)</option>
            <option value={3}>A*</option> */}
        </select>
        <button onClick={embaralhar} className="btn btn-aqua">Embaralhar</button>
        <button className="btn btn-aqua" onClick={resolver}>Resolver</button>
        
    </div>
    {
        stateResult.flag? 
            <div className="resultado">
                <p >Quantidade de nós visitados: </p>
                <p>Tempo gasto em execução: {stateResult.execucao} ms</p>
                <p>Tamanho do caminho da solução: </p>
            </div> : ""
    }
   
    <div className="container">			
			<div className="row mt-3">
				<div className="col-4 right">
                <label className="label-estado">Estado Final</label>  
					<div className="grid-box">
                    <div className="cell">{stateFinal.cell1}</div>
                    <div className="cell">{stateFinal.cell2}</div>
                    <div className="cell"> {stateFinal.cell3} </div>
                    <div className="cell">{stateFinal.cell4}  </div>
                    <div className="cell"> {stateFinal.cell5} </div>
                    <div className="cell"> {stateFinal.cell6} </div>
                    <div className="cell"> {stateFinal.cell7} </div>
                    <div className="cell">{stateFinal.cell8}</div>
                    <div className="cell"> {stateFinal.cell9}</div>
					</div>
				</div>
                
			</div>
			<div className="spacer"></div>
            
	</div>
    </>
    return(saida)
}
export default Puzzle