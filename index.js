const filaAtendimento = [
    'Marcos',
    'Fernanda',
    'Lucas',
    'Juliana',
    'Roberto'
];

console.log('Fila inicial:');
console.log(filaAtendimento);

const pacienteCancelado = filaAtendimento.splice(2, 1);

console.log('Paciente removido:');
console.log(pacienteCancelado);

console.log('Fila após cancelamento:');
console.log(filaAtendimento);

filaAtendimento.splice(1, 0, 'Carla Prioridade');

console.log('Fila após adicionar paciente prioritária:');
console.log(filaAtendimento);

const substituicaoPaciente = filaAtendimento.splice(3, 1, 'Ricardo');

console.log('Paciente substituído:');
console.log(substituicaoPaciente);

console.log('Fila final de atendimento:');
console.log(filaAtendimento);