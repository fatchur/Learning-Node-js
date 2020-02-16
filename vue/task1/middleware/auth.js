export default function(context) {
    if (context.store.state.idToken == null) {
        context.redirect('/admin/auth')
    }
    // also you can return an axios promise
}