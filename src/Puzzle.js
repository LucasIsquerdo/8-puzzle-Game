import './App.css'

function Puzzle()
{
    let saida =
    <>
    <nav class="navbar color-nav">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img
                src="https://i.pinimg.com/originals/dc/30/1d/dc301dd6fac108a2a60f103e01539f04.jpg"
               
                height="70"
                loading="lazy"
            />
            <small class="text">Inteligência Artificial - 8 puzzle Game</small>
            </a>
        </div>
    </nav>  
      <div class="container">			
			<div class="row mt-3">
				<div class="col-4 left">
					<div class="grid-box">
						<div class="cell"> 1 </div>
						<div class="cell"> 2 </div>
						<div class="cell"> 3 </div>
						<div class="cell"> 4 </div>
						<div class="cell"> 5 </div>
						<div class="cell"> 6 </div>
						<div class="cell"> 7 </div>
						<div class="cell"> 8 </div>
						<div class="cell">  </div>
					</div>
				</div>
			</div>
			<div class="spacer"></div>
		</div>
    <div class="center">
        
    <h3 class="title-game">Começar o Jogo:</h3>
    <select class="form-select" aria-label="Default select example">
        <option selected>Selecione o Algoritmo desejado</option>
        <option value="1">Busca Cega (Largura)</option>
        <option value="2">Busca Cega (Profundidade)</option>
        <option value="3">A*</option>
    </select>
    <button class="btn btn-aqua">Embaralhar</button>
    <button class="btn btn-aqua">Resolver</button>
    </div>
    <div class="container">			
			<div class="row mt-3">
				<div class="col-4 right">
					<div class="grid-box">
						<div class="cell"> 1 </div>
						<div class="cell"> 2 </div>
						<div class="cell"> 3 </div>
						<div class="cell"> 4 </div>
						<div class="cell"> 5 </div>
						<div class="cell"> 6 </div>
						<div class="cell"> 7 </div>
						<div class="cell"> 8 </div>
						<div class="cell">  </div>
					</div>
				</div>
			</div>
			<div class="spacer"></div>
		</div>
    </>
    return(saida)
}
export default Puzzle