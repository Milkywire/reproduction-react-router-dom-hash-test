# Setup procedure

1. https://create-react-app.dev/docs/getting-started/ `npx create-react-app`
2. https://create-react-app.dev/docs/adding-a-router/ `npm install --save react-router-dom`
3. `import { BrowserRouter } from "react-router-dom";` in `index.js`
4. Use `<BrowserRouter><App /></BrowserRouter>` in render method
5. `import { useLocation } from 'react-router-dom';` in `App.js`
6. Use `const { hash } = useLocation(); const hashValue = (hash && hash.replace("#", "")) || undefined;` and Append `Learn React {hashValue}` to render the hash, if any
7. `import { BrowserRouter, MemoryRouter } from "react-router-dom";` in `App.test.js`
8. Update existing test with `render(<App />, { wrapper: BrowserRouter });`
9. Replicate test with hash value:

```
test("renders learn react link with hash value", () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: "/", hash: "#hash" }]}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/learn react hash/i);
  expect(linkElement).toBeInTheDocument();
});
```

10. Running the test fails NOT!
