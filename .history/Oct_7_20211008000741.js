function escapeHTML(text) {  
    var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "": "&quote;"};                      
    return text.replace(/[<>&"]/g, function(character) {  
        return replacements[character];  
    }); 
}

function useHTMLescape() {


    var text = "<h1> Some JavaScript Tips and Tricks Would Be Usefule</h1>";


    escapeHTML(text);
}