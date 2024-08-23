export default function Card({id, title, phone, address}) {
    return (
        <div
            key={id}
            className="card"
        >
            <h2>{title}</h2>
            <div className="times">
                {days + ': ' + hours}
            </div>
            <footer className="contact_info">
                <h6>{phone}</h6>
                <h6>{address}</h6>
            </footer>
        </div>
    );
}