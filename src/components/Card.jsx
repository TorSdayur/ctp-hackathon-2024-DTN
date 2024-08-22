export default function Card({id, title, desc, links, service_type, school}) {
    return (
        <div
            key={id}
            className={"card" + service_type + school}
        >
            <h2>{title}</h2>
            <p>{desc}</p>
            <ul>
                {links.map((link, index) => (
                    <li key={index}><a href={link.url}>{link.title}</a></li>
                ))}
            </ul> 
        </div>
    );
}