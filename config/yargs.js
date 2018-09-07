const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplcar', opts)
    .command('crear', 'crea archivo con la tabla de acuerdo a la base y al limite', opts)
    .help()
    .argv;

module.exports = {
    argv
}