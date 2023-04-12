import React from 'react'


import './main.scss'
interface Props {
    Component: any,
    pageProps: any
}
const App: React.FC<Props> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
}

export default App
