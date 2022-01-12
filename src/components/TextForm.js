import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked! " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Uppercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase!", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }
    
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard!", "success");
    } 
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    // const countWord = () => {
    //     var words = document.getElementById("myBox").value;
    //     var count = 0;
    //     var split = words.split(' ');
    //     for (var i = 0; i < split.length; i++) {
    //         if (split[i] != "") {
    //             count += 1;
    //         }
    //     }
    //     document.getElementById("show").innerHTML = count;
    // }

    const [text, setText] = useState('');
    // text = "New Text";  // Wrong way to change the state
    // setText("New Text");  // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview here!"}</p>
        </div>
        </>
    )
}
