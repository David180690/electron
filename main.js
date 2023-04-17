const {app,BrowserWindow}=require('electron')
app.whenReady().then(()=>{
    const myWindow=new BrowserWindow({
        width:300,
        height:300,
        webPreferences:{
            nodeIntegration:true
        }
    });
    myWindow.loadFile('index.html')

})