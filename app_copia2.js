(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService', '$timeout'];
	function ToBuyController(ShoppingListCheckOffService, $timeout) {
		
		var buylist = this;

		buylist.label = [];
		//buylist.label2 = [];
		for (var i = 0;  i < 5; i++) {
		buylist.label[i] = "Buy";
		//console.log(buylist.label1[i]);
		}
		//buylist.label = "Buy";

		buylist.Items2Shop = ShoppingListCheckOffService.getBuyItems();
			//console.log("a ver a ver");//
		
		//buylist.ItemsShopped = ShoppingListCheckOffService.getBoughtItems();
		
			//buylist.label = []
			//for (var i = 0; i < 5; i++) {
				//obj = {label}
				//label << obj 
			//}
			
		buylist.counter = 0;


		buylist.clicker = function(name, quantity, index, id) {
			
			$timeout(function(name, quantity, index) {

				if (buylist.counter <=4) { 
			
			ShoppingListCheckOffService.buyItem(name, quantity, index);
			//console.log("probando");

			console.log(id);
		
			document.getElementById("btn" + id).style.color = "green";

			buylist.label[id] = "Bought";

			buylist.counter +=1;

		};

		ShoppingListCheckOffService.getBoughtItems();
			

		//buylist.label1 = "Bought";
	}, 20);
		
	}

		
	}
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', '$timeout'];
	function AlreadyBoughtController (ShoppingListCheckOffService, $timeout) {

		var boughtlist = this;

		$timeout(function() {

		boughtlist.boughtItems = ShoppingListCheckOffService.getBoughtItems();

	}, 20);

		//boughtlist.boughtarray = [];

	}

	function ShoppingListCheckOffService() {

		var service = this;

		var cookies = {quantity: 10, name: "cookies"};
		var tshirt = {quantity : 10, name: "tshirt"};
		var bowl = {quantity: 4, name: "bowls"};
		var tile = {quantity: 2, name: "tiles"};
		var soapdish = {quantity: 2, name: "Soap Dish"};

		var buyarray = [cookies, soapdish, tshirt, bowl, tile];

		console.log(buyarray);

		var boughtarray = [];

		console.log(boughtarray);

		var label = []

		service.buyItem = function(quantity, name, index) {
			
			var item = {
				quantity: quantity,
				 name: name
				};
			boughtarray.push(item);
			buyarray.splice(index, 1);
			
		};

		//service.removeitem = function(itemIdex) {
			//boughtarray.splice(itemIdex);
			//console.log("probando remover");/

		//};

		service.getBuyItems = function() {
			console.log("se ehecuta");
			return buyarray;
		
	};

		service.getBoughtItems = function() {
			return boughtarray;
			
		};
	}

})();