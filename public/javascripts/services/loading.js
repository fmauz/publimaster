publimasterApp.factory('httpIndicatorInterceptor', function () {
    return {
        'beforeRequest': function (httpConfig, resourceConstructor, context) {
            show_loading_bar({pct:20, delay: 0.3});
            return httpConfig;
        },
        'afterResponse': function (result, resourceConstructor, context) {
            show_loading_bar({pct:100, delay: 0.3});
            return result;
        }
    };
});