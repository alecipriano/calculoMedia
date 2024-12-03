let alunos = [
	 ["André", 6.1, 5.7, 3],
    ["Alex", 8.5, 6.7, 5],
    ["Cibele", 6.5, 7.7, 9],
    ["Paty", 5.7, 6.5, 5],
    ["Amanda", 8.5, 8.7, 10],
    ["Lucas", 7.8, 8.9, 10],
    ["Mel", 7.5, 6.7, 9.3],
]

for (let i = 0; i < alunos.length; i++){
	 let nome = alunos[i][0];
    let notaUm = alunos[i][1];
    let notaDois = alunos[i][2];
    let notaTres = alunos[i][3];
    let mensagem = "";
        
    function avaliarAluno(notaUm,notaDois, notaTres){
      let media = 0;
      
      media = ((notaUm + notaDois + notaTres) / 3).toFixed(1);
    
      if (media <  5 ){
          mensagem = "Reprovado";
      } else if ( media < 6){
          mensagem = "enviado para Recuperação";
      } else if ( media < 8){
          mensagem = "Aprovado";
      } else {
          mensagem = "Aprovado com louvor";
      }   
      
      console.log(`Aluno(a) ${nome} ficou com média ${media} portanto foi ${mensagem}.`);
    
    }
  
  avaliarAluno(notaUm, notaDois, notaTres);
    
}
