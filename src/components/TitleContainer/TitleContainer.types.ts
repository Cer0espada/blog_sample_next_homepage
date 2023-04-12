import React, { useState, useContext } from 'react';
// import {TagContainerContext} from'./context/TagContainerContext';
export enum Heading {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",

}

export type Title = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleContainer {
    title: string;
    heading: Title;
    addedClass?: string;
    toggle?: boolean;
}
