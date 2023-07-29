import "../styles/offcanvas.scss"

export default function Offcanvas({open,children}){
    
    return(
        <div className={`offcanvas-container ${open ? "open" : "close"}`}>
            {children}
        </div>
    )
}