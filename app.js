// Getting value element
let value = document.getElementById("value");

// Creating Reducer
const counter = (state = 0, action) => {
    switch (action.type){
        case "INCREMENT": 
            return state = state + 1
        case "DECREMENT": 
            return state = state - 1
        default:
            return state;
    }
}

// Creating store
let store = Redux.createStore(counter);

// Adding eventlisteners to buttons
document.getElementById("increment").addEventListener("click", ()=>{
    store.dispatch({type: "INCREMENT"})
})
document.getElementById("decrement").addEventListener("click", ()=>{
    store.dispatch({type: "DECREMENT"})
})

// Creating render function
const render = () => {
    value.innerHTML = store.getState();
}

// Subscribing to changes in store - if some changes will happen, render function will fire
store.subscribe(render);




