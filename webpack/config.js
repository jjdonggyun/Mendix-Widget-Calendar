const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/MainCalendar.tsx', // TypeScript 엔트리 파일 지정
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // 번들된 파일이 저장될 경로
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // 파일 확장자 설정
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // CSS 파일을 처리하는 룰 추가
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // index.html 템플릿 파일 경로
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // 개발 서버에서 제공할 디렉토리
        },
        port: 8080, // 개발 서버 포트
        open: true, // 서버 시작 시 브라우저 자동으로 열기
        hot: true,  // 핫 리로딩 활성화
    }
};
