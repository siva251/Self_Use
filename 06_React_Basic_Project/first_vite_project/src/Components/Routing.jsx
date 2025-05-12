const Routing = () => {
    return (<>
        <div className="main-header">
            <h2 className="container">React Router</h2>
            <div className="content">
                <ul>
                    <li>We wrap our content first with BrowserRouter.</li>
                    <li>Then we define our Routes. An application can have multiple Routes.</li>
                    <li>Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.</li>
                    <li> In React Router, the index prop is used to define a default child route for a parent route — particularly when you're using nested routing. It tells React Router which route to render by default when only the parent path is matched.
                        <pre>
                            <code>
                                {

                                    `<Routes> 
                                    <Route path="/dashboard" element={<Dashboard />}> 
                                    <Route index element={<DashboardHome />} /> 
                                    <Route path="settings" element={<Settings />} />
                                     </Route> 
                                     </Routes>`
                                }
                            </code>
                        </pre>
                        If you navigate to /dashboard, it will absolutely render both components:<pre><code>{`<Dashboard />`}</code></pre>  — the parent component <pre><code>{`<DashboardHome />`}</code></pre>  — the nested index route, rendered inside the <pre><code>{`<Outlet />`}</code></pre>  of <pre><code>{`<Dashboard />`}</code></pre>
                    </li>
                    <li>Outlet is a special placeholder component used inside a parent route to render the child route's component.
                        <pre><code>{`// Dashboard.js
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <Outlet /> {/* Renders <DashboardHome /> or <Settings /> based on route */}
    </div>
  );
}
`}</code></pre>
                    </li>
                    <li>
                        useParams() is a React Router hook that lets you access dynamic parameters from the current URL.
                        <pre><code>{`<Routes>
  <Route path="/user/:id" element={<User />} />
</Routes>`}</code></pre>
                        :id is a route parameter.
                        <pre><code>{`import { useParams } from 'react-router-dom';

function User() {
  const params = useParams();
  return <h2>User ID: {params.id}</h2>;
}
`}</code></pre>
                        If you visit /user/45, it will render:
                        👉 User ID: 45
                    </li>
                    <br />
                    <li>
                        What is the Difference between Link and NavLink ?
                        <br /> &nbsp;
                        <strong>Link</strong> : Used to navigate to a different route.

                        It behaves like an <code>{`<a/>`}</code> tag but prevents page reload.

                        It does not automatically apply styling based on active route.
                        <br /> &nbsp;
                        <strong>NavLink</strong> : Just like Link, but with extra features for styling the "active" link.

                        It automatically applies an active class (or custom class) when the current route matches the link.

                        Useful in navigation menus to highlight the current page.
                    </li>
                    <br />
                    <li>
                        <b>useSearchParams - hook</b> &nbsp;
                        The useSearchParams hook in React Router (v6 and above) is used to read and update the query parameters (also known as "search parameters") in the URL.
                        <br />
                        Lets you access values like ?page=2&sort=asc from the URL.

                        Returns a pair: [searchParams, setSearchParams], similar to useState.<br />
                        Example : URL - https://example.com/products?page=2&sort=asc
                        <pre><code>{`import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const sort = searchParams.get("sort");

  const goToNextPage = () => {
    setSearchParams({ page: Number(page) + 1, sort });
  };

  return (
    <div>
      <h2>Page: {page}</h2>
      <h3>Sort: {sort}</h3>
      <button onClick={goToNextPage}>Next Page</button>
    </div>
  );
}
`}</code></pre>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}

export default Routing;