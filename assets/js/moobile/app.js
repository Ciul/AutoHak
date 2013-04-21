/*
---

name: ViewController.Home

description:

license:

authors:
	- Your name

requires:

provides:
	- ViewController.Home

...
*/

if (!window.ViewController) window.ViewController = {};

ViewController.Home = new Class({

	Extends: Moobile.ViewController,

	navigationBar:		null,
	addServiceButton:	null,
	servicesList:		null,

	loadView: function() {
		this.view = Moobile.ScrollView.at('templates/views/home-view.html');
	},

	viewDidLoad: function() {
		this.parent();
		this.navigationBar		= this.view.getChildComponent('navigation-bar');
		var navigationBarItem	= this.navigationBar.getItem();
		this.addServiceButton	= navigationBarItem.getButton('button-add-service');
		
		this.addServiceButton.addEvent('tap', this.bound('onAddButtonTap'));
		
		this.servicesList		= this.view.getChildComponent('services-list');
		this.servicesList.addEvent('select', this.bound('onListItemSelect'));
	},

	destroy: function() {
		this.addServiceButton.removeEvent('tap', this.bound('onAddButtonTap'));
		this.servicesList.removeEvent('select', this.bound('onListItemSelect'));
		
		this.navigationBar	= null;
		this.addServiceButton		= null;
		this.servicesList	= null;
		
		this.parent();
	},
	
	onAddButtonTap: function() {
		//this.getViewControllerStack().pushViewController(new ViewControllerAddSvice(), new Moobile.ViewTransition.Slide);
	},
	
	onListItemSelect: function(listItem) {
		this.servicesList.addItem(String.uniqueID());
	}

});

/*
---

name: ViewController.Home

description:

license:

authors:
	- Your name

requires:

provides:
	- ViewController.Home

...
*/
window.ViewControllerAddSvice = new Class({

    Extends: Moobile.ViewController,
	
	navigationBar:	null,
    backButton:		null,
	saveButton:		null,
	
	loadView: function() {
		this.view = Moobile.ScrollView.at('templates/views/add-service-view.html');
		alert("ViewControllerAddService Loading");
	},
	
    viewDidLoad: function() {
		alet("viewDidLoad runned");
        // this.navigationBar		= this.view.getChildComponent('navigation-bar');
		// var navigationBarItem	= this.navigationBar.getItem();
		// this.backButton	= navigationBarItem.getButton('button-back');
		// this.saveButton = this.view.getChildComponent('button-save');
		
		// this.backButton.addEvent('tap', this.bound('onBackButtonTap'));
		// this.saveButton.addEvent('tap', this.bound('onSaveButtonTap'));
    },

    destroy: function() {
		// this.backButton.removeEvent('tap', this.bound('onBackButtonTap'));
		// this.saveButton.removeEvent('tap', this.bound('onSaveButtonTap'));
		
		// this.navigationBar = null;
		// this.backButton = null;
		// this.saveButton = null;
		
		this.parent();
    },

    onBackButtonTap: function() {
        this.getViewControllerStack().popViewController();
    },
	
	onSaveButtonTap: function() {
		alert("clicked");
		// saveServiceToFile();
	}
	
});