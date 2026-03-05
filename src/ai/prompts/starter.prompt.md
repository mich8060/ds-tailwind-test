Set up this repository from scratch so `@mich8060/unified-design-system` is used end-to-end with no Tailwind fallback.

Execution order:
1. Install and verify toolchain.
2. Build and validate AI contract artifacts.
3. Implement UI using UDS components and tokens only.
4. Ensure root layout uses `AppShell`.

Hard rules:
- Use package exports from `@mich8060/unified-design-system`.
- Never deep import component internals.
- Never use Tailwind classes/utilities.
- Never invent CSS variables. Use `--uds-*` tokens or hardcoded literals.
- Prefer canonical props from the AI manifest and component contracts.

Required layout scaffold:
- Root must be:
  - `AppShell`
  - `AppShell.Menu`
  - `AppShell.Content`
  - `AppShell.Main`
- Place route/page content in `AppShell.Main`.

Brand menu requirements:
- `comphealth`, `gms`, `weatherby`:
  - Dashboard (`Layout`)
  - Schedule (`CalendarBlank`)
  - Job Board (`Briefcase`)
  - Application (`NotePencil`)
  - Documents (`FolderOpen`) -> Credentialing, Financial
  - Time Entry (`Clock`)
  - Travel (`Airplane`)
- `locumsmart`:
  - Dashboard (`Layout`)
  - Workflow (`FolderOpen`)
  - CRM (`Users`)
  - Analytics (`ChartBar`)
  - Administration (`BuildingApartment`)
- `modio`:
  - Dashboard (`Layout`)
  - Reports (`FolderOpen`)
  - Providers (`Users`)
  - Facilities (`Buildings`)
  - Payors (`Wallet`)
  - Tracking (`GpsFix`)
- `connect`:
  - Dashboard (`Layout`)
  - Requests (`Briefcase`)
  - Providers (`Users`)
  - Calendar (`CalendarBlank`)
  - Invoices (`Invoice`)
  - Reporting (`ChartBar`)
- `wireframe`:
  - Five placeholder links labeled `Menu Item`.

Output guidance:
- Return code that imports UDS components directly from package exports.
- Prefer `Flex`, `Container`, `Card`, `Text`, `Button`, `Menu`, `Toolbar`, `Statistics`, and `Checklist` where appropriate.
- Ensure no Tailwind tokens/classes appear anywhere in source.
