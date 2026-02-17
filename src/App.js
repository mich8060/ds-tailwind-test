import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Installation from "./pages/Installation";
import FontInstallation from "./pages/FontInstallation";

import ComponentsUsage from "./pages/ComponentsUsage";
import ButtonDemo from "./pages/ButtonDemo";
import IconDemo from "./pages/IconDemo";
import FlexDemo from "./pages/FlexDemo";
import TypographyDemo from "./pages/TypographyDemo";
import SpacingDemo from "./pages/SpacingDemo";
import ShadowsDemo from "./pages/ShadowsDemo";
import BorderRadiusDemo from "./pages/BorderRadiusDemo";
import ColorsDemo from "./pages/ColorsDemo";
import AccordionDemo from "./pages/AccordionDemo";
import ActionMenuDemo from "./pages/ActionMenuDemo";
import AvatarDemo from "./pages/AvatarDemo";
import BadgeDemo from "./pages/BadgeDemo";
import BrandingDemo from "./pages/BrandingDemo";
import BreadcrumbDemo from "./pages/BreadcrumbDemo";
import CalendarDemo from "./pages/CalendarDemo";
import EventCardDemo from "./pages/EventCardDemo";
import DatepickerDemo from "./pages/DatepickerDemo";
import MicroCalendarDemo from "./pages/MicroCalendarDemo";
import ModalDemo from "./pages/ModalDemo";
import CheckboxDemo from "./pages/CheckboxDemo";
import ChipDemo from "./pages/ChipDemo";
import DividerDemo from "./pages/DividerDemo";
import DotStatusDemo from "./pages/DotStatusDemo";
import DropdownDemo from "./pages/DropdownDemo";
import FieldDemo from "./pages/FieldDemo";
import FileUploadDemo from "./pages/FileUploadDemo";
import ImageAspectDemo from "./pages/ImageAspectDemo";
import KeyDemo from "./pages/KeyDemo";
import PillToggleDemo from "./pages/PillToggleDemo";
import ProgressIndicatorDemo from "./pages/ProgressIndicatorDemo";
import ProgressCircleDemo from "./pages/ProgressCircleDemo";
import RadioDemo from "./pages/RadioDemo";
import SliderDemo from "./pages/SliderDemo";
import StatusDemo from "./pages/StatusDemo";
import StepsDemo from "./pages/StepsDemo";
import TableDemo from "./pages/TableDemo";
import ToastDemo from "./pages/ToastDemo";
import ToggleDemo from "./pages/ToggleDemo";
import TooltipDemo from "./pages/TooltipDemo";
import InputDemo from "./pages/InputDemo";
import MenuDemo from "./pages/MenuDemo";
import TabsDemo from "./pages/TabsDemo";
import FigmaVariablesDemo from "./pages/FigmaVariablesDemo";
import PaginationDemo from "./pages/PaginationDemo";
import UtilitiesDemo from "./pages/UtilitiesDemo";
import TagDemo from "./pages/TagDemo";
import TextareaDemo from "./pages/TextareaDemo";
import UDSDemo from "./pages/UDSDemo";
import Menu from "./ui/Menu/Menu";
import "./App.scss";

const BRANDS = [
  "design-system",
  "locumsmart",
  "wireframe",
  "connect",
  "comphealth",
  "modio",
  "weatherby",
];

const NAV_ITEMS = [
  {
    label: "Getting Started",
    icon: "Layout",
    children: [
      { label: "Overview", path: "/" },
      { label: "Installation", path: "/getting-started/installation" },
      { label: "Font Installation", path: "/getting-started/font" },
      { label: "Using Components", path: "/getting-started/components" },
    ],
  },
  {
    label: "Foundations",
    icon: "SquaresFour",
    children: [
      { label: "Application", path: "/app-shell" },
      { label: "Border Radius", path: "/border-radius" },
      { label: "Colors", path: "/colors" },
      { label: "Design Tokens", path: "/figma-variables" },
      { label: "Flex Layout", path: "/flex" },
      { label: "Icons", path: "/icons" },
      { label: "Shadows", path: "/shadows" },
      { label: "Spacing", path: "/spacing" },
      { label: "Typography", path: "/typography" },
      { label: "Utility Classes", path: "/utilities" },
    ],
  },
  {
    label: "Components",
    icon: "DiamondsFour",
    children: [
      { label: "Accordion", path: "/accordion" },
      { label: "Action Menu", path: "/action-menu" },
      { label: "Avatar", path: "/avatar" },
      { label: "Badge", path: "/badge" },
      { label: "Branding", path: "/branding" },
      { label: "Breadcrumb", path: "/breadcrumb" },
      { label: "Buttons", path: "/buttons" },
      { label: "Calendar", path: "/calendar" },
      { label: "Datepicker", path: "/datepicker" },
      { label: "Checkbox", path: "/checkbox" },
      { label: "Chip", path: "/chip" },
      { label: "Divider", path: "/divider" },
      { label: "Dot Status", path: "/dot-status" },
      { label: "Dropdown", path: "/dropdown" },
      { label: "Event Card", path: "/event-card" },
      { label: "Field", path: "/field" },
      { label: "File Upload", path: "/file-upload" },
      { label: "Image Aspect", path: "/image-aspect" },
      { label: "Text Input", path: "/input" },
      { label: "Key", path: "/key" },
      { label: "Micro Calendar", path: "/micro-calendar" },
      { label: "Modal", path: "/modal" },
      { label: "Pagination", path: "/pagination" },
      { label: "Pill Toggle", path: "/pill-toggle" },
      { label: "Progress Indicator", path: "/progress-indicator" },
      { label: "Progress Circle", path: "/progress-circle" },
      { label: "Radio", path: "/radio" },
      { label: "Slider", path: "/slider" },
      { label: "Status", path: "/status" },
      { label: "Steps", path: "/steps" },
      { label: "Table", path: "/table" },
      { label: "Tabs", path: "/tabs" },
      { label: "Tag", path: "/tag" },
      { label: "Textarea", path: "/textarea" },
      { label: "Toast", path: "/toast" },
      { label: "Toggle", path: "/toggle" },
      { label: "Tooltip", path: "/tooltip" },
    ].sort((a, b) => a.label.localeCompare(b.label)),
  },
  {
    label: "Patterns",
    icon: "CirclesThree",
    children: [{ label: "Menu", path: "/menu" }],
  },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const el = document.querySelector(".app__content");
    if (el) el.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [activeBrand, setActiveBrand] = useState(() => {
    const savedBrand = localStorage.getItem("activeBrand");
    return savedBrand && BRANDS.includes(savedBrand)
      ? savedBrand
      : "design-system";
  });

  const [activeMode, setActiveMode] = useState(() => {
    const savedMode = localStorage.getItem("activeMode");
    return savedMode === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    // Disable transitions during theme/brand swap to prevent color flickering
    root.classList.add("no-transitions");
    root.setAttribute("data-brand", activeBrand);
    root.setAttribute("data-mode", activeMode);
    localStorage.setItem("activeBrand", activeBrand);
    localStorage.setItem("activeMode", activeMode);

    // Re-enable transitions on the next frame once new values have painted
    const raf = requestAnimationFrame(() => {
      // Double-rAF ensures the browser has fully applied the new styles
      requestAnimationFrame(() => {
        root.classList.remove("no-transitions");
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      root.setAttribute("data-brand", "design-system");
      root.setAttribute("data-mode", "light");
    };
  }, [activeBrand, activeMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Menu
          navItems={NAV_ITEMS}
          brands={BRANDS}
          activeBrand={activeBrand}
          onBrandChange={setActiveBrand}
          activeMode={activeMode}
          onModeChange={setActiveMode}
        />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<Installation />} />
            <Route path="/getting-started/installation" element={<Installation />} />
            <Route path="/getting-started/font" element={<FontInstallation />} />
            <Route path="/getting-started/components" element={<ComponentsUsage />} />
            <Route path="/buttons" element={<ButtonDemo />} />
            <Route path="/icons" element={<IconDemo />} />
            <Route path="/flex" element={<FlexDemo />} />
            <Route path="/typography" element={<TypographyDemo />} />
            <Route path="/spacing" element={<SpacingDemo />} />
            <Route path="/shadows" element={<ShadowsDemo />} />
            <Route path="/border-radius" element={<BorderRadiusDemo />} />
            <Route path="/colors" element={<ColorsDemo />} />
            <Route path="/accordion" element={<AccordionDemo />} />
            <Route path="/action-menu" element={<ActionMenuDemo />} />
            <Route path="/avatar" element={<AvatarDemo />} />
            <Route path="/badge" element={<BadgeDemo />} />
            <Route path="/branding" element={<BrandingDemo />} />
            <Route path="/breadcrumb" element={<BreadcrumbDemo />} />
            <Route path="/calendar" element={<CalendarDemo />} />
            <Route path="/datepicker" element={<DatepickerDemo />} />
            <Route path="/micro-calendar" element={<MicroCalendarDemo />} />
            <Route path="/modal" element={<ModalDemo />} />
            <Route path="/checkbox" element={<CheckboxDemo />} />
            <Route path="/chip" element={<ChipDemo />} />
            <Route path="/divider" element={<DividerDemo />} />
            <Route path="/dot-status" element={<DotStatusDemo />} />
            <Route path="/dropdown" element={<DropdownDemo />} />
            <Route path="/event-card" element={<EventCardDemo />} />
            <Route path="/field" element={<FieldDemo />} />
            <Route path="/file-upload" element={<FileUploadDemo />} />
            <Route path="/image-aspect" element={<ImageAspectDemo />} />
            <Route path="/key" element={<KeyDemo />} />
            <Route path="/pill-toggle" element={<PillToggleDemo />} />
            <Route path="/progress-indicator" element={<ProgressIndicatorDemo />} />
            <Route path="/progress-circle" element={<ProgressCircleDemo />} />
            <Route path="/radio" element={<RadioDemo />} />
            <Route path="/slider" element={<SliderDemo />} />
            <Route path="/status" element={<StatusDemo />} />
            <Route path="/steps" element={<StepsDemo />} />
            <Route path="/table" element={<TableDemo />} />
            <Route path="/tag" element={<TagDemo />} />
            <Route path="/textarea" element={<TextareaDemo />} />
            <Route path="/toast" element={<ToastDemo />} />
            <Route path="/toggle" element={<ToggleDemo />} />
            <Route path="/tooltip" element={<TooltipDemo />} />
            <Route path="/input" element={<InputDemo />} />
            <Route path="/menu" element={<MenuDemo />} />
            <Route path="/tabs" element={<TabsDemo />} />
            <Route path="/pagination" element={<PaginationDemo />} />
            <Route path="/figma-variables" element={<FigmaVariablesDemo />} />
            <Route path="/utilities" element={<UtilitiesDemo />} />
            <Route path="/app-shell" element={<UDSDemo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
