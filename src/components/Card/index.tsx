import "./styles.css";

export type CardProps = {
    name: string;
    time: string;
};

export function Card({ name, time }: CardProps) {
    return (
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    );
}
