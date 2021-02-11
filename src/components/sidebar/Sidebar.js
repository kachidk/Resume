import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import { SidebarData }  from './SidebarData';
import SubMenu from './SubMenu';



const NavIcon1 = styled(Link) `
    margin-left: 2rem;
    margin-top: 3rem;
    margin-right: 1rem;
    font-size: 2rem;
    display: inline;
    align-items: center;
    color: #8600c8;
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: content-box;
    border: 2px solid #8600c8;
    padding: 4px;
    border-radius: 0.375rem;
    animation: bounce 1s infinite;

    @media (min-width: 640px) {
        margin-top: 2.7rem; 
        margin-right: 2.2rem;
    } 

    @media (min-width: 768px) { 
        margin-top: 3.1rem; 
        margin-right: 2.2rem;
    } 

    @media (min-width: 1024px) { 
        margin-top: 3.1rem; 
        margin-right: 2.3rem;
    }

    @media (min-width: 1280px) {
        margin-top: 3.18rem; 
        margin-right: 3.3rem;
    }  
`;
    

const NavIcon2 = styled(Link) `
    margin-left: 2rem;
    font-size: 2rem;
    height: 85px;
    margin-right: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;

`;

const SidebarNav = styled.nav `
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    @media (max-width: 768px ){
        width: 100%;
    }
`;

const SidebarWrap = styled.div `
    width: 100%;
    color: white;
`;

const SidebarBackground = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto; 
    background-color: rgba(0,0,0,0.1);
    cursor: pointer;
`;

const Sidebar = () => {


const [sidebar, setSidebar] = useState(false) 

const showSidebar = () => setSidebar(!sidebar)


    return (
        <>           
                
                <NavIcon1 to="#">
                    <FaBars onClick={showSidebar}/>
                </NavIcon1>               
            { sidebar && <SidebarBackground onClick={showSidebar}/> }
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon2 to="#">
                        <AiOutlineClose onClick={showSidebar} />
                    </NavIcon2>
            
                    {SidebarData.map((abc, index) => {
                        
                    return <SubMenu abc={abc} key={index} showSidebar={showSidebar} />;
                        
                    })}

                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Sidebar
