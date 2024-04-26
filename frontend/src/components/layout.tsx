"use client";

import React from "react";
import {ThemeProvider} from "@material-tailwind/react";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import Navbar from './navbar'
import Footer from './footer'

export function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navbar/>
        {children}
        <Footer/>
      </ThemeProvider>
    </Provider>

  );
}

export default Layout;
