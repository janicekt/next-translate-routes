import type { NextComponentType } from 'next';
import { AppContextType, AppInitialProps } from 'next/dist/shared/lib/utils';
import { NextRouter } from 'next/router';
import React from 'react';
import type { TNtrData } from '../types';
declare type TWrappedAppComponent = NextComponentType<AppContextType<NextRouter>, AppInitialProps, any>;
/**
 * Must wrap the App component in `pages/_app`.
 * This HOC will make the route push, replace, and refetch functions able to translate routes.
 */
export declare const withTranslateRoutes: (...args: (TWrappedAppComponent | TNtrData)[]) => React.FunctionComponent<any> & {
    getInitialProps?(context: AppContextType<NextRouter>): AppInitialProps<any> | Promise<AppInitialProps<any>>;
};
export {};
