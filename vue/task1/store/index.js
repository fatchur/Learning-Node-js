import Vuex from 'vuex'
import axios from 'axios'


const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            isAdmin: false,
            idToken: null
        },

        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            setAdmin(state, isAdmin) {
                state.isAdmin = isAdmin;
            },
            setIdToken(state, idToken) {
                state.idToken = idToken;
            }
        },

        actions: {
            // example of server init
            // usually used for storing the config variable
            // executed once in the server at initialization
            nuxtServerInit(vueContext, context) {
                return axios.get(process.env.baseUrl + '/post.json')
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
            },
            authenticate(vueContext, data) {
                let authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + process.env.fbAPIKey;

                if (!data.isLogin) {
                    authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + process.env.fbAPIKey;
                }

                axios.post(authUrl, {
                    email: data.email,
                    password: data.password,
                    returnSecureToken: true,
                }).then(result => {
                    console.log(result);
                    vueContext.commit('setIdToken', result.data.idToken);
                }).catch(e => {
                    console.log('error', e)
                })
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