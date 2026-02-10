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

const NAVIGATION = [
  {
    label: "Getting Started",
    icon: "Layout",
    items: [
      { path: "/", label: "Overview", exact: true },
      { path: "/getting-started/installation", label: "Installation" },
      { path: "/getting-started/font", label: "Font Installation" },
      { path: "/getting-started/components", label: "Using Components" },
    ],
  },
  {
    label: "Foundations",
    icon: "SquaresFour",
    items: [
      { path: "/app-shell", label: "Application" },
      { path: "/border-radius", label: "Border Radius" },
      { path: "/colors", label: "Colors" },
      { path: "/figma-variables", label: "Design Tokens" },
      { path: "/flex", label: "Flex Layout" },
      { path: "/icons", label: "Icons" },
      { path: "/shadows", label: "Shadows" },
      { path: "/spacing", label: "Spacing" },
      { path: "/typography", label: "Typography" },
      { path: "/utilities", label: "Utility Classes" },
    ],
  },
  {
    label: "Components",
    icon: "DiamondsFour",
    items: [
      { path: "/accordion", label: "Accordion" },
      { path: "/action-menu", label: "Action Menu" },
      { path: "/avatar", label: "Avatar" },
      { path: "/badge", label: "Badge" },
      { path: "/branding", label: "Branding" },
      { path: "/breadcrumb", label: "Breadcrumb" },
      { path: "/buttons", label: "Buttons" },
      { path: "/calendar", label: "Calendar" },
      { path: "/datepicker", label: "Datepicker" },
      { path: "/checkbox", label: "Checkbox" },
      { path: "/chip", label: "Chip" },
      { path: "/divider", label: "Divider" },
      { path: "/dot-status", label: "Dot Status" },
      { path: "/dropdown", label: "Dropdown" },
      { path: "/event-card", label: "Event Card" },
      { path: "/field", label: "Field" },
      { path: "/file-upload", label: "File Upload" },
      { path: "/image-aspect", label: "Image Aspect" },
      { path: "/input", label: "Text Input" },
      { path: "/key", label: "Key" },
      { path: "/micro-calendar", label: "Micro Calendar" },
      { path: "/modal", label: "Modal" },
      { path: "/pagination", label: "Pagination" },
      { path: "/pill-toggle", label: "Pill Toggle" },
      { path: "/progress-indicator", label: "Progress Indicator" },
      { path: "/progress-circle", label: "Progress Circle" },
      { path: "/radio", label: "Radio" },
      { path: "/slider", label: "Slider" },
      { path: "/status", label: "Status" },
      { path: "/steps", label: "Steps" },
      { path: "/table", label: "Table" },
      { path: "/tabs", label: "Tabs" },
      { path: "/tag", label: "Tag" },
      { path: "/textarea", label: "Textarea" },
      { path: "/toast", label: "Toast" },
      { path: "/toggle", label: "Toggle" },
      { path: "/tooltip", label: "Tooltip" },
    ].sort((a, b) => a.label.localeCompare(b.label)),
  },
  {
    label: "Patterns",
    icon: "CirclesThree",
    items: [{ path: "/menu", label: "Menu" }],
  },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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
            navigation={NAVIGATION}
            activeBrand={activeBrand}
            activeMode={activeMode}
            onBrandChange={setActiveBrand}
            onModeChange={setActiveMode}
            showBrandSwitcher={true}
            showSearch={false}
            showModeToggle={true}
            user={{ name: "Jane Doe", initials: "JD" }}
            showAccount={false}
            showModeSwitch={true}
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
