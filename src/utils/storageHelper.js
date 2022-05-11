export const clearUserSession = (username) => {
    let storage = localStorage.getItem('simple-form');
    storage = storage ? JSON.parse(storage) : {}

    if (storage) delete storage[username]

    if (storage.lastSignedInUser === username) delete storage.lastSignedInUser

    localStorage.setItem('simple-form', JSON.stringify(storage))
}