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

function temporaryName() {
    return (
        <div>
            <img src="react-logo.png" width="40"/>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K starts on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
        )
}

ReactDOM.render(
    temporaryName(),
    document.getElementById("root"));

