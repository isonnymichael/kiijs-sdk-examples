# 🤝 Contributing to KiiJS SDK Example Apps

Thanks for your interest in contributing! This project welcomes any pull requests, issues, or suggestions to improve the examples and documentation.

---

## 📦 About the Project

This repository contains a collection of simple and practical example applications built with React + Vite to demonstrate how to use the [KiiJS SDK](https://github.com/KiiChain/kiijs-sdk) in real-world scenarios.

Each folder (e.g. `example-1`, `example-2`) is a standalone project using the KiiJS SDK.

---

## 🧰 Project Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm / npm / yarn (choose one)

### Run a single example app

1. Navigate to the example folder, e.g. `example-1`
2. Install dependencies using `pnpm install`
3. Start the dev server using `pnpm dev`

Repeat these steps for any example app (`example-X`).

---

## 📄 Contribution Guidelines

### 1. Fork the repo

Click "Fork" on the top right of this repo, then clone your fork:

- `git clone https://github.com/yourusername/kiijs-sdk-examples.git`
- `cd kiijs-sdk-examples`

### 2. Add your example app

- Create a new folder: `mkdir example-3 && cd example-3`
- Scaffold a new Vite + React + TypeScript app using `pnpm create vite`
- Install `@kiichain/kiijs-sdk`
- Add relevant functionality using the SDK
- Add a `README.md` explaining what your app does

### 3. Commit and push your changes

- `git checkout -b feat/example-3`
- `git add .`
- `git commit -m "feat: add example-3 using KiiJS SDK"`
- `git push origin feat/example-3`

### 4. Open a Pull Request

Go to GitHub and open a pull request from your branch. Make sure to:

- Clearly describe what your example does
- Confirm the app runs correctly
- Keep the structure consistent with other apps

---

## 🧩 Types of Contributions

| Type        | Description                               | GitHub Label  |
| ----------- | ----------------------------------------- | ------------- |
| Bug Report  | Report unexpected or broken behavior      | `bug`         |
| Enhancement | Improve existing functionality or code    | `enhancement` |
| Feature     | Add entirely new features or capabilities | `feature`     |

---

## 📝 Creating an Issue

If you encounter a bug, have a question, or want to request a feature:

1. Go to the [Issues tab](../../issues) and click **New issue**.
2. Select the appropriate type:
   - **Bug Report**
   - **Feature Request**
   - **Enhancement**
3. Fill in the issue form with as much detail as possible:
   - Steps to reproduce (for bugs)
   - What you expected to happen
   - Screenshots or code examples, if helpful

---

## 🧑‍💻 Working on an Issue

Want to contribute code? Follow these steps:

1. Look for issues labeled `good first issue` or `help wanted`.
2. Comment on the issue:  
   "Hi! I'd like to work on this."
3. Wait for a maintainer to assign you.
4. Create a new branch with a name that includes the issue number. This helps everyone track what each branch is for.

```bash
   git checkout -b issue-#1
```

5. Make your changes.
6. Commit using [Conventional Commits](https://www.conventionalcommits.org):

```bash
   git commit -m "fix: correct email validation error message"
```

7. Push your branch:

```bash
   git push origin issue-#1
```

8. Open a Pull Request (PR) to the `master` branch.

---

## 🏷️ Understanding Labels

We use GitHub labels to organize contributions:

- `bug`: Fixes an error or broken functionality.
- `enhancement`: Improves an existing feature or code.
- `feature`: Introduces new functionality.
- `good first issue`: Great for first-time contributors.
- `help wanted`: Contributions are welcome.
- `question`: Open-ended discussions or clarifications.

---

## 🧼 Code Quality

We use **ESLint** and **Prettier** to ensure consistent code formatting. Before committing:

```bash
   npm run lint
```

Linting and formatting will also run automatically on staged files using **Husky** and **lint-staged**.

---

## ✅ Pull Request Checklist

Before you open a PR, please make sure:

- [ ] Your code follows the project's style.
- [ ] All tests pass.
- [ ] You use a descriptive commit message.
- [ ] The PR references a related issue (`Closes #123`).
- [ ] You’ve explained **what** and **why** you changed something.

---

## 💬 Need Help?

Feel free to open an issue with your question — we’re happy to help and support you on your open source journey!

Thanks again for being part of this project! 🙌
