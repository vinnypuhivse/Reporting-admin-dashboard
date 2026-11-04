## Newsela and Angelou 3.0

Newsela is a K-12 instructional content platform. Founded in 2013, its mission is **"meaningful classroom learning for every student."** The platform takes authentic real-world content and publishes it at **five reading levels** so every learner can engage. Angelou, named for Maya Angelou, is Newsela's design system; version 3.0 governs every surface across the product suite.

Newsela ships several products that each own a brand accent from the Angelou product palette. The accent is the only visual differentiator on most pages; one unified login, a shared global navigation, and a shared content browsing pattern do the rest.

| Product                    | Accent token                  | What it is                                          |
| -------------------------- | ----------------------------- | --------------------------------------------------- |
| **Newsela ELA**            | `--product-ela-500`           | English Language Arts: leveled texts and activities |
| **Newsela Social Studies** | `--product-socialstudies-500` | Leveled Social Studies content                      |
| **Newsela Science**        | `--product-science-500`       | Real-world science content                          |
| **Newsela Formative**      | `--product-formative-500`     | Real-time formative assessment                      |
| **Newsela EverWrite**      | `--product-everwrite-500`     | AI-assisted writing feedback                        |

**Sources.** The `@newsela/angelou` package in the Lyceum repository is the single source of truth: its contracts (`semantics/`), tokens (`tokens.css`) and components. This project is generated from that package's compiled build on every sync, so what you see here is what ships. It is also the only place designers propose changes, as work items at the project root (below). The Figma kit "Angelou Design System 2.0" is the drawing reference.

## Building with Angelou 3.0

**No provider, no theme setup.** Every component is self-styled (Emotion at runtime) and reads CSS custom properties from `styles.css`. Load `styles.css` once and the components, and your own layout, share the same tokens. Nothing wraps the tree.

**Style your own layout with tokens, never literals.** Angelou has no utility classes. Write plain CSS or inline styles that reference the custom properties by name:

- Colour: `var(--ui-core-500)` (brand blue), `--ui-core-25` to `--ui-core-800` ramp; neutrals `--ui-neutral-25` to `--ui-neutral-800`; semantic `--fg-primary`, `--fg-secondary`, `--fg-inverse`, `--bg-page`, `--bg-surface`, `--bg-muted`, `--bg-inverse`, `--border-default`, `--border-focus`; status `--status-success-500`, `--status-info-500`, `--status-danger-500`, `--status-warning-500`, with 400 steps for success, danger and warning (a warning fill is `--status-warning-400`).
- Type: families `var(--font-sans)` (Circular) for UI and `var(--font-display)` (Noto Serif) for headings 1 to 3; sizes `--fs-12`, `--fs-14`, `--fs-16`, `--fs-18`, `--fs-20`, `--fs-24`, `--fs-32`, `--fs-40`; line heights `--lh-16`, `--lh-20`, `--lh-24`, `--lh-32`, `--lh-40`, `--lh-48`; weights `--fw-book`, `--fw-medium`, `--fw-bold`. Body text is `--fs-16` / `--lh-24`; labels are `--fs-14` / `--lh-16`.
- Spacing on an 8px grid: `--space-1` (4px), `--space-2` (8), `--space-3` (16), `--space-4` (24), `--space-5` (32), `--space-6` (40), `--space-7` (48), `--space-8` (64). Radii `--radius-xs` (4), `--radius-sm` (8, the default for controls), `--radius-md`, `--radius-lg`, `--radius-pill`. Shadows `--shadow-xs` to `--shadow-xl`. Motion `--dur-fast` with `--ease-standard`.
- Never write a hex colour, a px font size or a font-family name; if a value has no token, pick the nearest token.
- Sentence case for all copy. Address the teacher as "you"; refer to students in the third person. No emoji; icons are inline SVG.

**Where the truth lives.** `styles.css` imports `tokens.css`, the complete token list with values, and `fonts.css`. Each component's contract is in `semantics/<id>.semantics.json` (intent, when not to use it, constraints, accessibility). Read `components/<group>/<Name>/<Name>.prompt.md` and `<Name>.d.ts` before placing a component; the prompt file carries the same rules. The full rules for voice, states, layout, motion, icons and fonts are in `guidelines/`; start at `guidelines/index.md`, which links content fundamentals, visual foundations, layout and grid, motion, iconography and fonts.

## How this system is organised

The pane has these sections. **Components** holds every component, shipped or proposed. **Brand**, **Colors**, **Type** and **Spacing** hold generated reference cards for the tokens; read them for names and values, never place them in product UI. **Work** holds the Work archive (finished and withdrawn proposals) and the Readiness checker. A shipped component's card is `<Name> - Beta` until it is Stable, then the bare `<Name>`. A proposal's card is `<Title> - <Kind> - <Status>`, such as `Progress ring - New - Draft`. Only a shipped card is safe to build to; a proposal is never spec.

**Proposing a change: work items.** Every proposal is one work item with a work id, and its files are linked by that id, never by file name. The full procedure is in `guidelines/docs/guidelines/work-process.md`; read it before creating, editing or marking any work item. The essentials:

- **Kind**, one of three. `New`: a component that does not exist yet. `Update`: a change to one that does, whether a new prop, variant, state or story, or a visual or behaviour change. `Token`: adds or changes one or more tokens.
- **Status**, set by the designer: `Draft` (exploring; engineering ignores it), `Ready for build` (the hand-off), `Changes requested` (after review), `Accepted` (signed off), `Withdrawn` (abandoned). Engineering's statuses, `In build`, `In review`, `Promoting` and `Promoted`, appear only on the cards the sync generates and in the badge strip.
- **Files at the project root**, all named from the work id `<id>` (kebab-case, unique, never reused; check `_work/index.json` and the root before picking one):
  - the canvas, any file name, whose first two lines are `<!-- @dsCard group="<Section>" name="<Title> - <Kind> - <Status>" subtitle="…" viewport="WxH" -->` and `<!-- @ds-work id="<id>" kind="new|update|token" component="<Name>" status="draft" rev="1" [story="<Story>"] -->`. A token item writes `tokens="--space-5, --space-7"` instead of `component`. `group` is the section the work lands in (`Components`, or `Colors`, `Type`, `Spacing`, `Brand` for tokens), never a status word;
  - New: the brief `<id>.semantics.json`, a full contract with `"status": "candidate"` and the component's kebab-case id, valid against `semantics/schema.json`;
  - Update: one patch per contract it changes, `<id>.<target-id>.semantics-patch.json`, with `"_patch": { "work": "<id>", "target": "semantics/<target-id>.semantics.json", "rev": N }` and `replace` (existing keys only) and `append` sections;
  - Token: `<id>.tokens-patch.json` listing every token with `op` `add` or `change`, its value, the current value for a change, and a one-line reason;
  - `<id>.decisions.json` for answers and sign-off, and `<id>.readiness.json`, written by the readiness review.

  The shapes are in `semantics/work/schema/`.
- **Markers stay visible.** Right after `<body>`, every work canvas has `<div data-ds-work-badges>KIND · ID · STATUS · rev N</div><script src="_work/badges.js"></script>`, with the raw marker values as the div's text. The script replaces them with the badge strip: the kind, what it targets, the full status track with the current status filled, and a warning for any mismatch. Never draw these badges by hand, and never delete the strip.
- **Marking Ready for build** runs the readiness review in `work-process.md` first, starting from the Readiness checker card (`preview/work-readiness.html?work=<id>`), and refuses while a blocker remains. Then it sets `status="ready"`, raises `rev` by one, and updates the card name.

**Hard rules.** Never edit anything under `components/`, `semantics/`, `preview/`, `_work/` or `archive/`, or `_ds_sync.json`: the sync regenerates them, so an edit would be overwritten and would never reach the code. Never write `In build`, `In review`, `Promoted`, `Beta` or `Stable` on a canvas. To reopen finished work, start a new Draft whose marker adds `supersedes="<old id>"`. Older canvases marked `@candidate` or `@proposal` are read but never written; when you next edit one, convert it to a work item as `work-process.md` describes.

**Creating a new component, or changing an existing one.** Every request starts as a Draft, and every Draft starts from its contract, not from a drawing. Work in this order:

1. **Check the system first.** Read `semantics/index.json` and the contracts of anything close. If an existing component covers the need, say so and show it; if a variant or state of one would, make it an Update. Only an unmet need becomes New.
2. **Interview before you draw.** Ask one or two questions at a time, proposing a default from the system rules and neighbouring contracts, until every required field of `semantics/schema.json` can be written with confidence: `intent` and `summary`; at least two `whenToUse` and two `whenNotToUse` cases, each naming the alternative; `api` with what each prop means; anatomy; variants and states; `constraints`; `accessibility` (role, name, keyboard, focus, contrast); `responsive` at all five breakpoints with the 44px touch target; `content`; `motion`; and `assertions` with severities, including at least one blocker and one accessibility assertion. Tokens are named, never hex; sizes and spacing come from the scales.
3. **Write the contract, then the canvas.** The brief or patch comes first. Generate the canvas from it: every visual, interaction and accessibility decision on the canvas traces to a field in the contract, and anything the canvas needs that the contract lacks goes back into the contract first.
4. **Stay Draft until the designer says it is settled.** The designer, not Claude, decides when to mark it Ready for build.

**Review and acceptance.** When the built work syncs, a **Review** section appears at the end of the item's own canvas. You do not add it, move it or edit it, and it is not in the canvas file: the badge script draws it while the item is In review. It shows the built stories (for token work, a before-and-after table and the components that use the tokens), what changed, and every open "Design to confirm" item. A `<div data-ds-work-review></div>` in the canvas puts it there instead of at the end. The designer answers in `<id>.decisions.json`, then either sets `Changes requested` (edit, then mark Ready for build again at the next revision) or `Accepted`, recording who accepted, the date, the revision, and what was tested under `acceptance`. An item cannot be Accepted while the Review section lists an unanswered "Design to confirm" item.

**Promoting to Stable.** Acceptance is what promotes: a Beta component whose work item is Accepted becomes Stable through a Lyceum pull request that engineering opens, linking the decisions file. The package contract's `status` is the only place Stable is recorded. If someone asks you to mark a component Stable, do not edit its card, marker or any generated file. Point them to the component's open work item, or to starting an Update, and say that the next sync renames the card once engineering merges the promotion.

## Components and their rules

Every component's full contract ships in `semantics/<id>.semantics.json`; read it before composing. One-line rules:

- `Icon`: the kit's 278 symbols by `name`, `size` 16 | 24 | 48, inheriting currentColor. Decorative without `label`; `label` makes it `role="img"`. Never an emoji or one-off SVG.
- `Button`: the one control for committing an action. `variant` primary | secondary | ghost | muted | destructive in Core 700, or the Neutral 700 polar set polarPrimary | polarSecondary | polarTertiary | polarMuted where blue would compete; never mix the two sets in one row. `size` lg (48px, default) | md (32) | sm (24), `fullWidth` to fill the container. One primary per view. Icon-only buttons need `iconPosition="only"` and an `aria-label`. Navigation is never a Button.
- `Link`: a native anchor, always underlined. `size` xsmall | small | medium | large, `color` navy | blue | black | white, `href` required (never `#`). Name the destination in the label.
- `Chip`: `type="filter"` (default) is a controlled toggle (`active`, `onClick`) with `aria-pressed`; `type="input"` is a committed value with its own close button (`onDismiss`, `inactive`, `dismissLabel`). `size="lg" | "sm"`, `theme="light" | "dark"` set from the surface, optional decorative `icon`. Never mix the two types in one row; never inert.
- `Badge`: an inert status or product pill, `color` one of success | info | danger | warning | neutral | ela | socialstudies | science | formative | everwrite, `dot` on by default. Meaning always in the text.
- `Divider`: a 1px rule at 16%, `tint` light | dark, `orientation` horizontal | vertical, `length`. Decorative unless `decorative={false}`.
- `BarChartRow`: one chart bar or labelled row (`Bar` is a deprecated alias). `value` 0 to 100, `orientation`, `color`, `cap` one | two | none, `thickness`; `rowLabel` and `valueLabel` switch on the labelled layout, and `labelPosition="top"` puts the label above a horizontal bar. The chart owns the scale. In data widgets, colour categories by list position: blue, purple, green, teal; or `darkBlue` first, then blue, purple, green, teal.
- `TextInput`: a labelled 48px field or textarea (`inputType`). `label` required, `state` default | error | disabled with `errorMessage`, `required`, `optionalText`, `tooltip`. The error row is reserved.
- `Toggletip`: help text behind an "i" icon, opened by click, never hover. It renders its own trigger; pass `label` (the trigger's accessible name), body text as children, optional `heading`, `ctaLabel` + `ctaHref`, `arrow` (the side facing the trigger) and `color` grey | white | dark. One or two sentences only.
- `Toast`: a 40px transient message, `status` success | error | info | warning, dismissible via `onDismiss`, expiring after `duration` (never for error). Render inside one `Toast.Region` per screen.
- `AlertBanner`: a full-bleed page-level message, `status` info | success | warning | error, `bannerType` simple | compound with `title`, `dismissable` + `onDismiss`, `actions`. Persists until dismissed.
- `Tabs`: a tablist with roving tabindex. `tabs` (at least two), controlled `value` + `onChange`, `type` line | box, `widthFunction` fixed | scrollable, `textSize` small | large; panels are `Tabs.Panel` with matching `idPrefix`.
- `ListItem`: a 40px row, `selected`, `leftIcon`, `rightIcon`, `altText`, `disabled`; `role="option"` and `type="checkbox"` inside a Popout.
- `Popout`: the 320px panel only, `role` listbox (default) | menu | group, `label` or `labelledBy`, `search` and `cta` slots, `activeId`. Positioning and dismissal belong to the caller.
- `Modal`: controlled `open` + `onClose`, `title` required, `tone` default | destructive, `width` sm | md | lg, `confirmLabel` + `onConfirm`. Traps focus and restores it; never stack two.
- `Table`: a native captioned table. `columns`, `rows` with stable ids, `caption` and `rowHeaderKey` required, controlled `sort` and `selectedIds`, `state` ready | loading | empty | error, status filter chips via `statusKey` + `statusOptions`. Becomes a card list below 769px.
- `ArticleCard`: the content tile. `title` and `href` required, `subject`, `contentType`, `date`, `levels`, `maturity`, `readingLevel`, `cardType` teacher | student, actions `onOpen` / `onAssign` / `onBookmark`.
- `InfoCard`: a tinted frame with white wells. `title` required (a real heading via `headingLevel`), `icon`, `info` + `infoHeading` open a dark toggletip above the icon, `tone` core | neutral. `layout` custom (default, your children in one well) | stacked | rows (both draw `datapoints`: `{ value, description, icon? }`, at most three) | chart (`BarChartRow` rows as children); `accent` blue | purple | green | teal colours the values, assigned by position across a row. Several wells: `InfoCard.Well` children; lay cards out with `InfoCard.Row` (`min`, `gap`).

## Idiomatic snippet

```jsx
const { Button, Toggletip } = window.NewselaAngelou;

<section
  style={{
    display: "grid",
    gap: "var(--space-3)",
    padding: "var(--space-4)",
    background: "var(--bg-surface)",
    fontFamily: "var(--font-sans)",
    color: "var(--fg-primary)",
  }}
>
  <h2
    style={{
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-24)",
      lineHeight: "var(--lh-32)",
      margin: 0,
    }}
  >
    Reading levels
  </h2>
  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
    <span style={{ fontSize: "var(--fs-14)", lineHeight: "var(--lh-16)" }}>
      Lexile level
    </span>
    <Toggletip label="About Lexile levels">
      Lexile measures reading difficulty. A student's level is set by their last
      reading check.
    </Toggletip>
  </div>
  <div style={{ display: "flex", gap: "var(--space-3)" }}>
    <Button onClick={assign}>Assign to class</Button>
    <Button variant="secondary">Preview</Button>
  </div>
</section>;
```

# NewselaAngelou (@newsela/angelou@3.0.0-alpha.0)

This design system is the published @newsela/angelou React library, bundled as a single
browser global. All 18 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.NewselaAngelou`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).
- `guidelines/` — the design system's own usage guidance (7 doc(s), see `guidelines/index.md`). Read these before composing larger layouts.

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.NewselaAngelou.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { AlertBanner } = window.NewselaAngelou;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<AlertBanner />);
```

## Tokens

245 CSS custom properties from @newsela/angelou. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (18): `--fg-primary`, `--fg-secondary`, `--fg-tertiary`, …
- **spacing** (10): `--space-1`, `--space-2`, `--space-3`, …
- **typography** (3): `--font-sans`, `--font-display`, `--font-mono`
- **radius** (6): `--radius-xs`, `--radius-sm`, `--radius-md`, …
- **shadow** (6): `--shadow-xs`, `--shadow-sm`, `--shadow-md`, …
- **other** (202): `--ui-black`, `--ui-white`, `--ui-core-25`, …

## Components

### components
- `AlertBanner` — A full-bleed, page-level message that tells the reader the state of the
- `ArticleCard` — The content tile for an article, video, text set, or collection, carrying
- `Badge` — A small pill that labels the thing next to it with a status or a product
- `BarChartRow` — One chart bar or labelled row: a filled length in a design-system colour,
- `Button` — The single control for committing an action.
- `Chip` — A pill that either toggles a filter or represents a dismissible input
- `Divider` — A 1px rule at 16 opacity that separates groups of content, horizontally
- `Icon` — Icon.names is the full symbol list for galleries and pickers. It is a
- `InfoCard` (compound: `InfoCard.Row`, `InfoCard.Well`)
- `Link` — An inline, always-underlined text link that navigates to another place.
- `ListItem` — A 40px row in a menu or list, with optional leading icon, trailing icon,
- `Modal` — A focused overlay that interrupts the current task to get one decision or
- `Popout` — A 320px floating panel holding a scrolling column of list rows, with
- `Table` — A captioned, sortable data table for comparing many records across the same fields.
- `Tabs` (compound: `Tabs.Panel`)
- `TextInput` — A labelled single-line field or multi-line textarea, with required,
- `Toast` — Toast.Region is a static property rather than a second export so the (compound: `Toast.Region`)
- `Toggletip` — A dismissible popover that carries supplementary help content, opened by
