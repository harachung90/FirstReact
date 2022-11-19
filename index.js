/*
function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}
*/

/*

imperative way of programming

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

 */

function Header() {
    return (
        <header>
            <nav>
                <img src="react-logo.png" width="40px"/>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React!</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2022 HaraChu Development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(
    Page(),
    document.getElementById("root"));

