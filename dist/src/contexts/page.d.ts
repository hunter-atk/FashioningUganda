import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
interface IProps {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
}
export declare const PageContext: React.Context<IProps>;
export declare const PageContextProvider: React.SFC;
export declare const PageContextConsumer: React.Consumer<IProps>;
export {};
