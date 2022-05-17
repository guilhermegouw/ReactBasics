import React from "react";
const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colSpan="4">Tabela de Livros</th>
        </tr>
        <tr>
            <th>ISBN
                <div className="container-setinhas">
                    <div onClick={ () => props.ordenarIsbnCrescente()}>&#11014;</div>
                    <div onClick={ () => props.ordenarIsbnDecrescente()}>&#11015;</div>
                </div>
            </th>
            <th>Título
                <div className="container-setinhas">
                    <div onClick={ () => props.ordenarTituloCrescente()}>&#11014;</div>
                    <div onClick={ () => props.ordenarTituloDecrescente()}>&#11015;</div>
                </div>
            </th>
            <th>Author
                <div className="container-setinhas">
                    <div onClick={ () => props.ordenarAutorCrescente()}>&#11014;</div>
                    <div onClick={ () => props.ordenarAutorDecrescente()}>&#11015;</div>
                </div>
            </th>
            <th></th>
        </tr>
    </thead>
);
export default TabelaHead;