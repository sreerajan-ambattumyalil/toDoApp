'use strict';
const app = require('app');
var repository = require('./js/backEnd/itemsRepository');
const BrowserWindow = require('browser-window');
var ipc = require('ipc');
let mainWindow = null;

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});


ipc.on('saveItems', function(event, arg) {
	repository.saveItems(arg);
});

ipc.on('getItems', function(event) {
	event.returnValue = repository.loadItems();
});


app.on('ready', function () {
	mainWindow = new BrowserWindow({
		width: 600,
		height: 1000,
		resizable: false
	});

	mainWindow.loadUrl(`file://${__dirname}/index.html`);

	mainWindow.on('closed', function () {
		// deref the window
		// for multiple windows store them in an array
		mainWindow = null;
	});


});
