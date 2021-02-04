const Emitter = require('./emitter');

const emitter = new Emitter();

//onSave
emitter.on('save', ()=>{
    console.log('On save activated1');
});

emitter.on('save', ()=>{
    console.log('On save activated2');
});

emitter.emit("save");
