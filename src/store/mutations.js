const mutations = {
    set_isAdmin_true(state) {
        state.isAdmin = true
    },
    set_user(state,username) {
        state.username = username
    },
}
export { mutations }
