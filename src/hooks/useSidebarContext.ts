import { createContext } from 'react';

export const SideMenuContext = createContext({ show: false, toggle: () => {} });