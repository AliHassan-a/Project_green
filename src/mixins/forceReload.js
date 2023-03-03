export default {
    install (Vue, options) {
        Vue.mixin({
            directives: {
                reload: {
                    inserted: function (el, binding, vnode) {
                        el.addEventListener('click', (evt) => {
                            // the URL we want to go to will be in el.href for g-link, a, b-button.
                            // it will be in evt.target.href for b-nav-item and b-navbar-brand (because those are composite components
                            // that render as <li><a></li>, or something like that)
                            if (process.isClient) {
                                evt.preventDefault();
                                window.location.href = evt.target.href || el.href;
                            }
                        });
                    }
                }
            },
        });
    }
}
