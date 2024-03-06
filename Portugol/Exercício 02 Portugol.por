programa
{
	
	funcao inicio()
	{
		inteiro vetor[10], i, x, soma
		real media


		  para (i=0;i<10;i++){
			escreva("Entre com algum número aleatório: ")
			leia(vetor[i])
			}


		escreva("O vetor digitado é: ")
		  para(i =0; i < 10; i++){
		     escreva(vetor[i], " ")
		    	}

		escreva("\nOs elementos ímpares são: ")
			 para (i = 0; i < 10; i++) {
			      se (i % 2 != 0) {
			      	escreva(vetor[i], " ")
			      }
		   }

		escreva("\nOs elementos pares são: ")
			 para (i = 0; i < 10; i++) {
			      se (i % 2 == 0) {
			      	escreva(vetor[i], " ")
			      }
		   }
		   
		
		
		soma = 0
			 para (i = 0; i < 10; i++) {
			      soma += vetor[i]
		   }
		escreva("\nA soma de todos os valores é: ", soma)

		media = soma/10
		escreva("\nA média de todos os valores é: ", media)
		   
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 796; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */