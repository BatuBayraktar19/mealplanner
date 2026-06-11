# Mealplanner

**Team:** Batuhan Bayraktar (313356), Elijah Degen (313388)
**Repository:** https://github.com/elidegen/mealplanner

---

## Projektidee

Unsere App soll Nutzern helfen Ihre Mahlzeiten besser zu planen. Sie sollen in der Lage sein, Mahlzeiten als Vorlagen zu erstellen und daraus Einkaufslisten zu erstellen und umgekehrt. Es soll die Option geben ein Wochenplan zu erstellen.

---

## Setup

```bash
npm install
npm run dev
```

---

## Kriterien-Zuordnung M2

| Kriterium | Datei | Zeile / Hinweis |
| --- | --- | --- |
| npm + Vite | `package.json`, `vite.config.ts` | Projekt-Root |
| React + TypeScript Template | `tsconfig.app.json`, `vite.config.ts` | Projekt-Root |
| TypeScript aktiv genutzt (Interfaces) | `src/types/ListTypes.ts` | Z. 1–26 (IListItem, IMeal, IUser, SettingsItem) |
| TypeScript aktiv genutzt (Props typisiert) | `src/components/text-button/TextButton.tsx` | Z. 1–8 (`type Props`) |
| Komponentenzerlegung (mind. 3) | `src/components/` | Footer, List, Header, AddToList, TextButton |
| App.tsx als Orchestrierung | `src/App.tsx` | Z. 21–30 (nur Routes, kein State/Logik) |
| Props-Übergabe | `src/pages/lists/Lists.tsx` | Z. 56–58 (ListSwitcher, List, AddToList per Props) |
| useState | `src/pages/lists/Lists.tsx` | Z. 25, 29, 33 (shoppingList, pantryList, activeList) |
| useEffect (localStorage) | `src/pages/lists/Lists.tsx` | Z. 35–41 (Listenstatus wird persistent gespeichert) |
| Durchgängige Nutzeraktion | `src/pages/add-meal/AddMeal.tsx` | Z. 11–15: Ingredient eingeben → erscheint sofort in der Liste |

---