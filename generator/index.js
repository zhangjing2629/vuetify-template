module.exports = (api, options, rootOptions) => {

    /**
     * --modern 使用现代模式构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退
     * --mode test, sandbox,online 对应.env.test 不同环境模式
     * 
     * 
    */

    const pkg = {
        scripts: {
            'build:test': 'cross-env APP_NS=test vue-cli-service build --dest dist/test --mode test --modern',
            'build:sandbox': 'cross-env APP_NS=sandbox vue-cli-service build --dest dist/sandbox --mode sandbox --modern',
            'build:online': 'cross-env APP_NS=online vue-cli-service build --dest dist/online --mode online --modern',
        },
        devDependencies: {
            "node-sass": "^4.13.1",
            "sass-loader": "^8.0.2",
            "mockjs": "^1.0.1-beta3",
            "postcss-px2rem": "^0.3.0",
            '@types/express': '^4.16.0',
            '@types/webpack-chain': '^4.8.1',
            'cross-env': '^5.2.0',
            'mockjs': '^1.0.1-beta3',
            'express': '^4.16.4',
            'mocker-api': '^1.6.6'
        },
        dependencies: {
            "axios": "^0.18.0",
            "lodash": "^4.17.10",
            "keymirror": "^0.1.1"
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
