"use client";

import React from "react";
import {ThemeProvider} from "@material-tailwind/react";
import {Provider} from "react-redux";
import {store} from "@/store/store";

export function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Provider>

  );
}

export default Layout;
