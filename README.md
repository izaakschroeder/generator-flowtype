# generator-flowtype

Add [flow] static type checking to your JavaScript projects.

```sh
npm install -g @metalab/generator-flowtype
yo @metalab/flowtype
```

Use with React:

```sh
yo @metalab/flowtype:lib --path node_modules/fbjs/flow/include
```

**IMPORTANT**: `flow check --all` is pretty broken. You have to annotate every single file you want to check with `/* @flow */`. Hopefully this will be addressed with https://github.com/facebook/flow/issues/284.

[flow]: http://flowtype.org
