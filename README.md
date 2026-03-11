# 🐟 Fiskequiz – Oppsettguide

## Steg 1: Supabase database

Gå til **SQL Editor** i Supabase-dashbordet ditt og kjør denne SQL-koden:

```sql
create table leaderboard (
  id bigserial primary key,
  player_name text not null,
  score integer not null,
  correct integer default 0,
  questions integer default 0,
  duration_seconds integer default 0,
  created_at timestamptz default now()
);

alter table leaderboard enable row level security;

create policy "Anyone can read leaderboard"
  on leaderboard for select using (true);

create policy "Anyone can insert score"
  on leaderboard for insert with check (true);
```

## Steg 2: Legg til bilder

Mappen din fra fisk-nedlasteren inneholder undermapper som:
- `Torsk/`
- `Atlantisk_laks/`
- `Sild/`
- osv.

Kopier **hele** `norske_fiskebilder`-mappen inn i `fiskequiz/`-mappen og gi den nytt navn til `images`:

```
fiskequiz/
├── index.html
├── style.css
├── app.js
├── fish-data.js
├── README.md
└── images/
    ├── Torsk/
    │   ├── Torsk_1.jpg
    │   ├── Torsk_2.jpg
    │   └── ...
    ├── Atlantisk_laks/
    └── ...
```

## Steg 3: Last opp til GitHub Pages

1. Gå til github.com og opprett et nytt repository (kall det f.eks. `fiskequiz`)
2. Dra og slipp hele `fiskequiz/`-mappen inn i GitHub
3. Gå til **Settings → Pages** i repositoriet
4. Under "Source", velg **main branch** og klikk Save
5. Etter 1-2 minutter er siden live på: `https://[ditt-brukernavn].github.io/fiskequiz`

## Bildenavn-format

Bildene må hete: `[Mappenavn]_1.jpg` til `[Mappenavn]_5.jpg`

Eksempel for Torsk:
- `images/Torsk/Torsk_1.jpg`
- `images/Torsk/Torsk_2.jpg`
- osv.

Hvis bildene fra fisk-nedlasteren har et annet format, gi meg beskjed!
