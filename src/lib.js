var event_handlers = {};
var effects_handlers = {};
var coeffects_handlers = {};
var state = {todos: []};

function extractCoeffectsValues(coeffects_descs) {
  return coeffects_descs.reduce(
    function(acc, cofx){
      var cofx_id = cofx[0],
        cofx_args = cofx[1],
        fn = coeffects_handlers[cofx_id];
        acc = fn(acc, cofx_args);

        return acc;
    },
    {});
}

function applyEffects(effects) {
  var effect_ids = Object.keys(effects);
  effect_ids.forEach(
    function(effect_id) {
      var effect_data = effects[effect_id],
           effect_handler = effects_handlers[effect_id];
           effect_handler(effect_data);
    }
  );
}

function register_event_handler(event_id, handler, coeffects_descs) {
  event_handlers[event_id] = function (payload) {
    var coeffects = extractCoeffectsValues(coeffects_descs);
    var effects = handler(coeffects, payload);
    applyEffects(effects);  
  }; 
}

function register_cofx_handler(cofx_id, handler){
  coeffects_handlers[cofx_id] = handler;
}

function register_fx_handler(fx_id, handler){
  effects_handlers[fx_id] = handler;
}

function dispatch(event_id, payload) {
  var event_handler = event_handlers[event_id];
  return event_handler(payload);
}

function dispatch_n(events) {
  events.forEach(
    function(event) {
      const [event_id, payload] = event; 
      dispatch(event_id, payload);
    });
}

register_fx_handler("dispatch", 
 function(event) { 
   const {id, payload, milliseconds} = event;
   dispatch(id, payload);
});

register_fx_handler("dispatch_n", dispatch_n);

register_fx_handler("dispatch_Later", 
 function(event) { 
  const {id, payload, milliseconds} = event;

  setTimeout(function() {
    dispatch(id, payload);
  },
  milliseconds);
});


/////////////////////////////////////////////

// [{path: ["id_usuario"], key: "id_usuario"}, {path: ["nombre_usuario"], key: "nombre_usuario"}]
register_cofx_handler(
  "state", 
  function(coeffects, extractions) {
    var result = extractions.reduce(
      function(acc, extraction) {
        var path = extraction.path,
            key = extraction.key;
            acc[key] = state[path[0]];
            return acc;
      },
      {}
    );
    coeffects["state"] = result; 
    return coeffects;}
);

register_cofx_handler(
  "datetime", 
  function(coeffects) { 
    coeffects["datetime"] = Date.now(); 
    return coeffects;}
);

register_cofx_handler(
  "api_url", 
  function(coeffects) { 
    coeffects["api_url"] = "api-trovit/"; 
    return coeffects;}
);


register_fx_handler("mutate", 
  function(mutations) { 
    mutations.forEach(
      function(mutation) {
        state[mutation.path[0]] = mutation.new_value;
    });
   
});

register_fx_handler("get", 
 function(request_description) { 
   const [event_id, arg] = request_description.success_event;
   var promise = fetch(request_description.url).then(res => res.json()).then(response => dispatch(event_id, response.data)) 
});


//{:mutate [{path: ["x", "y"], value: "koko"}]
//  :dispatch_n [event_1, event_2]}

//[{path: ["id_usuario"], key: "id_usuario"}, {path: ["nombre_usuario"], key: "nombre_usuario"}]

// https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b

register_event_handler(
  "loadTodos", 
  function loadTodos(coeffects, payload) {
    var api_url = coeffects["api_url"],
        state = coeffects["state"];
        return {"get": {//"url": api_url + "/" + state.id_usuario,
                        "url": "https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b",
                        "success_event": ["loadTodosSucceeded", state.id_usuario]}};
      }, 
  [["api_url"], ["state", [{path: ["user_id"], key: "id_usuario"}]]]);
  
register_event_handler(
  "loadTodosSucceeded", 
  function loadTodosSucceeded(coeffects, response_data) {
    return {"mutate": [{path: ["todos"], new_value: response_data}]};
  }, 
  []);
