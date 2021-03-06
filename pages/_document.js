//13-3. 서버사이드 랜더링 도입하기

//13-3-3. next.js를 통해 출력할 화면 만들기


import React from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import { StyleSheetServer } from 'aphrodite';

class MyDocument extends Document{
    static async getInitialProps( renderPage ){
        const { html, css } = StyleSheetServer.renderStatic( () => renderPage );
        const { renderedClassNames: ids } = css;
        return { ...html, css, ids }; 
    }

    constructor(props){
        super(props);
        const { __NEXT_DATA__, ids} = props;
        if(ids){
            __NEXT_DATA__.ids = this.props.ids;
        }
    
    }

    render(){
        return(
            <Html>
                <Head>
                    <style>{`
                        body{
                            margin: 0;
                            padding: 0;
                            font-family: Roboto, Helvetica, Arial, sans-serif;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                            background-color: #eeeeee;
                        }`
                    }</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;