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

const page = (
    <nav>
        <h1>Welcome to Hara's Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)



ReactDOM.render(
    page,
    document.getElementById("root"));