export function createStore(reducer, preloadedState) {
    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = [];
    let nextListeners = currentListeners;

    function getState() {
      return currentState;
    }

    function dispatch(action) {
      currentState = currentReducer(currentState, action);
      const listeners = (currentListeners = nextListeners);
      for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i];
        listener();
      }
      return action;
    }

    function subscribe(listener) {
      nextListeners.push(listener);
    }
    
    return {
      getState,
      dispatch,
      subscribe,
    };
  }