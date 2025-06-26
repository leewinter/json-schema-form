# workspaces

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v0.4.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

To add npm dependencies to a particular workspace, just cd to the appropriate directory and run `bun add` commands as you would normally. Bun will detect that you are in a workspace and hoist the dependency as needed.
