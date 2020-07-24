# test case for restore vs not restore

```
npm install
npm test
npm test:no-restore 
```

`test` includes running `nock.restore()` in `afterEach` as suggested in the docs to fix memory leaks.

`test:no-restore` doesn't call `nock.restore`