import React from 'react';

const Banner = () => {
    <div className="main-banner img-container" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" alt="hola"/>
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Curso de EDTeam</p>
                    <p>Tu futuro te esta esperando</p>
                    <a href="https:instagram.com/avenfor_es" className="button">Subscribirte</a>
                </div>
            </div>
        </div>
    </div>
}

export default Banner;