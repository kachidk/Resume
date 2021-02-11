import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {IoMdContact} from 'react-icons/io';
import {RiArrowUpSFill, RiArrowDownSFill} from 'react-icons/ri';
import {CgFileDocument} from 'react-icons/cg';
import {HiOutlineDesktopComputer} from 'react-icons/hi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        iconClosed: <RiArrowDownSFill />,
        iconOpen: <RiArrowUpSFill />,       
    },

    {
        title: 'Resume',
        path: '/resume',
        icon: <CgFileDocument />,
        iconClosed: <RiArrowDownSFill />,
        iconOpen: <RiArrowUpSFill />,
    },
    
    {
        title: 'Projects',
        path: '/projects',
        icon: <HiOutlineDesktopComputer />,
    },

    {
        title: 'Contact',
        path: '/contact',
        icon: <IoMdContact />,
        iconClosed: <RiArrowDownSFill />,
        iconOpen: <RiArrowUpSFill />,
        
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

