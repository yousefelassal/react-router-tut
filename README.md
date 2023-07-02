# [React Router Tut](https://reactrouter.com/en/main/start/tutorial)

### [Adding a Router](https://reactrouter.com/en/main/start/tutorial#adding-a-router)
- [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router)
  
  ```js
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  ```
  We need to nest routes to render the components inside of each other, rendering components inside `<Root>` by making the paths route a _child_ of the root route.
  
- [RouterProvider](https://reactrouter.com/en/main/routers/router-provider)
  ```js
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
  ```
### [Handling not found Errors](https://reactrouter.com/en/main/start/tutorial#handling-not-found-errors)
- [useRouteError](https://reactrouter.com/en/main/hooks/use-route-error)
  
  ```js
  import { useRouteError } from "react-router-dom";

  export default function ErrorPage() {
    const error = useRouteError();
    console.error(error.statusText);
  }
  ```
  Set the `<ErrorPage>` as the errorElement on the root route
  ```js
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />, // ++
    },
  ]);
  ```
### [Client Side Routing](https://reactrouter.com/en/main/start/tutorial#client-side-routing)

- [Link](https://reactrouter.com/en/main/components/link)

  Change `<a href>` to `<Link to>`
    
    ```js
    <Link to={/* url path */}>link</Link>

    <Link to={/* relative path */} relative="path">link</Link>
    ```
