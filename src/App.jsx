import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import SentOtp from "./pages/SentOtp";
import VerifyOtp from "./pages/VerifyOtp";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import { AuthContextProvider } from "./context/AuthContext";
import DashboardLayout from "./pages/DashboardLayout";
import Categories from "./pages/Categories";
import { CategoryContextProvider } from "./context/CategoryContext";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { PostContextProvider } from "./context/PostContext";
import PageContent from "./components/homePageContent/PageContent";
import Post from "./pages/Post";
import Tag from "./pages/Tag";
import Test from "./pages/Test";
import { CommentContextProvider } from "./context/CommentContext";
import CreatePostForm from "./pages/CreatePostForm";
import CreateProfile from "./pages/CreateProfile";
import UserProfile from "./pages/UserProfile";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import TagsPage from "./pages/TagsPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/registration",
            element: <Registration />,
        },
        {
            path: "/sentOtp",
            element: <SentOtp />,
        },
        {
            path: "/verifyOtp",
            element: <VerifyOtp />,
        },
        {
            path: "/resetPassword",
            element: <ResetPassword />,
        },
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    index: true,
                    element: <PageContent />,
                },
                {
                    path: "/post/:id",
                    element: <Post />,
                },
                {
                    path: "/tag/:tagName",
                    element: <Tag />,
                },
                {
                    path: "test",
                    element: <Test />,
                },
                {
                    path: "createPost",
                    element: <CreatePostForm />,
                },
                {
                    path: "profile/:id",
                    element: <UserProfile/>
                },
                {
                    path: "create/profile",
                    element : <CreateProfile/>
                },
                {
                    path: "/followers",
                    element: <Followers/>
                },
                {
                    path: "/following",
                    element: <Following/>
                },
                {
                    path: "/tags",
                    element: <TagsPage/>
                }
            ],
        },
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />,
                },
                {
                    path: "categories",
                    element: <Categories />,
                },
                {
                    path: "posts",
                    element: <Posts />,
                },
            ],
        },
    ]);

    return (
        <div className="bg-[#F5F5F5]">
            <CommentContextProvider>
                <PostContextProvider>
                    <AuthContextProvider>
                        <CategoryContextProvider>
                            <RouterProvider router={router} />
                        </CategoryContextProvider>
                    </AuthContextProvider>
                </PostContextProvider>
            </CommentContextProvider>
        </div>
    );
}

export default App;
