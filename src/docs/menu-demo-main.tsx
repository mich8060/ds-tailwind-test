import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { applyDocsBrandToDocument, docsBrandToBrandingAppearance } from '@/docs/doc-site-brand'
import {
  Branding,
  Button,
  ChatCircleDotsIcon,
  ListIcon,
  Menu,
  PhoneIcon,
  cn,
  getDefaultNavigation,
  useMenuRail,
  type MenuUtilityItem,
} from '@chg-ds/unified-design-system'
import '@/fonts.css'
import '@chg-ds/unified-design-system/styles.css'

/** Active brand for this iframe demo (tokens + header/collapsed marks). */
const MENU_DEMO_BRAND = 'connect' as const

applyDocsBrandToDocument(MENU_DEMO_BRAND)

const params = new URLSearchParams(window.location.search)
if (params.get('dark') === '1') {
  document.documentElement.classList.add('dark')
}

const menuDemoBrandingAppearance = docsBrandToBrandingAppearance(MENU_DEMO_BRAND)

const WORKSPACE_OPTIONS = [
  { value: 'clinical', label: 'Clinical workspace' },
  { value: 'billing', label: 'Billing workspace' },
  { value: 'admin', label: 'Admin workspace' },
] as const

const UTILITY_LINKS: MenuUtilityItem[] = [
  { id: 'phone', label: '888-888-8888', href: 'tel:+18888888888', icon: PhoneIcon },
  { id: 'feedback', label: 'Feedback', href: '#feedback', icon: ChatCircleDotsIcon },
]

const CONNECT_NAVIGATION_ITEMS = getDefaultNavigation(MENU_DEMO_BRAND)

function MenuDemoRailHeader() {
  const { expanded, toggleExpanded } = useMenuRail()

  const listToggleButton = (
    <Button
      type="button"
      variant="ghost"
      size="default"
      className="size-11 shrink-0 p-0"
      aria-label={expanded ? 'Collapse menu' : 'Expand menu'}
      aria-expanded={expanded}
      onClick={toggleExpanded}
    >
      <ListIcon className="size-5 shrink-0" weight="bold" aria-hidden />
    </Button>
  )

  const headerBrandingStack = (
    <div className="relative h-14 w-full min-w-0 overflow-hidden">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out',
          expanded ? 'opacity-100' : 'opacity-0',
        )}
        aria-hidden={!expanded}
      >
        <div className="flex h-14 w-[188px] shrink-0 items-center justify-center overflow-hidden">
          <Branding
            appearance={menuDemoBrandingAppearance}
            wordmarkAlign="center"
            className="h-14 w-[188px] min-w-[188px] max-w-[188px] shrink-0"
          />
        </div>
      </div>
      <div
        className={cn(
          'pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out',
          expanded ? 'opacity-0' : 'opacity-100',
          !expanded &&
            'group-hover/collapsed-menu:opacity-0 group-focus-within/collapsed-menu:opacity-0',
        )}
        aria-hidden={expanded}
      >
        <div className="flex size-9 shrink-0 items-center justify-center overflow-hidden">
          <Branding appearance={menuDemoBrandingAppearance} symbol className="size-9 shrink-0" />
        </div>
      </div>
      {!expanded ? (
        <div
          className={cn(
            'absolute inset-0 z-[2] flex items-center justify-center transition-opacity duration-200 ease-out',
            'pointer-events-none opacity-0',
            'group-hover/collapsed-menu:pointer-events-auto group-hover/collapsed-menu:opacity-100',
            'group-focus-within/collapsed-menu:pointer-events-auto group-focus-within/collapsed-menu:opacity-100',
          )}
        >
          {listToggleButton}
        </div>
      ) : null}
    </div>
  )

  return (
    <Menu.Header
      className={cn(
        !expanded &&
          'group/collapsed-menu relative isolate overflow-hidden px-0',
      )}
    >
      {expanded ? (
        <div className="grid h-full w-full grid-cols-[2.75rem_1fr_2.75rem] items-center px-2">
          <div className="flex justify-center">{listToggleButton}</div>
          <div className="min-w-0 overflow-hidden">{headerBrandingStack}</div>
          <span className="size-11 shrink-0" aria-hidden />
        </div>
      ) : (
        <div className="flex min-h-14 w-full items-stretch">{headerBrandingStack}</div>
      )}
    </Menu.Header>
  )
}

function MenuDemoApp() {
  const [workspace, setWorkspace] = useState<string>(WORKSPACE_OPTIONS[0].value)
  const [activeNavId, setActiveNavId] = useState<string>(CONNECT_NAVIGATION_ITEMS[0].id)

  return (
    <div className="min-h-screen min-w-full bg-neutral-800">
      <Menu
        defaultExpanded
        aria-label="Application menu"
        navigationItems={[...CONNECT_NAVIGATION_ITEMS]}
        navigationProps={{ 'aria-label': 'Primary navigation' }}
        activeId={activeNavId}
        onNavigationSelect={(id) => {
          setActiveNavId(id)
        }}
        workspace={{
          options: [...WORKSPACE_OPTIONS],
          value: workspace,
          onWorkspaceChange: (next) => {
            setWorkspace(next)
          },
          'aria-label': 'Workspace',
        }}
        header={<MenuDemoRailHeader />}
        utilities={UTILITY_LINKS}
      />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuDemoApp />
  </StrictMode>,
)
