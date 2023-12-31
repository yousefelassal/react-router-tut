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
  - [Outlet](https://reactrouter.com/en/main/components/outlet)

    to tell the root route where we want it to render its child routes.

    ```js
    <div id="detail">
      <Outlet />
    </div>
    ```
    - [Index Route](https://reactrouter.com/en/main/start/tutorial#index-routes)
      ```js
      children: [
        { index: true, element: <Index /> },
        /* existing routes */
      ],
      ```

      When a route has children, and you're at the parent route's path, the `<Outlet>` has nothing to render because no children match.
      The { index:true } instead of { path: "" } tells the router to match and render this route when the user is at the parent route's exact path
  
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
### [Loading Data](https://reactrouter.com/en/main/start/tutorial#loading-data)
- [useLoaderData](https://reactrouter.com/en/main/hooks/use-loader-data)
  
  ```js
  export async function loaderFunction() {
    //..
    return { data }
  }
  
  const Component = () => {
   const { data } = useLoaderData();
  }
  ```

  after route actions are called useLoaderData hook is updated and the UI stays in sync with the data automatically!

- [loader](https://reactrouter.com/en/main/route/loader)

  ```js
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: loaderFunction // ++
    },
  ]);
  ```

  Configure the loader on the route

### [Creating Data](https://reactrouter.com/en/main/start/tutorial#creating-contacts)

- [Form](https://reactrouter.com/en/main/components/form)

  Change `<form>` to a React Router `<Form>`

  ```js
  export async function actionFunction() {
    //..
    return { data };
  }
  
  <Form method="post">
    <button type="submit">New</button>
  </Form>
  ```

  `<Form>` prevents the browser from sending the request to the server and sends it to the route action instead.

  - [useSubmit](https://reactrouter.com/en/main/hooks/use-submit)

    ```js
    import { useSubmit, Form } from "react-router-dom";

    function SearchField() {
      let submit = useSubmit();
      return (
        <Form
          onChange={(event) => {
            submit(event.currentTarget);
          }}
        >
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </Form>
      );
    }
    ```

    submit the form every time a value changes inside the form
  
- [action](https://reactrouter.com/en/main/route/action)

  ```js
   const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: loaderFunction,
      action: actionFunction // ++
    },
  ]);
  ```

  set the action on the route

### [Redirecting](https://reactrouter.com/en/main/start/tutorial#redirecting-new-records-to-the-edit-page)
- [redirect](https://reactrouter.com/en/main/fetch/redirect)
  ```js
  import { redirect } from "react-router-dom";

  const loader = async () => {
    const user = await getUser();
    if (!user) {
      return redirect("/login");
    }
    return null;
  };
  ```

  The `redirect` helper makes it easier to return a response that tells the app to change locations.
- [NavLink](https://reactrouter.com/en/main/components/nav-link)
  
  ```js
  import { NavLink } from "react-router-dom";

  <NavLink
    to="/messages"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  >
    Messages
  </NavLink>;
  ```
  `<NavLink>` is a special kind of `<Link>` that knows whether or not it is "active" or "pending".
- [useNavigation](https://reactrouter.com/en/main/hooks/use-navigation)
  
  ```js
  function SubmitButton() {
    const navigation = useNavigation();
  
    const text =
      navigation.state === "submitting"
        ? "Saving..."
        : navigation.state === "loading"
        ? "Saved!"
        : "Go";
  
    return
      <button
        type="submit"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >
        {text}
      </button>;
  }
  ```

  a simple submit button that changes its text & className when the navigation state is changing
  
- [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)
  
  ```js
  const navigate = useNavigate();
  <button
    type="button"
    onClick={() => {
      navigate(-1);
    }}
  >
  ```
  
  this would do the same thing as the browser's back button.
  
