var word_list = [
    'Afobado',
    'Amarelo',
    'Amendoim',
    'Modernidade',
    'Banheiro',
    'Caatinga',
    'Amor',
    'Cachorro',
    'Campeonato',
    'Capricornio',
    'Avo',
    'Catapora',
    'Corrupcao',
    'Champanhe',
    'Crepusculo',
    'Bebe',
    'Empenhado',
    'Esparadrapo',
    'Clube',
    'Forca',
    'Galexia',
    'Histeria',
    'Elefante',
    'Coracao',
    'Magenta',
    'Desalmado',
    'Noite',
    'Manjericao',
    'Menta',
    'Visceral',
    'Moeda',
    'Oracao',
    'Fugaz',
    'Basquete',
    'Ovo',
    'Pacoca',
    'Palavra',
    'Pedreiro',
    'Pneumonia',
    'Refeicao',
    'Pijama',
    'Pulmao',
    'Rotatoria',
    'Serenata',
    'Transeunte',
    'Faca',
    'Coelho',
    'Trilogia',
    'Impacto',
    'Xicara'
]; 
    
function random(){
    item = word_list[Math.floor(Math.random()*word_list.length)].toUpperCase();
    var container = document.getElementById('container');
    var size = item.length;
    var container = document.getElementById('words');
    for(var i = 0; i < size; i++){
        container.innerHTML+='<li class='+ i + '> _ </li>'
    }
    return item;
};

    