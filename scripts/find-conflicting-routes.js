const fs = require('fs');
const path = require('path');

function walk(dir, exts) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(full, exts));
    else if (exts.includes(path.extname(e.name))) files.push(full);
  }
  return files;
}

const root = process.cwd();
const appDir = path.join(root, 'app');
const pagesDir = path.join(root, 'pages');
const exts = ['.js', '.jsx', '.ts', '.tsx'];

function pageNameFromPages(file) {
  const rel = path.relative(pagesDir, file).replace(/\\\\/g, '/');
  const ext = path.extname(file)
  // Remove the extension from the relative path by slicing off ext length
  const withoutExt = ext ? rel.slice(0, rel.length - ext.length) : rel
  let name = '/' + withoutExt
  if (name.endsWith('/index')) name = name.replace(/\/index$/, '') || '/';
  return name;
}

function pageNameFromApp(file) {
  // app/page.tsx -> /
  // app/foo/page.tsx -> /foo
  const rel = path.relative(appDir, file).replace(/\\\\/g, '/');
  if (rel.endsWith('/page' + path.extname(file))) {
    const dir = path.dirname(rel);
    const name = '/' + (dir === '.' ? '' : dir);
    return name === '/' ? '/' : name;
  }
  // If the file itself is not a page file, skip
  return null;
}

const pagesFiles = walk(pagesDir, exts).filter(f => f.includes('/api/') === false);
const appFiles = walk(appDir, exts);

const pagesRoutes = new Map();
for (const f of pagesFiles) {
  const route = pageNameFromPages(f);
  pagesRoutes.set(route, f);
}

const appRoutes = new Map();
for (const f of appFiles) {
  const r = pageNameFromApp(f);
  if (r) appRoutes.set(r, f);
}

const conflicts = [];
for (const [route, appFile] of appRoutes) {
  if (pagesRoutes.has(route)) {
    conflicts.push({ route, appFile, pagesFile: pagesRoutes.get(route) });
  }
}

if (conflicts.length === 0) {
  console.log('No route conflicts found between app/ and pages/.');
  process.exit(0);
}

console.log('Found route conflicts:');
for (const c of conflicts) {
  console.log(`- Route: ${c.route}`);
  console.log(`  app:   ${c.appFile}`);
  console.log(`  pages: ${c.pagesFile}`);
}

process.exit(1);
