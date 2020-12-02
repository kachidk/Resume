import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    color: #e1e9fc;

    &:hover {
        background: #252831;
        border-left: 5px solid #8600c8;
        border-right: 5px solid #8600c8;
        color: #8600c8;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span `
    color: #e1e9fc;
    margin-left: 16px;
    
`;

const Dflex = styled.div `
    display: inline-flex;
    align-items: center;
`;

const DropdownLink = styled(Link) `
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #632ce4;
        color: #f5f5f5;
        cursor: pointer;  
    }
`;


const SubMenu = ({ abc }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
      
    return (
        <>
          <SidebarLink to={abc.path} onClick={abc.subNav && 
                    showSubnav}>
                <div>
                    <Dflex>
                        {abc.icon}
                        <SidebarLabel>{abc.title}</SidebarLabel>
                    </Dflex>
                </div>
                <div>
                    {abc.subNav && subnav 
                       ? abc.iconOpen 
                       : abc.subNav 
                       ? abc.iconClosed 
                       : null }
                </div>
          </SidebarLink>
            {subnav && abc.subNav.map((abc, index) => {
               return ( 
                <DropdownLink to={abc.path} key={index}>
                    {abc.icon}
               <SidebarLabel>{abc.title}</SidebarLabel>
                </DropdownLink>
               )
           })} 
        </>
    )
}

export default SubMenu;

