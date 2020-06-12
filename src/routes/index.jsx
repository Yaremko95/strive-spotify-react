import React from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import AlbumsPage from "../pages/AlbumsPage";
import AlbumPage from "../pages/AlbumPage";



export default [
    {
        path:'/',
        layout: MainLayout ,
        component:Home,
        exact:true
    },
    {
        path:'/search',
        layout: MainLayout ,
        component:Search,
        exact:false
    },
    {
        path:'/albums',
        layout: MainLayout ,
        component:AlbumsPage,
        exact:false
    },
    {
        path:'/album',
        layout: MainLayout ,
        component:AlbumPage,
        exact:false
    },

]