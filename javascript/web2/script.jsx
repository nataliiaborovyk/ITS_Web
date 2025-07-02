const elementRoot = document.getElementById("root");
const root = ReactDOM.createRoot(elementRoot);

const App=(props)=>{
    return(
        <main className="main">
             <h1>Primo componente App</h1>
             {props.children}
        </main>
           
    )
}

const List=()=>{
    return(
        <ul>
            <li>PHP</li>
            <li>JS</li>
            <li>Python</li>
        </ul>
    )
}
root.render(
    // fragmento <> serve per unire tag????
    <>  
    <App>
        <h2>Liste competenze</h2>
        <List></List>
    </App>
    
    </>
)

