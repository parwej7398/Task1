import Blog from "../MainHead/Blog";
import ContactUs from "../MainHead/ContactUs";
import Contracts from "../MainHead/Contract";
import FAQ from "../MainHead/Faq";
import Head from "../MainHead/Head";
import Team from "../MainHead/Team";
import Date from "../MainHead/pages/Date";
import Freelance from "../MainHead/pages/Freelance";
import Handyman from "../MainHead/pages/Handyman";
import Prenup from "../MainHead/pages/Prenup";
import PromiseDemo from "../MainHead/pages/Promise";
import Purchase from "../MainHead/pages/Purchase";
import Rental from "../MainHead/pages/Rental";
import Sign from "../MainHead/pages/Sign";
import Uncouple from "../MainHead/pages/Uncuple";
import Venue from "../MainHead/pages/venue";

export const routes = [
    {
        id: 1,
        path: "/",
        element: <Head />
    },
    {
        id: 2,
        path: "/contracts",
        element: <Contracts />
    },
    {
        id: 3,
        path: "/blog",
        element: <Blog />
    },
    {
        id: 4,
        path: "/faq",
        element: <FAQ />
    },
    {
        id: 5,
        path: "/team",
        element: <Team />
    },
    {
        id: 6,
        path: "/contact_us",
        element: <ContactUs />
    },
    {
        id: 6,
        path: "/handyman",
        element: <Handyman />
    },
    {
        id: 7,
        path: "/venue",
        element: <Venue />
    },
    {
        id: 8,
        path: "/freelance",
        element: <Freelance />
    },
    {
        id: 9,
        path: "/sign",
        element: <Sign />
    },
    {
        id: 10,
        path: "/promise",
        element: <PromiseDemo />
    },
    {
        id: 11,
        path: "/rental",
        element: <Rental />
    },
    {
        id: 11,
        path: "/purchase",
        element: <Purchase />
    },
    {
        id: 11,
        path: "/uncouple",
        element: <Uncouple />
    },
    {
        id: 11,
        path: "/prenup",
        element: <Prenup />
    },
    {
        id: 11,
        path: "/date",
        element: <Date />
    },
];
