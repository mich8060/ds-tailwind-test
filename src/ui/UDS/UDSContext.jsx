import React, { createContext, useContext, useState, useCallback } from "react";

const UDSContext = createContext(null);

/**
 * UDS Provider - Manages state for all application wrapper areas
 *
 * Areas managed:
 * - Sidebar (collapsible navigation)
 * - ListView (left-side list panel)
 * - SidePanel (right-side detail panel)
 * - Modal (centered dialog overlay)
 * - FullscreenModal (full-page overlay)
 * - Content Layout (full, focus-left, focus-right)
 * - Mobile menu
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 * @param {boolean} props.defaultSidebarExpanded - Initial sidebar expanded state (default: true)
 * @param {string} props.defaultNavPosition - 'left' or 'right' (default: 'left')
 * @param {string} props.defaultContentLayout - 'full' | 'focus-left' | 'focus-right' (default: 'full')
 */
export function UDSProvider({
  children,
  defaultSidebarExpanded = true,
  defaultNavPosition = "left",
  defaultContentLayout = "full",
}) {
  // Sidebar / Navigation state
  const [sidebarExpanded, setSidebarExpanded] = useState(defaultSidebarExpanded);
  const [navPosition, setNavPosition] = useState(defaultNavPosition);
  const [navVisible, setNavVisible] = useState(true);

  // ListView (left list panel) state
  const [listViewOpen, setListViewOpen] = useState(false);

  // SidePanel (right detail panel) state
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  // Fullscreen Modal state
  const [fullscreenModalOpen, setFullscreenModalOpen] = useState(false);

  // Content layout state
  const [contentLayout, setContentLayout] = useState(defaultContentLayout);

  // Legacy panel states (for backward compatibility)
  const [panels, setPanels] = useState({
    left: { open: false, width: 320 },
    right: { open: false, width: 320 },
    bottom: { open: false, height: 300 },
  });

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ============================================
  // Sidebar actions
  // ============================================
  const toggleSidebar = useCallback(() => {
    setSidebarExpanded((prev) => !prev);
  }, []);

  // Legacy alias
  const toggleNav = toggleSidebar;

  // ============================================
  // ListView actions
  // ============================================
  const toggleListView = useCallback(() => {
    setListViewOpen((prev) => !prev);
  }, []);

  const openListView = useCallback(() => {
    setListViewOpen(true);
  }, []);

  const closeListView = useCallback(() => {
    setListViewOpen(false);
  }, []);

  // ============================================
  // SidePanel actions
  // ============================================
  const toggleSidePanel = useCallback(() => {
    setSidePanelOpen((prev) => !prev);
  }, []);

  const openSidePanel = useCallback(() => {
    setSidePanelOpen(true);
  }, []);

  const closeSidePanel = useCallback(() => {
    setSidePanelOpen(false);
  }, []);

  // ============================================
  // Modal actions
  // ============================================
  const toggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  // ============================================
  // Fullscreen Modal actions
  // ============================================
  const toggleFullscreenModal = useCallback(() => {
    setFullscreenModalOpen((prev) => !prev);
  }, []);

  const openFullscreenModal = useCallback(() => {
    setFullscreenModalOpen(true);
  }, []);

  const closeFullscreenModal = useCallback(() => {
    setFullscreenModalOpen(false);
  }, []);

  // ============================================
  // Content Layout actions
  // ============================================
  const setLayout = useCallback((layout) => {
    setContentLayout(layout);
  }, []);

  // ============================================
  // Legacy panel actions (backward compat)
  // ============================================
  const togglePanel = useCallback((position) => {
    setPanels((prev) => ({
      ...prev,
      [position]: {
        ...prev[position],
        open: !prev[position].open,
      },
    }));
  }, []);

  const openPanel = useCallback((position) => {
    setPanels((prev) => ({
      ...prev,
      [position]: {
        ...prev[position],
        open: true,
      },
    }));
  }, []);

  const closePanel = useCallback((position) => {
    setPanels((prev) => ({
      ...prev,
      [position]: {
        ...prev[position],
        open: false,
      },
    }));
  }, []);

  const closeAllPanels = useCallback(() => {
    setPanels((prev) => ({
      left: { ...prev.left, open: false },
      right: { ...prev.right, open: false },
      bottom: { ...prev.bottom, open: false },
    }));
    setSidePanelOpen(false);
    setListViewOpen(false);
  }, []);

  const setPanelSize = useCallback((position, size) => {
    setPanels((prev) => ({
      ...prev,
      [position]: {
        ...prev[position],
        ...(position === "bottom" ? { height: size } : { width: size }),
      },
    }));
  }, []);

  // ============================================
  // Mobile actions
  // ============================================
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const value = {
    // Sidebar / Navigation
    sidebarExpanded,
    setSidebarExpanded,
    navPosition,
    setNavPosition,
    navVisible,
    setNavVisible,
    toggleSidebar,
    toggleNav,

    // Legacy aliases for backward compatibility
    navCollapsed: !sidebarExpanded,
    setNavCollapsed: (collapsed) => setSidebarExpanded(!collapsed),

    // ListView
    listViewOpen,
    setListViewOpen,
    toggleListView,
    openListView,
    closeListView,

    // SidePanel
    sidePanelOpen,
    setSidePanelOpen,
    toggleSidePanel,
    openSidePanel,
    closeSidePanel,

    // Modal
    modalOpen,
    setModalOpen,
    toggleModal,
    openModal,
    closeModal,

    // Fullscreen Modal
    fullscreenModalOpen,
    setFullscreenModalOpen,
    toggleFullscreenModal,
    openFullscreenModal,
    closeFullscreenModal,

    // Content Layout
    contentLayout,
    setContentLayout: setLayout,

    // Legacy Panels
    panels,
    togglePanel,
    openPanel,
    closePanel,
    closeAllPanels,
    setPanelSize,

    // Mobile
    mobileMenuOpen,
    setMobileMenuOpen,
    toggleMobileMenu,
  };

  return (
    <UDSContext.Provider value={value}>
      {children}
    </UDSContext.Provider>
  );
}

/**
 * Hook to access UDS context
 */
export function useUDS() {
  const context = useContext(UDSContext);
  if (!context) {
    throw new Error("useUDS must be used within a UDSProvider");
  }
  return context;
}

export default UDSContext;
