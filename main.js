const path = require('path')
const url = require('url')
const { app, Menu,ipcMain, Tray, BrowserWindow } = require('electron')



let win;

function createWindow () {
  // Create the browser window.
const{screen} = require('electron')
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;


    if (process.platform == 'darwin')
    win = new BrowserWindow({
        center:true,
        width: 600,
        height: 280,
        minWidth: 400,
        minHeight: 150,
        maxWidth:700,
        maxHeight:300,
        skipTaskbar: true,
        frame:false,
        titleBarStyle:"default"

    });
      
    else
      win = new BrowserWindow({
        center:true,
        width: 600,
        height: 280,
        minWidth: 400,
        minHeight: 150,
        maxWidth:700,
        maxHeight:300,
        skipTaskbar: true,
        show: false,
        frame: false,
        titleBarStyle: 'hidden'

        
      })



 
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/Alive', 'index.html'),
    protocol: 'file',
    slashes: true
  }))

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()


  ipcMain.on('quit', (event, arg) => {
  
    app.quit()
   
  });

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })

   tray = new Tray('iconTemplate.png')
    tray.setImage('BatmanTemplate.png')
    const contextMenu = Menu.buildFromTemplate([
        { id: '1', label: 'Open settings window', click() { win.show() } },
        { type: 'separator' },
        { id: '3', label: 'Loading...', enabled: false, afterGroupContaining: ['1'] },
        { type: 'separator' },
        { id: '2', label: 'Quit' }
    ])
    tray.setToolTip('This is my application.')
    tray.setContextMenu(contextMenu)

    setTimeout(function () {

        const contextMenu2 = Menu.buildFromTemplate([
            { id: '1', label: 'Open settings window', click() { win.show() } },
            { type: 'separator' },
            { id: '3', label: 'Mediathek Api', icon: 'red.png', beforeGroupContaining: ['4'] },
            { id: '5', label: 'Xparser Api', icon: 'green.png', beforeGroupContaining: ['4'] },

            { type: 'separator' },

            { id: '4', label: 'YoutubeDL : 07/11/2018', afterGroupContaining: ['5'] },
            { id: '6', label: 'Node : 10.0.0', afterGroupContaining: ['5'] },

            { type: 'separator' },
            { id: '2', label: 'Quit', click() { app.quit() } }
        ])

        tray.setContextMenu(contextMenu2)

    }, 3000);


}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})