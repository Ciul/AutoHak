/**
 * /assets/js/reader.js
 */

(function($) { // Dollar Safe Mode
	var $global = this;

	var fileWriter;

	function onFileLoad() {
		$global.requestFileSystem(localFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
	};

	function onFileSystemSuccess(fileSystem) {
		// Load the services.txt file, create it if it doesn't exist.
		fileSystem.root.getFile("services.txt", {create: true, exclusive: true}, onFileEntryComplete, fail);
	};

	function onFileEntryComplete(fileEntry) {
		// Read the file to preload content.
		fileEntry.file(onFileReadComplete, fail);

		// Set up the fileWriter.
		// fileEntry.createWriter(onFileWriterComplete, fail);
	};

	function onFileReadComplete(file) {
		var reader = new FileReader();
		reader.onloadend = function(ev) {
			// Do something with it's content.
			var text	= ev.target.result,
				content	= JSON.decode(text);
			
			Object.each(content, function(value, key) {
				console.log('key: ', key, ' value: ', value);
			});
		}
		reader.readAsText(file);
	};
	
	function onFileWriterComplete(fileWriter) {
		// Store the fileWriter in a global variable so we have it when the user presses save.
		fileWriter = fileWriter;
	};
	
	function saveServiceToFile() {
		if (!!fileWriter) {
			fileWriter.onwrite = function(ev) {
				alert("Saved successfully");
			};
			
			fileWriter.write(JSON.encode({one: 1}));
		} else {
			alert("There was an error trying to save the file.");
		}
		
		return false;
	}
	
	function fail(error) {
		alert("Error: " + error.code);
	};

})(document.id);