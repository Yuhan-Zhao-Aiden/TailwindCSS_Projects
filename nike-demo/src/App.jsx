import React from "react";

import {
    CustomerReviews,
    Footer,
    Hero,
    PopularProduct,
    Services,
    SpecialOffer,
    Subscribe,
    SuperQuality,
} from "./sections/index.js";

import Nav from "./components/Nav.jsx";
import Sidebar from "./components/Sidebar.jsx";

const App = () => {

    const [sideBarVisible, toggleSidebar] = React.useState(false);

    return (
        <main className="relative">
            <Nav sidebar={() => toggleSidebar(!sideBarVisible)} />
            <Sidebar visible={sideBarVisible}/>
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <PopularProduct />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding-x py-10">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffer />
            </section>

            <section className="bg-pale-4blue padding">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
            </section>
            <section className="padding-x padding-t bg-black pb-8">
                <Footer />
            </section>
        </main>
    );
};

export default App;
