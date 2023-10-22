// Create a CodeMirror instance from the textarea with the ID "code-editor"
var codeEditor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    lineNumbers: true,         // Enable line numbers in the editor
    mode: "htmlmixed",         // Set the initial mode to HTML/CSS
    theme: "dracula",          // Use the "dracula" theme
    autoCloseBrackets: true,   // Automatically close brackets
    tabSize: 8,                // Set the tab size to 8 spaces
  });
  
  // Add an event listener to the "HTML/CSS" button
  document.getElementById("html").addEventListener("click", function () {
    // Change the editor mode to HTML/CSS
    codeEditor.setOption("mode", "htmlmixed");
    // Add the "active-button" class to the "HTML/CSS" button
    document.getElementById("html").classList.add("active-button");
    // Remove the "active-button" class from the "CPP" button
    document.getElementById("cpp").classList.remove("active-button");
  });
  
  // Add an event listener to the "CPP" button
  document.getElementById("cpp").addEventListener("click", function () {
    // Change the editor mode to C/C++
    codeEditor.setOption("mode", "clike");
    // Add the "active-button" class to the "CPP" button
    document.getElementById("cpp").classList.add("active-button");
    // Remove the "active-button" class from the "HTML/CSS" button
    document.getElementById("html").classList.remove("active-button");
  });
  
  // Add an event listener to the "Copy" button
  document.getElementById("copy-button").addEventListener("click", function () {
    // Copy the editor's content to the clipboard
    navigator.clipboard.writeText(codeEditor.getValue());
  });
  
  // Add an event listener to the "Save" button
  document.getElementById("save-button").addEventListener("click", function () {
    // Create a blob from the editor's content and prepare it for download
    const blob = new Blob([codeEditor.getValue()], { type: "text/plain" });
    const anchor = document.createElement("a");
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = "code.txt";
    anchor.click();
  });
  
  // Add an event listener to the "Lock" button
  document.getElementById("lock-button").addEventListener("click", function () {
    // Toggle the editor's "readOnly" option (lock/unlock the editor)
    codeEditor.setOption("readOnly", !codeEditor.getOption("readOnly"));
  });
  
  // Add an event listener to the "Indent" button
  document.getElementById("ibutton").addEventListener("click", function () {
    // Indent the content in the editor by adding 2 spaces to each line
    const code = codeEditor.getValue();
    const lines = code.split("\n");
    const indentedLines = lines.map((line) => " ".repeat(2) + line);
    const indentedCode = indentedLines.join("\n");
    codeEditor.setValue(indentedCode);
  });
  