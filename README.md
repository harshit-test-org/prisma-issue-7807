## Introduction

This repository contains reproduction for https://github.com/prisma/prisma/issues/7807


## Version Information

```
Environment variables loaded from prisma\.env
prisma               : 2.29.0-dev.5
@prisma/client       : 2.29.0-dev.5
Current platform     : windows
Query Engine         : query-engine 89facabd0366f63911d089156a7a70125bfbcd27 (at node_modules\@prisma\engines\query-engine-windows.exe)
Migration Engine     : migration-engine-cli 89facabd0366f63911d089156a7a70125bfbcd27 (at node_modules\@prisma\engines\migration-engine-windows.exe)
Introspection Engine : introspection-core 89facabd0366f63911d089156a7a70125bfbcd27 (at node_modules\@prisma\engines\introspection-engine-windows.exe)
Format Binary        : prisma-fmt 89facabd0366f63911d089156a7a70125bfbcd27 (at node_modules\@prisma\engines\prisma-fmt-windows.exe)
Default Engines Hash : 89facabd0366f63911d089156a7a70125bfbcd27
Studio               : 0.417.0
```

## Steps

1. Clone the repo and replace credentials in `.env`
2. Run `npx prisma db push` to bootstrap the database
3. Run `yarn ` to install deps
4. Run `yarn start` to reproduce


## Error
```
yarn run v1.22.5
$ ts-node main.ts
(node:6176) UnhandledPromiseRejectionWarning: Error:
Invalid `prisma.user.findUnique()` invocation:


  Error occurred during query execution:
ConnectorError(ConnectorError { user_facing_error: None, kind: QueryError(Error { kind: Db, cause: Some(DbError { severity: "ERROR", parsed_severity: Some(Error), code: SqlState("42712"), message: "table name \"User\" specified more than once", detail: None, hint: None, position: None, where_: None, schema: None, table: None, column: None, datatype: None, constraint: None, file: Some("parse_relation.c"), line: Some(445), routine: Some("checkNameSpaceConflicts") }) }) })
    at cb (C:\Users\harshit\code\reproductions\issue_7807\node_modules\@prisma\client\runtime\index.js:34804:17)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at main (C:\Users\harshit\code\reproductions\issue_7807\main.ts:6:16)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:6176) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing insi
de of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To termina
te the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs
.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:6176) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
