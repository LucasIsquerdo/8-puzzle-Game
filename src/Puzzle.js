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
        cell9: 0,
    })

    const [stateCorrect,setStateCorrect] = useState({
        cell1: 1,
        cell2: 2,
        cell3: 3,
        cell4: 4,
        cell5: 5,
        cell6: 6,
        cell7: 7,
        cell8: 8,
        cell9: 0,
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
        cell9: 0,
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
            cell9: 0,
        })
        setStateResult(
            {
                flag: false
            }
        )
        setStatefinal({
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
    }

    const verificaLista = (listaAtual) =>
    {
        var cont = 0
        for(let i=0; i<listaAtual.length; i++)
        {
            if(listaAtual[i]!=listaFinal[i])
                cont+=1
        }
        return cont
    }
    const moverPeçaCima = (list) =>
    {
        let i=0
       
            while(list[i]!=0)
                i++
            list[i] = list[i-3]
            list[i-3] = 0

        return list
    }

    const moverPeçaBaixo = (list) =>
    {
        let i=0
      
            while(list[i]!=0)
                i++
                list[i] = list[i+3]
                list[i+3] = 0


        return list

    }

    const moverPeçaEsq = (list) =>
    {
        let i=0
       
            while(list[i]!=0)
                i++
            list[i] = list[i-1]
            list[i-1] = 0

        return list

    }

    const moverPeçaDir = (list) =>
    {
        let i=0
     
            while(list[i]!=0)
                i++
            list[i] = list[i+1]
            list[i+1] = 0

        return list

    }
    
    const [stateCaminho, setStateCaminho] = useState([])
    const [statePilha, setStatePilha] = useState([[]])


    function pushPilha(lista){
        setStatePilha([...statePilha, lista])
    }

    function isEmpty()
    {
        return statePilha.length == 0

    }
    function possibilidades()
    {
        var listaDir = []
        var listaEsq = []
        var listaCima = []
        var listaBaixo = []
        while(!isEmpty())
        {
            var elemento = statePilha.pop()
            alert(elemento)
            var cont = verificaLista(elemento)
            if(cont == 0)
                setStateCaminho([...setStateCaminho, elemento])
            else
            {
                if(elemento[0] == 0)
                {
                    listaDir = moverPeçaDir(elemento)            
                    setStatePilha([...statePilha, listaDir])                    
                    elemento = moverPeçaEsq(elemento)
                    listaBaixo = moverPeçaBaixo(elemento)
                    setStatePilha([...statePilha, listaBaixo])
                    elemento = moverPeçaCima(elemento)
                }
                else if(elemento[1] == 0)
                {
                    listaDir = moverPeçaDir(elemento)            
                    setStatePilha([...statePilha, listaDir])                    
                    elemento = moverPeçaEsq(elemento)
                    listaBaixo = moverPeçaBaixo(elemento)
                    setStatePilha([...statePilha, listaBaixo])
                    elemento = moverPeçaCima(elemento)
                    listaEsq = moverPeçaEsq(elemento)            
                    setStatePilha([...statePilha, listaEsq])                    
                    elemento = moverPeçaDir(elemento)
                }
                else if(elemento[2] == 0)
                {
                    listaEsq = moverPeçaEsq(elemento)            
                    setStatePilha([...statePilha, listaEsq])                    
                    elemento = moverPeçaDir(elemento)
                    listaBaixo = moverPeçaBaixo(elemento)
                    setStatePilha([...statePilha, listaBaixo])
                    elemento = moverPeçaCima(elemento)
                }
                else if(elemento[3] == 0)
                {
                    listaDir = moverPeçaDir(elemento)            
                    setStatePilha([...statePilha, listaDir])                    
                    elemento = moverPeçaEsq(elemento)
                    listaBaixo = moverPeçaBaixo(elemento)
                    setStatePilha([...statePilha, listaBaixo])
                    elemento = moverPeçaCima(elemento)
                    listaCima = moverPeçaCima(elemento)
                    setStatePilha([...statePilha, listaCima])
                    elemento = moverPeçaBaixo(elemento)
                }
                else if(elemento[4]==0)
                {
                    listaDir = moverPeçaDir(elemento)            
                    setStatePilha([...statePilha, listaDir])                    
                    elemento = moverPeçaEsq(elemento)
                    listaBaixo = moverPeçaBaixo(elemento)
                    setStatePilha([...statePilha, listaBaixo])
                    elemento = moverPeçaCima(elemento)
                    listaCima = moverPeçaCima(elemento)
                    setStatePilha([...statePilha, listaCima])
                    elemento = moverPeçaBaixo(elemento)
                    listaEsq = moverPeçaEsq(elemento)            
                    setStatePilha([...statePilha, listaEsq])                    
                    elemento = moverPeçaDir(elemento)
                }
                else if(elemento[5] == 0)
                {
                    listaCima = moverPeçaCima(elemento)
                    setStatePilha([...statePilha, listaCima])
                    elemento = moverPeçaBaixo(elemento)
                    listaEsq = moverPeçaEsq(elemento)            
                    setStatePilha([...statePilha, listaEsq])                    
                    elemento = moverPeçaDir(elemento)
                    listaBaixo = moverPeçaBaixo(elemento)
                    setStatePilha([...statePilha, listaBaixo])
                    elemento = moverPeçaCima(elemento)
                }
                else if(elemento[6] == 0)
                {
                    listaCima = moverPeçaCima(elemento)
                    setStatePilha([...statePilha, listaCima])
                    elemento = moverPeçaBaixo(elemento)
                    listaDir = moverPeçaDir(elemento)            
                    setStatePilha([...statePilha, listaDir])                    
                    elemento = moverPeçaEsq(elemento)
                }
                else if(elemento[7]==0)
                {
                    listaCima = moverPeçaCima(elemento)
                    setStatePilha([...statePilha, listaCima])
                    elemento = moverPeçaBaixo(elemento)
                    listaDir = moverPeçaDir(elemento)            
                    setStatePilha([...statePilha, listaDir])                    
                    elemento = moverPeçaEsq(elemento)
                    listaEsq = moverPeçaEsq(elemento)            
                    setStatePilha([...statePilha, listaEsq])                    
                    elemento = moverPeçaDir(elemento)

                }
                else if(elemento[8]==0)
                {
                    listaEsq = moverPeçaEsq(elemento)            
                    setStatePilha([...statePilha, listaEsq])                    
                    elemento = moverPeçaDir(elemento)
                    listaCima = moverPeçaCima(elemento)
                    setStatePilha([...statePilha, listaCima])
                    elemento = moverPeçaBaixo(elemento)
                }
           }
        }
    }
    const listaFinal = [1,2,3,4,5,6,7,8,0]
    // const resolver = () =>
    // {

    //     var parada = false
    //     var listaAtual = [
    //         stateEmbaralhado.cell1,            
    //         stateEmbaralhado.cell2,
    //         stateEmbaralhado.cell3,
    //         stateEmbaralhado.cell4,
    //         stateEmbaralhado.cell5,
    //         stateEmbaralhado.cell6,
    //         stateEmbaralhado.cell7,
    //         stateEmbaralhado.cell8,
    //         stateEmbaralhado.cell9,
    //     ]
    //     var listaInalterada = listaAtual
    //     var listaMenorCaminho = listaAtual    //guardar lista com melhor caminho
    //     var visitados = [[]]
    //     var i=0;
    //     while(parada == false)
    //     {
    //         melhor = 999
    //         cont = verificaLista(listaAtual)
    //         alert(listaAtual)
    //         alert("Visitados:\n"+visitados[0])
    //         if(cont==0)
    //         {
    //             parada= true
    //             setStatefinal({
    //                 cell1:listaAtual[0],
    //                 cell2:listaAtual[1],
    //                 cell3:listaAtual[2],
    //                 cell4:listaAtual[3],
    //                 cell5:listaAtual[4],
    //                 cell6:listaAtual[5],
    //                 cell7:listaAtual[6],
    //                 cell8:listaAtual[7],
    //                 cell9:listaAtual[8],

    //             })

    //         }
    //         else
    //         {
                
    //             if(listaAtual[0] == 0)
    //             {
    //                 var aux = listaAtual[0] //aux recebe sempre o espaço vago
    //                 listaAtual[0] = listaAtual[1]
    //                 listaAtual[1] = aux
    //                 cont = 0
    //                 cont = verificaLista(listaAtual)
    //                 let bool = visitados.includes(listaAtual)
    //                 if(cont <= melhor && bool == false)
    //                 {
    //                     melhor = cont
    //                     listaMenorCaminho = listaAtual
    //                   visitados.push(listaMenorCaminho)
    //                 }
    //                 if(cont>0)
    //                 {
    //                     listaAtual[1] = listaAtual[0]
    //                     listaAtual[0] = aux
    //                     aux = listaAtual[0]   
    //                     listaAtual[0] = listaAtual[3]
    //                     listaAtual[3] = aux
    //                     cont = 0
    //                     cont = verificaLista(listaAtual)
    //                     let bool = visitados.includes(listaAtual)
    //                     if(cont <= melhor && bool == false)
    //                     {
    //                         melhor = cont
    //                         listaMenorCaminho = listaAtual
    //                       visitados.push(listaMenorCaminho)
    //                     }
    //                     // listaAtual[3] = listaAtual[0]
    //                     // listaAtual[0] = aux
                        
                        
    //                 }
    //                 listaAtual = listaInalterada
    //             }
    //             else if(listaAtual[1] == 0)
    //                 {
    //                     var aux = listaAtual[1]
    //                     listaAtual[1] = listaAtual[0]
    //                     listaAtual[0] = aux
    //                     cont = 0
    //                     cont = verificaLista(listaAtual)                        
    //                     let bool = visitados.includes(listaAtual)
    //                     if(cont <= melhor && bool == false)
    //                     {
    //                         melhor = cont
    //                         listaMenorCaminho = listaAtual
    //                       visitados.push(listaMenorCaminho)
    //                     }
    //                     if(cont>0)
    //                     {
    //                         listaAtual[0] = listaAtual[1]
    //                         listaAtual[1] = aux
    //                         aux = listaAtual[1]
    //                         listaAtual[1] = listaAtual[2]
    //                         listaAtual[2] = aux
    //                         cont = 0
    //                         cont = verificaLista(listaAtual)
    //                         let bool = visitados.includes(listaAtual)                            
    //                         if(cont <= melhor && bool == false)
    //                         {
    //                             melhor = cont
    //                             listaMenorCaminho = listaAtual
    //                           visitados.push(listaMenorCaminho)
    //                         }
    //                         if(cont>0)
    //                         {
    //                             listaAtual[2] = listaAtual[1]
    //                             listaAtual[1] = aux
    //                             aux = listaAtual[1]
    //                             listaAtual[1] = listaAtual[4]
    //                             listaAtual[4] = aux
    //                             cont = 0
    //                             cont = verificaLista(listaAtual)
    //                             let bool = visitados.includes(listaAtual)
    //                             if(cont <= melhor && bool == false)
    //                             {
    //                                 melhor = cont
    //                                 listaMenorCaminho = listaAtual
    //                               visitados.push(listaMenorCaminho)
    //                             }
    //                         }
                            
    //                     }
    //                     listaAtual = listaInalterada
    //             }
                   
    //             else if(listaAtual[2] == 0)
    //             {
    //                 var aux = listaAtual[2] //aux recebe sempre o espaço vago
    //                 listaAtual[2] = listaAtual[1]
    //                 listaAtual[1] = aux
    //                 cont = 0
    //                 cont = verificaLista(listaAtual)
                    
    //                 let bool = visitados.includes(listaAtual)
    //                 if(cont <= melhor && bool == false)
    //                 {
    //                     melhor = cont
    //                     listaMenorCaminho = listaAtual
    //                   visitados.push(listaMenorCaminho)
    //                 }
    //                 if(cont>0)
    //                 {
    //                     listaAtual[1] = listaAtual[2]
    //                     listaAtual[2] = aux
    //                     aux = listaAtual[2]   
    //                     listaAtual[2] = listaAtual[5]
    //                     listaAtual[5] = aux
    //                     cont = 0
    //                     cont = verificaLista(listaAtual)                        
    //                     let bool = visitados.includes(listaAtual)
    //                     if(cont <= melhor && bool == false)
    //                     {
    //                         melhor = cont
    //                         listaMenorCaminho = listaAtual
    //                       visitados.push(listaMenorCaminho)
    //                     }
    //                 }
    //                 listaAtual = listaInalterada
    //             }
    //             else if(listaAtual[3] == 0 )
    //             {
    //                 var aux = listaAtual[3]
    //                 listaAtual[3] = listaAtual[0]
    //                 listaAtual[0] = aux
    //                 cont = 0
    //                 cont = verificaLista(listaAtual)                    
    //                 let bool = visitados.includes(listaAtual)
    //                 if(cont <= melhor && bool==false)
    //                 {
    //                     melhor = cont
    //                     listaMenorCaminho = listaAtual
    //                   visitados.push(listaMenorCaminho)
    //                 }
    //                 if(cont>0)
    //                 {
    //                     listaAtual[0] = listaAtual[3]
    //                     listaAtual[3] = aux
    //                     aux = listaAtual[3]
    //                     listaAtual[3] = listaAtual[4]
    //                     listaAtual[4] = aux
    //                     cont = 0
    //                     cont = verificaLista(listaAtual)
    //                     let bool = visitados.includes(listaAtual)
    //                     if(cont <= melhor && bool == false)
    //                     {
    //                         melhor = cont
    //                         listaMenorCaminho = listaAtual                            
    //                       visitados.push(listaMenorCaminho)
    //                     }
                        
    //                     if(cont>0)
    //                     {
    //                         listaAtual[4] = listaAtual[3]
    //                         listaAtual[3] = aux
    //                         aux = listaAtual[3]
    //                         listaAtual[3] = listaAtual[6]
    //                         listaAtual[6] = aux
    //                         cont = 0
    //                         cont = verificaLista(listaAtual)
    //                         let bool = visitados.includes(listaAtual)                            
    //                         if(cont <= melhor && bool==false)
    //                         {
    //                             melhor = cont
    //                             listaMenorCaminho = listaAtual                             
    //                           visitados.push(listaMenorCaminho)
    //                         }

    //                     }
    //                 }
    //                 listaAtual = listaInalterada
    //             }
                
    //             else if(listaAtual[5] == 0 )
    //             {
    //                 var aux = listaAtual[5]
    //                 listaAtual[5] = listaAtual[2]
    //                 listaAtual[2] = aux
    //                 cont = 0
    //                 cont = verificaLista(listaAtual)
    //                 let bool = visitados.includes(listaAtual)
    //                 if(cont <= melhor && bool == false)
    //                 {
    //                     melhor = cont
    //                     listaMenorCaminho = listaAtual
    //                   visitados.push(listaMenorCaminho)
    //                 }
    //                 if(cont>0)
    //                 {
    //                     listaAtual[2] = listaAtual[5]
    //                     listaAtual[5] = aux
    //                     aux = listaAtual[5]
    //                     listaAtual[5] = listaAtual[4]
    //                     listaAtual[4] = aux
    //                     cont = 0
    //                     cont = verificaLista(listaAtual)
    //                     let bool = visitados.includes(listaAtual)
    //                     if(cont <= melhor && bool==false)
    //                     {
    //                         melhor = cont
    //                         listaMenorCaminho = listaAtual
    //                       visitados.push(listaMenorCaminho)
    //                     }
    //                     if(cont>0)
    //                     {
    //                         listaAtual[4] = listaAtual[5]
    //                         listaAtual[5] = aux
    //                         aux = listaAtual[5]
    //                         listaAtual[5] = listaAtual[8]
    //                         listaAtual[8] = aux
    //                         cont = 0
    //                         cont = verificaLista(listaAtual)
    //                         let bool = visitados.includes(listaAtual)
    //                         if(cont <= melhor && bool==false)
    //                         {
    //                             melhor = cont
    //                             listaMenorCaminho = listaAtual
    //                           visitados.push(listaMenorCaminho)
    //                         }
    //                     }
    //                 }
    //                 listaAtual = listaInalterada
    //             }
                               
    //             else if(listaAtual[6] == 0 )
    //             {
    //                 var aux = listaAtual[6] //aux recebe sempre o espaço vago
    //                 listaAtual[6] = listaAtual[7]
    //                 listaAtual[7] = aux
    //                 cont = 0
    //                 cont = verificaLista(listaAtual)                    
    //                 let bool = visitados.includes(listaAtual)
    //                 if(cont <= melhor && bool == false)
    //                 {
    //                     melhor = cont
    //                     listaMenorCaminho = listaAtual
    //                   visitados.push(listaMenorCaminho)
    //                 }
    //                 if(cont>0)
    //                 {
    //                     listaAtual[7] = listaAtual[6]
    //                     listaAtual[6] = aux
    //                     aux = listaAtual[6]   
    //                     listaAtual[6] = listaAtual[3]
    //                     listaAtual[3] = aux
    //                     cont = 0
    //                     cont = verificaLista(listaAtual)                        
    //                     let bool = visitados.includes(listaAtual)
    //                     if(cont <= melhor && bool == false)
    //                     {
    //                         melhor = cont
    //                         listaMenorCaminho = listaAtual
    //                       visitados.push(listaMenorCaminho)
    //                     }
                        
    //                 }
    //                 listaAtual = listaInalterada
                    
                    
    //             }
                                   
    //             else if(listaAtual[7] == 0)
    //             {
    //                 var aux = listaAtual[7]
    //                 listaAtual[7] = listaAtual[8]
    //                 listaAtual[8] = aux
    //                 cont = 0
    //                 cont = verificaLista(listaAtual)
    //                 let bool = visitados.includes(listaAtual)
    //                 if(cont <= melhor && bool==false)
    //                 {
    //                     melhor = cont
    //                     listaMenorCaminho = listaAtual
    //                   visitados.push(listaMenorCaminho)
    //                 }
    //                 if(cont>0)
    //                 {
    //                     listaAtual[8] = listaAtual[7]
    //                     listaAtual[7] = aux
    //                     aux = listaAtual[7]
    //                     listaAtual[7] = listaAtual[6]
    //                     listaAtual[6] = aux
    //                     cont = 0
    //                     cont = verificaLista(listaAtual)
                        
    //                     let bool = visitados.includes(listaAtual)
    //                     if(cont <= melhor && bool == false)
    //                     {
    //                         melhor = cont
    //                         listaMenorCaminho = listaAtual
    //                       visitados.push(listaMenorCaminho)
    //                     }
    //                     if(cont>0)
    //                     {
    //                         listaAtual[6] = listaAtual[7]
    //                         listaAtual[7] = aux
    //                         aux = listaAtual[7]
    //                         listaAtual[7] = listaAtual[4]
    //                         listaAtual[4] = aux
    //                         cont = 0
    //                         cont = verificaLista(listaAtual)
    //                         let bool = visitados.includes(listaAtual)
    //                         if(cont <= melhor && bool==false)
    //                         {
    //                             melhor = cont
    //                             listaMenorCaminho = listaAtual
    //                           visitados.push(listaMenorCaminho)
    //                         }
    //                     }
                        
    //                 }
    //                 listaAtual = listaInalterada

    //             }
                                        
    //             else if(listaAtual[8] == 0)
    //             {
    //                 var aux = listaAtual[8] //aux recebe sempre o espaço vago
    //                 listaAtual[8] = listaAtual[7]
    //                 listaAtual[7] = aux
    //                 cont = 0
    //                 cont = verificaLista(listaAtual)
                    
    //                 let bool = visitados.includes(listaAtual)
    //                 if(cont <= melhor && bool == false)
    //                 {
    //                     melhor = cont
    //                     listaMenorCaminho = listaAtual
    //                   visitados.push(listaMenorCaminho)
    //                 }
    //                 if(cont>0)
    //                 {
    //                     listaAtual[7] = listaAtual[8]
    //                     listaAtual[8] = aux
    //                     aux = listaAtual[8]   
    //                     listaAtual[8] = listaAtual[5]
    //                     listaAtual[5] = aux
    //                     cont = 0
    //                     cont = verificaLista(listaAtual)
                        
    //                     let bool = visitados.includes(listaAtual)
    //                     if(cont <= melhor && bool == false)
    //                     {
    //                         melhor = cont
    //                         listaMenorCaminho = listaAtual
    //                       visitados.push(listaMenorCaminho)
    //                     }
    //                 }
    //                 listaAtual = listaInalterada
    //             }
                                            
    //             else if(listaAtual[4] == 0)
    //             {
    //                 var aux = listaAtual[4]
    //                 listaAtual[4] = listaAtual[1]
    //                 listaAtual[1] = aux
    //                 cont = 0
    //                 cont = verificaLista(listaAtual)
                    
    //                 let bool = visitados.includes(listaAtual)
    //                 if(cont <= melhor && bool == false)
    //                 {
    //                     melhor = cont
    //                     listaMenorCaminho = listaAtual
    //                   visitados.push(listaMenorCaminho)
    //                 }
    //                 if(cont>0)
    //                 {
    //                     listaAtual[1] = listaAtual[4]
    //                     listaAtual[4] = aux
    //                     aux = listaAtual[4]
    //                     listaAtual[4] = listaAtual[3]
    //                     listaAtual[3] = aux
    //                     cont = 0
    //                     cont = verificaLista(listaAtual)
    //                     let bool = visitados.includes(listaAtual)
    //                     if(cont <= melhor && bool == false)
    //                     {
    //                         melhor = cont
    //                         listaMenorCaminho = listaAtual
    //                       visitados.push(listaMenorCaminho)
    //                     }
    //                     if(cont>0)
    //                     {
    //                         listaAtual[3] = listaAtual[4]
    //                         listaAtual[4] = aux
    //                         aux = listaAtual[4]
    //                         listaAtual[4] = listaAtual[5]
    //                         listaAtual[5] = aux
    //                         cont = 0
    //                         cont = verificaLista(listaAtual)
    //                         let bool = visitados.includes(listaAtual)
    //                         if(cont <= melhor && bool == false)
    //                         {
    //                             melhor = cont
    //                             listaMenorCaminho = listaAtual
    //                           visitados.push(listaMenorCaminho)
    //                         }
    //                         if(cont>0)
    //                         {
    //                             listaAtual[5] = listaAtual[4]
    //                             listaAtual[4] = aux
    //                             aux = listaAtual[4]
    //                             listaAtual[4] = listaAtual[7]
    //                             listaAtual[7] = aux
    //                             cont = 0
    //                             cont = verificaLista(listaAtual)
    //                             let bool = visitados.includes(listaAtual)                                                                
    //                             if(cont <= melhor && bool == false)
    //                             {
    //                                 melhor = cont
    //                                 listaMenorCaminho = listaAtual
    //                               visitados.push(listaMenorCaminho)
    //                             }
    //                         }

    //                     }
    //                 }
    //                 listaAtual = listaInalterada
    //             }
                                                
                                           
                
                    
    //         }
    //         listaAtual = listaMenorCaminho  
    //         cont = 0
    //         cont = verificaLista(listaAtual)
                      
    //     }
    //     setStateResult(
    //         {
    //             flag: true,
    //             execucao: performance.now().toFixed(4)
    //         }
    //     )
    // }
    

    // const buscaProfundidade = () =>
    // {
    //     var flag = false
    //     var listaAtual = [
    //         stateEmbaralhado.cell1,
    //         stateEmbaralhado.cell2,
    //         stateEmbaralhado.cell3,
    //         stateEmbaralhado.cell4,
    //         stateEmbaralhado.cell5,
    //         stateEmbaralhado.cell6,
    //         stateEmbaralhado.cell7,
    //         stateEmbaralhado.cell8,
    //         stateEmbaralhado.cell9,
    //     ]
    //     while(!flag)
    //     {
    //         if(listaAtual===listaFinal)
    //         {
    //             flag= true
    //             setStatefinal({
    //                 cell1:listaAtual[0],
    //                 cell2:listaAtual[1],
    //                 cell3:listaAtual[2],
    //                 cell4:listaAtual[3],
    //                 cell5:listaAtual[4],
    //                 cell6:listaAtual[5],
    //                 cell7:listaAtual[6],
    //                 cell8:listaAtual[7],
    //                 cell9:listaAtual[8],

    //             })

    //         }
                
    //     }
    // }
    const resolver = () =>
    {
        const estadoInicial = [
            stateEmbaralhado.cell1,
            stateEmbaralhado.cell2,
            stateEmbaralhado.cell3,
            stateEmbaralhado.cell4,
            stateEmbaralhado.cell5,
            stateEmbaralhado.cell6,
            stateEmbaralhado.cell7,
            stateEmbaralhado.cell8,
            stateEmbaralhado.cell9,
    
        ]
        pushPilha(estadoInicial)
        possibilidades()
        // alert(`Conteúdo da pilha: ${statePilha.join(", ")}`);
        // while(parada == false)
        // {
            
           
        //     cont = verificaLista(listaAtual)
        //     if(cont==0)
        //     {
        //         parada= true
        //         setStatefinal({
        //             cell1:listaAtual[0],
        //             cell2:listaAtual[1],
        //             cell3:listaAtual[2],
        //             cell4:listaAtual[3],
        //             cell5:listaAtual[4],
        //             cell6:listaAtual[5],
        //             cell7:listaAtual[6],
        //             cell8:listaAtual[7],
        //             cell9:listaAtual[8],

        //         })

        //     }
        //     else
        //     {
                
        //         if(listaAtual[0] == 0)
        //         {
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             listaAlterada = moverPeçaDir(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
                         
        //                 listas:
        //                 {
        //                     lista: lista,
        //                     nivel : x
        //                 }

        //             })
        //             listaAlterada = moverPeçaEsq(listaAtual)

        //         }
        //         else if(listaAtual[1] == 0)
        //         {
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             listaAlterada = moverPeçaDir(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
                         
        //                 listas: lista

        //             })
        //             listaAlterada = moverPeçaEsq(listaAtual)
        //             listaAlterada = moverPeçaEsq(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
                         
        //                 listas: lista

        //             })
        //             listaAlterada = moverPeçaDir(listaAtual)

                        
        //         }
                   
        //         else if(listaAtual[2] == 0)
        //         {
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             listaAlterada = moverPeçaEsq(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaDir(listaAtual)
        //         }
        //         else if(listaAtual[3] == 0 )
        //         {
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             listaAlterada = moverPeçaDir(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaEsq(listaAtual)
        //         }
                
        //         else if(listaAtual[5] == 0 )
        //         {
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             listaAlterada = moverPeçaEsq(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaDir(listaAtual)
        //         }
                               
        //         else if(listaAtual[6] == 0 )
        //         {
                   
        //             listaAlterada = moverPeçaDir(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaEsq(listaAtual)
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaBaixo(listaAtual)
                    
        //         }
                                   
        //         else if(listaAtual[7] == 0)
        //         {
        //             listaAlterada = moverPeçaEsq(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaDir(listaAtual)
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             listaAlterada = moverPeçaDir(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaEsq(listaAtual)

        //         }
                                        
        //         else if(listaAtual[8] == 0)
        //         {
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista

        //             })
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             listaAlterada = moverPeçaEsq(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista
        //             })
        //             listaAlterada = moverPeçaDir(listaAtual)
        //         }
                                            
        //         else if(listaAtual[4] == 0)
        //         {
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista

        //             })
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             listaAlterada = moverPeçaDir(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista

        //             })
        //             listaAlterada = moverPeçaEsq(listaAtual)
        //             listaAlterada = moverPeçaBaixo(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista

        //             })
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             listaAlterada = moverPeçaEsq(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista

        //             })
        //             listaAlterada = moverPeçaDir(listaAtual)
        //             listaAlterada = moverPeçaCima(listaAtual)
        //             var lista = stateCaminho.listas.concat(listaAlterada)
        //             setStateCaminho({
        //                 listas: lista

        //             })
        //             listaAlterada = moverPeçaBaixo(listaAtual)                    
                    

        //         }
                                                
                                           
                
                    
        //     }
        //     cont = verificaLista(listaAtual)
                      
        // }
        // setStateResult(
        //     {
        //         flag: true,
        //         execucao: performance.now().toFixed(4)
        //     }
        // )
    }

    const embaralhar = () =>
    {
        var lista = [1,2,3,4,5,6,7,8,0]
        var aux
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