declare type TMinorPatch = `.${number}`;
declare type TVersion = `${number}` | `${number}${TMinorPatch}` | `${number}${TMinorPatch}${TMinorPatch}`;
export declare const checkNextVersion: (version: `${'<' | '>' | '=' | '>=' | '<=' | '!='}${TVersion}`, fallback?: boolean) => boolean;
export {};
