import React from 'react'
import styled from 'styled-components'

const The404 = styled.div`
    display:flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const C404 = () => {
    return (
        <div>
            <The404>
                <h1 className="c404">Oops page not Found</h1>  
            </The404>
        </div>
    )
}

export default C404