import { createHashRouter, Navigate } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout/MainLayout';

import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Recipes from '@/pages/Recipes/Recipes';
import RecipeDetails from '@/pages/RecipeDetails/RecipeDetails';

export const router = createHashRouter([
    {
        path: '/',
        element: <MainLayout />,

        children: [
            {
                index: true,
                element: <Home />,
            },

            {
                path: 'about',
                element: <About />,
            },

            {
                path: 'recipes',
                element: <Recipes />,
            },

            {
                path: 'recipes/:id',
                element: <RecipeDetails />,
            },

            {
                path: '*',
                element: <Navigate to='/' replace />,
            },
        ],
    },
]);
