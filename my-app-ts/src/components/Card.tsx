import { ReactNode } from "react";

interface CardProps {
    title: string;
    children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className="card" style={{ border: "1px solid #ccc", padding: 15, marginBottom: 10 }}>
            <h2>{title}</h2>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
}