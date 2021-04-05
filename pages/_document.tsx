import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document";
import { defaultLocale } from '../translations/config';
import { mediaStyles } from "../utils/media";


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={defaultLocale}>
        <Head>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
          />
          <link rel='stylesheet' href='https://highlightjs.org/static/demo/styles/railscasts.css'/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}