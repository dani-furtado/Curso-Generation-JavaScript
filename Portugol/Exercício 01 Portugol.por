programa
{
	
	funcao inicio()
	{
		inteiro vetor[10], i, y, x


		  para (i=0;i<10;i++){
			escreva("Entre com algum número aleatório: ")
			leia(vetor[i])
			}


		escreva("O vetor digitado é: ")
		  para(i =0; i < 10; i++){
		     escreva(vetor[i], " ")
		    	}

		para (i=0;i<10; i++) {
			para (y=0; y<9; y++){
				se (vetor[y] < vetor[y+1]){
					x = vetor[y]
					vetor[y] = vetor[y+1]
					vetor[y+1] = x
				}	
			}
		}
	
		escreva("\nO vetor em ordem decrescente é: ")
			 para (i = 0; i < 10; i++) {
		      escreva(vetor[i], " ")
		   }				
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 412; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */