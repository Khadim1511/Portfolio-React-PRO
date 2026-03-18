import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/RootLayout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import EducationPage from "@/pages/EducationPage";
import CertificationsPage from "@/pages/CertificationsPage";
import Contact from "@/pages/Contact";

const routeur = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "education", element: <EducationPage /> },
      { path: "certifications", element: <CertificationsPage /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routeur} />;
}
