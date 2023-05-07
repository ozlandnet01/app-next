import Navbar from "@/components/NavBar";
import { ReactNode, useState } from "react";
import Sidebar from "../Sidebar";
import { CountdownProvider } from "@/context/CountdownContext";
import styles from './Layout.module.scss';
import Footer from "../Footer";

interface Props {
    children: ReactNode;
  }

export default function Layout({ children } : Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    }

    
    return (
      <>
        <CountdownProvider>
            <div className="min-h-screen flex-col items-center justify-between overflow-hidden">
                <Navbar toggleHandler={toggleSidebar}/>
                <Sidebar isOpen={sidebarOpen} toggleHandler={toggleSidebar}/>
                <main className={`${styles.container}`}>{children}</main>
                <Footer />
            </div>
        </ CountdownProvider>
      </>
    );
  }