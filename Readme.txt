1)
-->ABERTURA DE MENSAGENS NA PÁGINA:
	
	window.alert(''); // APARECE APENAS UMA MENSAGEM DE ALERTA
	window.confirm('');  // JANELA COM BOTÃO DE OK E CANCELAR
	window.prompt(''); // JANELA DE PERGUNTA

	--------//---------
2)
-->UTILIZANDO VARIÁVEL

	<script>
		var nome = window.prompt('QUAL É O SEU NOME'); // A JANELA VAI PERGUNTAR O SEU NOME
		window.alert('É UM GRANDE PRAZER EM TE CONHECER, ' + nome) // + SERVE PARA CONCATENAR
	</script>
 

	--------//---------

3)
-->UTILIZANDO A FUNÇÃO DE SOMA E CONCATENAÇÃO NO JAVASCRIPT

<body>
    	<h1>Olá, mundo!</h1> <!--Isso é um comentário-->
    	<p>Já me livrei da maldição</p>
   	<script>
       		var n1 = Number(window.prompt('Digite um número: ')) //string //Number.parseInt() - serve para converter String em Number real (2)
       		var n2 = Number(window.prompt('Digite outro número: ')) //string //Number.parseFloat() - serve para converter String em Number Inteiro (5.5)
       		var s = n1 + n2
       		window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`)


       		// (number + number) serve para adição
       		// (string + string) serve também para concatenação
       		//Number.parseInt - para números inteiros sem ponto ex: 2, 3, 10, 188856 etc
       		//Number.parseFloat - para números com ponto ex: 1.2 , 2.36 , 3.789 etc
       		//Para converter o número para String (String (n)) ou n.toString()
    	</script>
</body>


	--------//---------

4)
-->COMANDOS: 
	*document.write()
	*s.toUpperCase()
	*s.toLowerCase()
	*n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // PARA ALTERAR A MOEDA DE QUALQUER VALOR
	*n.toFixed(2) // PARA O NÚMERO UTILIZAR 2 CASAS DECIMAIS DEPOIS DA VIRGULA
	*n.toFixed(2).replace('.',',') // PARA TROCAR O PONTO POR VIRGULA

EX:

	    <script>
        	var nome = window.prompt ('Qual é o seu nome?')
        	document.write(`Olá <strong>${nome}</strong>! seu nome tem ${nome.length} letras.</br>`)
        	document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}</br>`)
        	document.write(`Seu nome em minúsculos é ${nome.toLowerCase()}.`)
	    </script>

	--------//---------
5)
--> OPERADORES DO JAVASCRIPT:

	5.1-->OPERADORES ARITIMÉTICOS:

		+  (SOMA)
		-  (SUBTRAÇÃO)
		*  (MULTIPLICAÇÃO)
		/  (DIVISÃO) - DIVISÃO INTEIRA
		%  (A SOBRA DA DIVISÃO QUANDO É NÚMERO COM VIRGULA)
		** (POTÊNCIA)


	5.2-->OPERADORES DE ATRIBUIÇÃO SIMPLES:					   
								
		var a = 5 + 3		-->	8					
		var b = a % 5		-->	3					
		var c = 5 * b ** 2  	-->	45					
		var d = 10 - a / 2	-->	6					
		var e = 6 * 2 / d	-->	2					
		var f = b % e + 4 / e	-->	3					


	5.2.1-->OPERADORES DE AUTO-ATRIBUIÇÃO:

		var n = 3						*SIMPLIFICANDO:
		n = n + 4	-> (n passa a ser 7)			    n += 4
		n = n - 5 	-> (n passa a ser 2)			    n -= 5
		n = n * 4	-> (n passa a ser 8)			    n *= 4
		n = n / 2	-> (n passa a ser 4)			    n /= 2
		n = n ** 2 	-> (n passa a ser 16)			    n **= 2
		n = n % 5	-> (n passa a ser 1)			    n %= 5


	5.2.2-->OPERADORES DE INCREMENTO:

		var n = 10
		n ++		-> 11
		n -- 		-> 9


	5.3-->OPERADORES RELACIONAIS:

		5 > 2	--> TRUE
		7 < 4	--> FALSE
		8 >= 8 	--> TRUE
		9 <= 7	--> FALSE
		5 == 5	--> TRUE  (5 É IGUAL(==) A 5?)
		4 != 4	--> FALSE (4 É DIFERENTE(!=) DE 4?)


	5.4-->OPERADORES IDENTIDADE:

		5 == 5	--> TRUE
		5 == '5'--> TRUE
		5 === '5'-> FALSE 	// "===" IDÊNTICO
		5 === 5 --> TRUE


	5.5-->OPERADORES LÓGICOS:

		!	--> 	NEGAÇÃO		--> É UM "NÃO" 		// EU NÃO QUERO UMA CANETA AZUL
		&&	--> 	CONJUNÇÃO	--> É UM "E" LÓGICO	// QUERO UMA CANETA AZUL E VERMELHA
		||	--> 	DISJUNÇÃO	--> É O "OU" LÓGICO	// QUERO UMA CANETA AZUL OU VERMELHA


		* NEGAÇÃO

		! TRUE 	     --> FALSE	// UMA COISA QUE NÃO É VERDADEIRA É O QUE? FALSA
		! FALSE	     --> TRUE	// UMA COISA QUE NÃO É FALSA É O QUE? VERDADEIRA


		* CONJUNÇÃO

		TRUE && TRUE --> TRUE	// EU QUERO UMA CANETA AZUL E VERMELHA - EU CONSEGUI AS DUAS (TRUE E TRUE) ENTÃO É VERDADEIRA
		TRUE && FALSE--> FALSE	// AS DEMAIS SÃO FALSAS PQ NENHUMA DAS OUTRAS OPÇÕES VÃO SER AS DUAS CANETAS QUE EU QUERO.
		FALSE && TRUE--> FALSE	// AS DEMAIS SÃO FALSAS PQ NENHUMA DAS OUTRAS OPÇÕES VÃO SER AS DUAS CANETAS QUE EU QUERO.
		FALSE && FALSE-> FALSE  // AS DEMAIS SÃO FALSAS PQ NENHUMA DAS OUTRAS OPÇÕES VÃO SER AS DUAS CANETAS QUE EU QUERO.


		* DISJUNÇÃO

		TRUE || TRUE  --> TRUE
		FALSE || TRUE --> TRUE
		TRUE || FALSE --> TRUE
		FALSE || FALSE--> FALSE

*AS ORDENS DE OPERAÇÕES SÃO OS:
	1- ARITIMETICOS
	2- RELACIONAIS
	3- LÓGICOS

				*EXEMPLOS:

		IDADE >= 15 && IDADE <= 17		//	A IDADE ESTÁ ENTRE 15 E 17?
		ESTADO == 'RJ' || ESTADO == 'SP'	//	O ESTADO É RJ OU SP?
		SALÁRIO > 1500 && SEXO != 'M'		//	O SALÁRIO É MAIOR DE 1500 E O SEXO É DIFERENTE DE MASCULINO? OU SEJA, O SALÁRIO É MAIOR DE 1500 E NÃO É HOMEM?


	5.6-->OPERADORES TERNÁRIO (? E :):

		TESTE ? TRUE : FALSE