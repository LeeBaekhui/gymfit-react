// src/layouts/DrawerContext.jsx
import { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => {
    setOpen(false);
    setOpenSubmenus({});
  };
  const handleMenuClick = (menu) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };
  const handleSubMenuClick = (item) => {
    setSelectedMenu(item);
  };
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <DrawerContext.Provider
      value={{
        open,
        selectedMenu,
        openSubmenus,
        handleDrawerOpen,
        handleDrawerClose,
        handleMenuClick,
        handleSubMenuClick,
        setSelectedMenu,
        openModal,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
