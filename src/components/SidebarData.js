import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as CgIcons from 'react-icons/cg';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,       
    },

    {
        title: 'Resume',
        path: '/resume',
        icon: <CgIcons.CgFileDocument />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
    },
    
    {
        title: 'Projects',
        path: '/',
        icon: <HiIcons.HiOutlineDesktopComputer />,
    },

    {
        title: 'Contact',
        path: '/',
        icon: <IoIcons.IoMdContact />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        
        // subNav: [
        //     {
        //         title: 'Email',
        //         path: '/email/email',
        //         icon: <IoIcons.IoIosPaper />,
        //     },

        //     {
        //         title: 'Github',
        //         path: '/gitHub/gitHub',
        //         icon: <IoIcons.IoIosPaper />,
        //     },

        //     {
        //         title: 'Twitter',
        //         path: '/twitter/twitter',
        //         icon: <IoIcons.IoIosPaper />,
        //     },
        // ]
    },

]

