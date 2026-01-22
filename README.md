# Vite + Nitro + Vue Template

Template full-stack pour créer des applications web modernes avec [Vite](https://vite.dev/), [Nitro](https://v3.nitro.build/) et [Vue 3](https://vuejs.org/).

## Stack technique

- **Frontend** : Vue 3 avec vue-router et routage automatique basé sur le système de fichiers
- **Backend** : Nitro (serveur léger basé sur H3)
- **Build** : Vite 8 avec HMR
- **Linting** : OXLint (plugins unicorn, typescript, vue, import, promise)
- **Formatting** : OXFmt
- **Langage** : TypeScript de bout en bout

## Structure du projet

```
├── app/                  # Application frontend (Vue 3)
│   ├── pages/           # Pages auto-routées
│   │   └── index.vue    # Page d'accueil (/)
│   ├── styles/          # Feuilles de style
│   ├── App.vue          # Composant racine
│   └── main.ts          # Point d'entrée Vue + Router
├── server/               # Application backend (Nitro)
│   └── api/
│       └── index.ts     # Handler API (/api/hello)
├── public/               # Assets statiques
├── index.html            # Point d'entrée HTML
├── vite.config.ts        # Configuration Vite + Nitro
└── tsconfig.json         # Configuration TypeScript
```

## Getting started

```bash
pnpm install
pnpm dev
```

Le serveur de développement démarre avec HMR pour le frontend et le backend intégrés.

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Serveur de développement |
| `pnpm build` | Build de production (sortie dans `.output/`) |
| `pnpm preview` | Prévisualiser le build de production |
| `pnpm lint` | Lancer OXLint |
| `pnpm lint:fix` | Corriger les erreurs de lint |
| `pnpm fmt` | Formater le code |
| `pnpm fmt:check` | Vérifier le formatage |

## Fonctionnement

### Routage frontend

Les fichiers dans `app/pages/` génèrent automatiquement les routes grâce à `unplugin-vue-router` :

- `app/pages/index.vue` → `/`
- `app/pages/about.vue` → `/about`
- `app/pages/users/[id].vue` → `/users/:id`

### API backend

Les fichiers dans `server/api/` définissent les endpoints API :

```ts
// server/api/index.ts
export default defineHandler(() => {
  return { api: "works!" };
});
```

### Alias TypeScript

- `~app/*` → `./app/*`
- `~server/*` → `./server/*`

## Déploiement

```bash
pnpm build
pnpm preview
```

Le build produit un dossier `.output/` contenant les assets frontend compilés et le code serveur. Consultez la [documentation Nitro](https://v3.nitro.build/deploy) pour les différents presets de déploiement (Vercel, Netlify, Cloudflare, Node.js, etc.).
