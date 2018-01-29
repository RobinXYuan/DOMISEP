    function AddOrDelModel(modelId){
        var insertText = '<table tag=' + modelId + '><tr><td>' + modelId + '被选中</td></tr></table>';  
        insertEl = document.getElementById("insert");  
        if(document.getElementById(modelId).checked){   insertEl.innerHTML = insertEl.innerHTML + insertText;  
        }
        else
        {   var tables = insertEl.getElementsByTagName("table");   
            for(var i = 0; i < tables.length; i++)
            {    if(tables[i].getAttribute("tag") == modelId)       {     
                insertEl.removeChild(tables[i]);     
                break;    
            }   
            }  
        } 
    } 