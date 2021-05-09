// var lsProdutos = [
//     {qt:0,  cod:"01", valor:10, grupo:"Salsicha na Chapa", categoria:"HOTDOG", descricao: "Pão, Salchicha, queijo e batata Palha"}
//     ,{qt:0, cod:"02", valor:12.5, grupo:"Salsicha na Chapa", categoria:"HOTDOG", descricao: "Pão, frango desfiado, queijo e batata Palha"}
//     ,{qt:0, cod:"03", valor:29.5, grupo:"Salsicha na Chapa", categoria:"HOTDOG", descricao: "Pão, Salsicha..."}

lsProdutos = carregarItens()

 if(localStorage.getItem('listaProduts') == null){
    localStorage.setItem('listaProdutos',JSON.stringify(lsProdutos));
 }
 lsProdutos = JSON.parse(localStorage.getItem('listaProdutos'));

function apagar(){
    id = document.getElementById("index").value
    if(id == ""){
        return;
    }

    if (confirm("você deseja excluir esse registro?")){
    lsProdutos.splice(id, 1)
    
    carregarTable()
    novo()
    
    }
}

function carregarTable(){
tbody ="";
for( i in lsProdutos){
    p = lsProdutos[i]
    //tbody += `<tr onclick ='editar(${i})'><td>${p.cod}</td><td>${p.grupo}</td><td>${p.descricao}</td><td>${p.valor}</td><td> <span onclick="mover(${i},-i)">&#8673; </span></td> <td> <span onclick="mover(${i},i)">&#8675;</span></td></tr>`;
    tbody += `<tr onclick="editar(${i})""><td>${p.cod}</td><td>${p.grupo}</td><td>${p.descricao}</td><td>${p.valor}</td><td><span onclick='mover(${i},-1)' >&#8673;</span><span onclick='mover(${i},1)'>&#8675;</span></td></tr>`;
    console.log (i)
}
document.getElementById('tb-corpo').innerHTML =  tbody;
localStorage.setItem('listaProdutos', JSON.stringify(lsProdutos));
 }
 function novo(){
     document.getElementById("formulario").reset();
     document.getElementById("index").value = '';
 }

function editar(id){
    p= lsProdutos[id]
    //alert(JSON.stringify(p))
    document.getElementById("cod").value = p.cod
    document.getElementById("grupo").value = p.grupo;
    document.getElementById("descricao").value = p.descricao;
    document.getElementById("valor").value = p.valor;
    document.getElementById("categoria").value = p.categoria
    document.getElementById("index").value = id;
}

function gravar(){
    id = document.getElementById("index").value
    p = { qt: 0 }
    p.cod = document.getElementById("cod").value 
    p.grupo = document.getElementById("grupo").value 
    p.categoria = document.getElementById("categoria").value 
    p.valor= document.getElementById("valor").value
    p.descricao = document.getElementById("descricao").value

    if(id != ''){
        lsProdutos [id] = p
        //alert(id)
    }else{
        lsProdutos.push(p)
    }
    // localStorage.setItem('listaProdutos',JSON.stringify(lsProdutos));
    carregarTable()
    novo()
}

function mover(i,mov){

    if(lsProdutos[i + mov]== undefined){
        return;
    }
   
    aux = lsProdutos[i]
    lsProdutos[i] = lsProdutos [i + mov]
    lsProdutos [i + mov] = aux
    carregarTable()             
    novo()
}
carregarTable()
