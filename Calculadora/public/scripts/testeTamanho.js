const $displayTimeEl = document.querySelector(".hora");
const $displayCalcEl = document.querySelector(".form-control.resultado");
const $dateEl = document.querySelector(".data");
     
    
// inicializa a data e a hora assim que a pagina é carregada
  window.onload = function init(){
         date()
         hour()
     }

     function date(){
     let dataty = new Date();
     $dateEl.value = dataty.toLocaleDateString('pt-BR');  
     }

     function hour(){
        setInterval(()=>{
            let clock = new Date();
            let hours = clock.toLocaleTimeString('pt-BR');
            $displayTimeEl.value =  hours.substring(0,5) ;
            
          }, 1000);
     }

     function compute(num)
     {  
        //  
         let display = document.querySelector('.form-control.resultado').value; 

         let parenteseEsquerda = countOpenParentheses(display) // parenteses para esquerda -> (
         let parenteseDireita =  countCloseParentheses(display) // parenteses para direita ->  )

         let prev = display.substr(-1) // captura o valor digitado anteriormente pelo usuario
         let n = num;

         n = n.trim()
         // limpa o display caso a operação retorne com Error
         if(display === "Error"){
           clean()
         } 
         // limpa o display caso a operação retorne com valor 0
         if(display.length == 1 && display === "0"){
           clean()
         }
     
       
      //se a quantidade de parenteses pra esquerda for menor ou igual a quantidade de paresenteses para direita
      // não deve ser possivel adicionar um novo parentese para direita apenas para esquerda
     if(n === ")")
        {
          if(parenteseEsquerda == '0')
           return
            
          if(parenteseEsquerda <= parenteseDireita) // Ex: ((  )  2 < 1
           return;
        }

     else if(n !== "(")
     {
      if(prev !== ")")
      {
        if(prev === '') // se o input estiver vazio e o primeiro valor digitado pelo usuario for um operador nada é inserido no display
        {
             if(isNaN(n)){
               return
             }
           }
        if(isNaN(prev) && isNaN(n)){ // se o valor anterior e o valor atual forem operadores nada é inserido no display
        return
        }
      }
    }

      insert(n)

     }
    
     function countOpenParentheses(display){  // (  esquerda
      let PE = [...display].filter(letra => letra === '(').length;
      return PE
     }
     function countCloseParentheses(display){ // )  direita
      let PD = [...display].filter(letra => letra === ')').length;
      return PD
     }

     function insert(n){
         document.querySelector('.form-control.resultado').value += n;
     }

     function clean()
     {
         document.querySelector('.form-control.resultado').value = "";
     }
     
     // deleta o ultimo valor digitado
     function back()
     {
         let resultado = document.querySelector('.form-control.resultado').value
         document.querySelector('.form-control.resultado').value = resultado.substring(0, resultado.length -1);
     }

     function calcular()
     {
         document.querySelector('.form-control.resultado"').innerHTML = "enviado"
     }

     const numberButtons = document.querySelectorAll('[data-number]')
     const operationButtons = document.querySelectorAll('[data-operation]')
     const equalsButton = document.querySelector('[data-equals]')
     const deleteButton = document.querySelector('[data-delete]')
     const ClearButton = document.querySelector('[data-clear-all]')

     numberButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          console.log(event.target.innerHTML)
          
          compute(event.target.innerHTML)
        })
      })
      
      operationButtons.forEach(button => {
        button.addEventListener('click', (event) => {
          console.log(event.target.innerHTML)
          compute(event.target.innerHTML)
        })
      })
      
      equalsButton.addEventListener('click', () => {
       calcular()
      })
      
      ClearButton.addEventListener('click', () => {
       clean()
      })
      
      deleteButton.addEventListener('click', () => {
       back()
      })
