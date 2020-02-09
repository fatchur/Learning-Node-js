import Vuex from 'vuex'
import axios from 'axios'


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
            // example of server init
            // usually used for storing the config variable
            // executed once in the server at initialization
            nuxtServerInit(vueContext, context) {
                return axios.get('https://task1-d2d88.firebaseio.com/post.json')
                    .then(res => {
                        const postArray = []
                        for (const key in res.data) {
                            postArray.push({...res.data[key], id: key })
                        };
                        vueContext.commit('setPosts', postArray)
                            //console.log(vueContext.state.loadedPosts)
                    })
                    .catch(e => context.error(e))
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