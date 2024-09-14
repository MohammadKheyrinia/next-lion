import NavA from "../components/NavA";

export default function AdminLayout({ children }) {
    return (
        <div>
            <NavA />
            {children}
        </div>
    );
}