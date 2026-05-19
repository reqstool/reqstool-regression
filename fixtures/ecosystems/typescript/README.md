# reqstool-regression-typescript

TypeScript ecosystem regression fixture for [reqstool-client](https://github.com/reqstool/reqstool-client).

Imports the parent layer from `../parent` and adds TypeScript-specific source, annotations, and test results. Byte-equivalent in structure to `../python` and `../java`.

Annotations use JSDoc `@Requirements` / `@SVCs` tags (not class decorators) as required by `reqstool-typescript-tags`.

See [reqstool-client#385](https://github.com/reqstool/reqstool-client/issues/385).
