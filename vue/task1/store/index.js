import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            isAdmin: false
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            setAdmin(state, isAdmin) {
                state.isAdmin = isAdmin;
            }
        },
        actions: {
            // set isAdmin by default
            nuxtServerInit(vueContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vueContext.commit('setAdmin', false)
                        console.log('hereeeeeeeeeeeeee')
                    }, 100);
                })
            },
            setPosts(vueContext, posts) {
                vueContext.commit('setPosts', posts);
            },
            setAdmin(vueContext, isAdmin) {
                vueContext.commit('setAdmin', isAdmin);
            }
        },
        getters: {
            loadedPosts(state) {
                console.log('loaded posts')
                return state.loadedPosts;
            },
            isAdmin(state) {
                console.log('admin')
                return state.isAdmin;
            }
        }
    });
}

export default createStore