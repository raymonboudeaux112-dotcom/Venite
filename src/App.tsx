/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Admissions } from "./pages/Admissions";
import { Programmes } from "./pages/Programmes";
import { Contact } from "./pages/Contact";
import { Preloader } from "./components/Preloader";

export default function App() {
  return (
    <>
      <Preloader />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="programmes" element={<Programmes />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
