function Emitter(){
    this.events = {}
}

//modificar el prototipo de dicha funcion
// created new function on
//los evento siempre se invocan con ujna palabra on 
// ejemplo : onDeleted
//           onSaved
//           onUpdated
//sera la funcion que va a registrar dicho evento comom un tipo

//registra el evento
Emitter.prototype.on = function(type, listener ){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}


//emite el tipo de evento onsave ondelet ..etc
Emitter.prototype.emit = function(type){
    if (this.events[type]) {
        this.events[type].forEach((listener)=> {
            listener() 
        });
    }
}

module.exports = Emitter;