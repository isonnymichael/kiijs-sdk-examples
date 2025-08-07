# 🚀 KiiJS SDK Example Apps

This repository contains a collection of simple example applications demonstrating how to use the [KiiJS SDK](https://github.com/KiiChain/kiijs-sdk) for interacting with the Kii Network using React.

Each example is a self-contained React app built with Vite and TypeScript, and is intended to help developers integrate KiiChain into their own projects.

---

## 📂 Folder Structure

```sh
/
├── examples/               # All example apps live here
│   ├── evm/example-1/      # Example 1 - Wallet connect & network check
│   ├── proto/example-1/    # Example 2 - Read balance & contract interaction
│   ├── rwa/example-1/      # Example 3 - Read wallet balance & interact with contract
│   └── utils/example-1/    # Example 4 - Utility functions & helpers
├── .husky/                 # Git hooks (linting, formatting, commit msg)
├── .prettierignore         # Prettier ignore file
├── .gitignore              # Git ignore file
├── prettier.config.js      # Prettier config
├── commitlint.config.js    # Commit message rules
├── CONTRIBUTING.md         # Contribution guide
├── LICENSE                 # MIT License
├── package.json            # Tooling dependencies (Prettier, Husky, etc)
└── README.md               # You are here
```

---

## 📦 Example Apps

| Name  | Path                                                   | Description                                  |
| ----- | ------------------------------------------------------ | -------------------------------------------- |
| EVM   | [`examples/evm/example-1`](examples/evm/example-1)     | Basic wallet connect & network check         |
| Proto | [`examples/proto/example-1`](examples/proto/example-1) | Read wallet balance & interact with contract |
| RWA   | [`examples/rwa/example-1`](examples/rwa/example-1)     | Read wallet balance & interact with contract |
| Utils | [`examples/utils/example-1`](examples/utils/example-1) | Utility functions & helpers                  |

---

## 🧰 Tech Stack

- ⚛️ React
- ⚡ Vite
- 🟦 TypeScript
- 🔗 [KiiJS SDK](https://github.com/KiiChain/kiijs-sdk)
- 🎨 Prettier (formatting)
- 🧹 ESLint (optional per example)
- 🐶 Husky + Lint-Staged (Git hooks)
- 📏 Conventional Commits (via Commitlint)

---

## 📥 Getting Started

1. Clone the repository

```sh
git clone https://github.com/yourusername/kiijs-sdk-examples.git
cd kiijs-sdk-examples
```

2. Navigate to any example folder

```sh
cd examples/example-1
npm install
npm run dev
```

> Each example has its own dependencies and README.

---

## 🤝 Contributing

We welcome contributions from the community!

To get started:

1. Read the [CONTRIBUTING.md](./CONTRIBUTING.md) guide.
2. Follow the coding style and commit conventions.
3. Submit a pull request with clear description.

---

## 📝 License

This project is licensed under the **MIT License**.  
See [LICENSE](./LICENSE) for details.

---

## 💬 Questions or Feedback?

Feel free to open an [issue](https://github.com/yourusername/kiijs-sdk-examples/issues) or start a discussion.  
We appreciate your input and support!

---

Happy hacking! 🛠️✨
