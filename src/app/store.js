import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

const saveToLocalStorage = (state) => {
    console.log({ store: state });
    try {
        let existingState = loadFromLocalStorage() || {}

        if (!existingState) {
            if (state.user.userData) {
                existingState[state.user.userData.username] = state.user.userData
                existingState.lastSignedInUser = state.user.userData.username
            }
        } else {
            if (state.user.userData) {
                existingState[state.user.userData.username] = state.user.userData
                existingState.lastSignedInUser = state.user.userData.username
            }
        }

        localStorage.setItem('simple-form', JSON.stringify(existingState));

    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('simple-form');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        return undefined;
    }
};

const reducer = {
    user: userReducer
};

let stateStructure = {
    user: {
        userData: null
    }
}

const preloadedState = () => {
    let existingState = loadFromLocalStorage()

    if (!existingState) return stateStructure

    stateStructure.user.userData = existingState[existingState.lastSignedInUser]

    return stateStructure
}

const store = configureStore({
    reducer,
    preloadedState: preloadedState()
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;