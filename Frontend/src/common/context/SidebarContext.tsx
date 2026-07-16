import {
    createContext,
    useContext,
    useState,
} from "react";

type SidebarContextType = {
    collapsed: boolean;
    toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const [collapsed, setCollapsed] = useState(false);

    function toggleSidebar() {
        setCollapsed(prev => !prev);
    }

    return (

        <SidebarContext.Provider
            value={{
                collapsed,
                toggleSidebar,
            }}
        >
            {children}
        </SidebarContext.Provider>

    );

}

export function useSidebar() {

    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("useSidebar must be used inside SidebarProvider");
    }

    return context;

}