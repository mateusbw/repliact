import React from './react.js'

const ReduxContext = React.createContext()

export function useDispatch(){
    const store = React.useContext(ReduxContext);

    const dispatch = (action) => {
        store.dispatch(action)
    }
    return dispatch
}

export function useSelector(callback){
    const store = React.useContext(ReduxContext);

    const [value, setValue] = React.useState(callback(store.getState()))

    store.subscribe(() => {
        setValue(store.getState().value)
    })

    return value
}

export function Provider({store, children}){
    return (
        <ReduxContext.Provider value={store}>
            {children}
        </ReduxContext.Provider>
    )
}