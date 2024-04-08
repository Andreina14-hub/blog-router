import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './component/Inicio';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Header from './component/Header';
import Error404 from './component/Error404';
import Post from './component/Post';
import styled from 'styled-components';

const App = () => {
    return (
        <BrowserRouter>
            <ContenedorPrincipal>
                <Header />

                <Main>
                    <Routes>
                        <Route path="*" element={<Error404 />} />
                        <Route path="/" element={<Inicio />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/post/:id" element={<Post />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                </Main>
            </ContenedorPrincipal>
        </BrowserRouter>
    );
}

const ContenedorPrincipal = styled.div`
        padding: 40px;
        width: 90%;
        max-width: 700px;
    `;

const Main = styled.main`
        background: #fff;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
    `;

export default App;


