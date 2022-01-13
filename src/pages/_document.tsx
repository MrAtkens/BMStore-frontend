import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="ru">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="theme-color" content="#D10068"/>
                    <meta name='application-name' content="CATS"/>
                    <meta name='apple-mobile-web-app-capable' content='yes'/>
                    <meta name='apple-mobile-web-app-status-bar-style' content='default'/>
                    <meta name='apple-mobile-web-app-title' content='CATS'/>
                    <meta name='format-detection' content='telephone=no'/>
                    <meta name='mobile-web-app-capable' content='yes'/>
                    <meta name='msapplication-config' content='/static/icons/browserconfig.xml'/>
                    <meta name="msapplication-TileColor" content="#ffffff"/>
                    <meta name='msapplication-tap-highlight' content='no'/>
                    <meta name="msapplication-TileImage" content="/static/icons/mstile-144x144.png"/>

                    <meta property='og:type' content='website'/>
                    <meta property='og:title' content='CATS'/>
                    <meta property='og:description' content='Интернет магазин стройматериалов'/>
                    <meta property='og:site_name' content='CATS'/>

                    <link rel='shortcut icon' href='/favicon.ico' />
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="apple-touch-icon" sizes="57x57" href="/static/icons/apple-icon-57x57.png"/>
                    <link rel="apple-touch-icon" sizes="60x60" href="/static/icons/apple-icon-60x60.png"/>
                    <link rel="apple-touch-icon" sizes="72x72" href="/static/icons/apple-icon-72x72.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/static/icons/apple-icon-76x76.png"/>
                    <link rel="apple-touch-icon" sizes="114x114" href="/static/icons/apple-icon-114x114.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/static/icons/apple-icon-120x120.png"/>
                    <link rel="apple-touch-icon" sizes="144x144" href="/static/icons/apple-icon-144x144.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/apple-icon-152x152.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-icon-180x180.png"/>
                    <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/android-icon-192x192.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/favicon-96x96.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png"/>

                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
