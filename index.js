const { EventEmitter } = require('events');
const { SAVE } = require('./event_name');

const emitter = new EventEmitter();
//           > magic string
emitter.on(SAVE, ()=>{
    console.log('On save activated1');
});

emitter.on(SAVE, ()=>{
    console.log('On save activated2');
});

emitter.emit(SAVE);
