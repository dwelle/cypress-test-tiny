# repro

1. `git clone https://github.com/dwelle/cypress-test-tiny.git dwelle_cypress_hang`
2. `cd dwelle_cypress_hang && git checkout dwelle_hang`
3. `npm i`
4. `npx cypress run --spec cypress/integration/a.spec.js,cypress/integration/b.spec.js`
