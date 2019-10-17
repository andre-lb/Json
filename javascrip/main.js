$(document). ready(fuction(){
    $.ajax({
        type:'GET',
        contentType:'application/json',
        url:'https://gilsonpolito-api.herokuapp.com/alunos',
        dataType:'json',
        sucess:function(data,textStatus,jqXHR){
         $.each(data, function(index,itemData){
          insereLinha(itemData.id,itemData.nome,itemData.site);
         });
        },
        error: function(jqXHR,textStatus,errorThrown){
         alert('Status: '+ textStatus + ' \nTipo:' +errorThrown +'\nMensagem:' + jqXHR.responseText);
        }
     
    })

})
function insereLinha(id,nome,site){
    let linha='<tr>'+ 
    '<td class=\'col-xs-2>'+
    '<img src=\'imagens/editar.jpeg\' /></td><td> ' +
     '<img src=\'imagens/editar.jpeg\' />'+
     '</td><td class=\'col-xs-4'>' + 
     nome + 
     '</td>'
     '<tdclass=\'col-xs-6'>+ 
     site + 
     '</td>'+
     '</tr>';
    $('#alunoTable').append(Linha);
}