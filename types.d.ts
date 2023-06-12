/// <reference types="node" />
import type { Redirect, Rewrite } from 'next/dist/lib/load-custom-routes';
import type { I18NConfig, NextConfig, NextConfigComplete } from 'next/dist/server/config-shared';
import type { UrlObject } from 'url';
export declare type Url = UrlObject | string;
export declare type TAnyLocale = Exclude<string, 'default'>;
export declare type TReRoutes = {
    redirects: Redirect[];
    rewrites: Rewrite[];
};
export declare type TRouteSegmentPaths<L extends TAnyLocale> = {
    default: string;
} & Partial<Record<L, string>>;
export declare type TRouteSegmentData<L extends TAnyLocale> = string | ({
    default?: string;
} & Partial<Record<L, string>>);
export declare type TRouteSegmentsData<L extends TAnyLocale> = Record<string, TRouteSegmentData<L>>;
export declare type TRouteSegment<L extends TAnyLocale> = {
    name: string;
    paths: TRouteSegmentPaths<L>;
};
export declare type TRouteBranch<L extends TAnyLocale = string> = TRouteSegment<L> & {
    children?: TRouteBranch<L>[];
};
export declare type TFallbackLng = string | string[] | {
    [key: string]: string[];
};
export declare type TNtrData<L extends TAnyLocale = string> = {
    debug?: boolean | 'withPrefetch';
    defaultLocale: L;
    locales: L[];
    routesTree: TRouteBranch<L>;
    fallbackLng?: TFallbackLng | undefined;
};
export declare type NTRConfig = {
    debug?: boolean;
    routesDataFileName?: string;
    routesTree?: TRouteBranch;
    pagesDirectory?: string;
};
export declare type NTRI18NConfig = {
    fallbackLng?: TFallbackLng;
} & I18NConfig;
export declare type NTRNextConfig = {
    i18n: NTRI18NConfig;
} & NextConfig;
export declare type NextConfigWithNTR = NextConfig & {
    i18n: NTRI18NConfig;
    translateRoutes?: NTRConfig;
};
export declare type NextConfigCompleteWithNTR = NextConfigComplete & {
    i18n: NTRI18NConfig;
    translateRoutes: NTRConfig;
};
declare global {
    var __NEXT_TRANSLATE_ROUTES_DATA: TNtrData;
    interface Window {
        __NEXT_TRANSLATE_ROUTES_DATA: TNtrData;
    }
    interface ErrorConstructor {
        new (message?: string, options?: {
            cause: unknown | string | Error;
        }): Error;
    }
}
