module.exports = (api, options, rootOptions) => {

    /**
     * --modern 使用现代模式构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退
     * --mode test, sandbox,online 对应.env.test 不同环境模式
     * 
     * 
    */

    const pkg = {
        scripts: {
            "dev": "vue-cli-service serve --open",
            "serve": "vue-cli-service serve",
            "build": "vue-cli-service build",
            "lint": "vue-cli-service lint",
            "i18n:report": "vue-cli-service i18n:report --src './src/**/*.?(js|vue)' --locales './src/locales/**/*.json'",
            "now-start": "vue-cli-service serve",
            "test:e2e": "vue-cli-service test:e2e",
            "test:unit": "vue-cli-service test:unit"
        },
        devDependencies: {
            "@vue/cli-plugin-babel": "^4.1.2",
            "@vue/cli-plugin-e2e-cypress": "^4.1.2",
            "@vue/cli-plugin-eslint": "^4.1.2",
            "@vue/cli-plugin-unit-jest": "^4.1.2",
            "@vue/cli-service": "^4.1.2",
            "@vue/eslint-config-standard": "^5.0.1",
            "@vue/test-utils": "1.0.0-beta.30",
            "babel-core": "7.0.0-bridge.0",
            "babel-eslint": "^10.0.3",
            "babel-jest": "^24.9.0",
            "eslint": "^6.8.0",
            "eslint-config-vuetify": "^0.4.1",
            "eslint-plugin-vue": "^6.1.2",
            "sass": "^1.24.3",
            "sass-loader": "^8.0.0",
            "vee-validate": "^3.2.2",
            "vue-chartist": "^2.2.1",
            "vue-cli-plugin-i18n": "^0.6.0",
            "vue-cli-plugin-vuetify": "^2.0.3",
            "vue-template-compiler": "^2.6.11",
            "vue-world-map": "^0.1.1",
            "vuetify-loader": "^1.4.3"
        },
        dependencies: {
            "core-js": "^3.6.2",
            "vue": "^2.6.11",
            "vue-i18n": "^8.15.3",
            "vue-router": "^3.1.3",
            "vuetify": "^2.3.6",
            "vuex": "^3.1.2"
        },
        babel: {},
    };
    // 安装一些基础公共库
    api.extendPackage(pkg)

    // 安装 vuex
    // if (options.vuex) {
    //     api.extendPackage({
    //         dependencies: {
    //             vuex: '^3.0.1'
    //         }
    //     });

    //     api.render('./template/vuex');
    // }

    // 安装 element-ui 库
    // if (options.elementUI) {
    //     api.extendPackage({
    //         devDependencies: {
    //             "element-ui": "^2.4.6"
    //         }
    //     });
    // }

    // 公共基础目录和文件
    api.render('./template');
    // 配置文件  
}
