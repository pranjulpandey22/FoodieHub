# Chapter 02 – NPM, Package Management & Parcel

[⬅️ Chapter 01](./chapter-01-react-basics.md) | [⬆️ Back to README](../README.md)

---

## 📚 Topics

- NPM
- Bundlers
- Parcel
- Dependencies
- Dev Dependencies
- `package.json`
- `package-lock.json`
- `node_modules`
- NPM version symbols
- `^` vs `~`
- Development build
- Production build

---

## 1. NPM

NPM stands for **Node Package Manager**.

It is used to manage packages and dependencies in a JavaScript project.

```bash
npm install
```

This installs the dependencies defined in `package.json`.

---

## 2. Bundlers

A bundler helps prepare and bundle application files and dependencies for the browser.

In this chapter, we learn about **Parcel**.

---

## 3. Installing Parcel

Install Parcel as a development dependency:

```bash
npm install -D parcel
```

The `-D` flag installs Parcel as a development dependency.

---

## 4. Dependencies

There are two commonly used types of dependencies.

### Dependencies

Packages required by the application.

### Dev Dependencies

Packages mainly required during development.

Examples:

- Parcel
- Development tools
- Testing tools
- Build tools

---

## 5. package.json

`package.json` keeps track of the packages and dependencies used by the project.

It can also contain project scripts and configuration.

```json
{
  "dependencies": {},
  "devDependencies": {}
}
```

---

## 6. package-lock.json

`package-lock.json` keeps track of the exact versions of installed packages and their dependencies.

It helps maintain consistent package versions when the project is installed.

---

## 7. node_modules

`node_modules` contains the packages installed for the project and their dependencies.

It should generally not be committed to Git.

Add it to `.gitignore`:

```text
node_modules/
```

---

## 8. NPM Version Symbols

NPM uses symbols such as `^` and `~` to control allowed package version updates.

### Caret `^`

```text
^1.2.3
```

Allows compatible minor and patch updates.

```text
^1.2.3 → 1.2.4
^1.2.3 → 1.3.0
```

For a major version `1`, it generally allows versions below `2.0.0`.

### Tilde `~`

```text
~1.2.3
```

Allows patch updates.

```text
~1.2.3 → 1.2.4
```

It does not normally move to `1.3.0`.

---

## 9. Parcel

Parcel is a bundler used to build and prepare an application for development and production.

Install it with:

```bash
npm install -D parcel
```

### Topics Covered

- Installing Parcel
- Development build
- Production build
- Bundling
- NPM package management
- Dependencies
- Dev Dependencies

---

## Chapter 02 Summary

```text
NPM
 ↓
Package Management
 ↓
package.json
 ↓
package-lock.json
 ↓
node_modules
 ↓
Dependencies / Dev Dependencies
 ↓
Parcel
 ↓
Bundling
```

---

[⬅️ Chapter 01](./chapter-01-react-basics.md) | [⬆️ Back to README](../README.md)
