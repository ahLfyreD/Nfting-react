import * as AiIcons from "react-icons/ai"
import * as TbIcons from "react-icons/tb"
import * as BiIcons from "react-icons/bi"
import * as MdIcons from "react-icons/md"

export const MenuData = [
    {
        title: 'Home',
        path: '/',
        icons: <AiIcons.AiOutlineHome/>,
        cName: 'nav-test'
    },
    {
        title: 'Explore',
        path: '/explore',
        icons: <TbIcons.TbListSearch/>,
        cName: 'nav-test'
    },
    {
        title: 'News Feed',
        path: '/newsfeed',
        icons: <BiIcons.BiNews/>,
        cName: 'nav-test'
    },
    {
        title: 'Market Stats',
        path: '/marketstatistics',
        icons: <MdIcons.MdQueryStats/>,
        cName: 'nav-test'
    },
]