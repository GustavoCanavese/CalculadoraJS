function pegaValor(tipo, valor){
        
    if (tipo === 'num'){
      document.getElementById('campo').value += valor

    } else if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.'){
      document.getElementById('campo').value += valor
      

    } else if (valor === ''){
      document.getElementById('campo').value = ''

    } else if (valor === '='){
      var valorCampo = document.getElementById('campo').value
      document.getElementById('campo').value = eval(valorCampo)
    }

    
  }