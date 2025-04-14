# Neovim Configuration Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A comprehensive documentation site for Neovim configuration, Lazy.nvim, and Vim development. This project serves as a learning resource and reference guide for Neovim users of all skill levels.

## 🚀 About This Project

This documentation site is created and maintained by [Soumitra Saha](https://github.com/soumitra-saha). It provides detailed guides, tutorials, and reference materials for:

- Neovim configuration and customization
- Lazy.nvim plugin management
- Vim/Neovim plugin development
- Best practices for Neovim usage
- Plugin-specific documentation and tutorials

## 📚 Project Structure

Inside of this Astro + Starlight project, you'll find the following structure:

```
.
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and other media
│   ├── content/
│   │   ├── docs/       # Documentation content
│   │   │   ├── how-to-use/  # Usage guides
│   │   │   │   ├── plugins/ # Plugin documentation
│   │   │   ├── vim/    # Vim-specific content
│   │   │   └── ...     # Other documentation sections
│   └── content.config.ts
├── astro.config.mjs    # Astro configuration
├── package.json        # Project dependencies
└── tsconfig.json       # TypeScript configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 📖 Documentation Sections

- **How to Use** - Guides on using the Neovim configuration
  - **Plugins** - Detailed documentation for each plugin
- **Vim** - Vim-specific content and tutorials
- **Resources** - Additional learning resources and references

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this documentation or add new content, please feel free to submit a pull request.

## 📝 License

This documentation is licensed under the MIT License - see the LICENSE file for details.

## 👀 Want to learn more?

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Neovim Documentation](https://neovim.io/doc/)
- [Lazy.nvim Documentation](https://github.com/folke/lazy.nvim)
