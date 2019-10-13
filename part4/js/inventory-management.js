/*eslint-env browser*/

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all products");
    window.console.log("update - Update quantity of a proudct");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function display(inventory_list) {
    "use strict";
    var i = 1;
    inventory_list.sort(function(a, b){
        return a[0] - b[0];
    });
    inventory_list.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ") " + "$" + product[3]);
        i += 1;
    });
    window.console.log("");
}
function update(inventory_list) {
    "use strict";
    var sku = parseInt(window.prompt("Enter SKU of product to update"));
    if(Number.isInteger(sku))
    {
        var skuFound = false;
        for( var i = 0; i < inventory_list.length; i++) {
            if( inventory_list[i][0] === sku) {
                skuFound = true;
                var newQuantity = parseInt(window.prompt("Enter new quantity of SKU: " + sku));
                if(Number.isInteger(newQuantity))
                {
                    inventory_list[i][2] = newQuantity;
                    window.console.log("Quantity of SKU - " + sku + " is updated to " + newQuantity);
                    window.console.log("");
                }
                else{
                    window.alert("Entered quantity was not an integer.");
                }
                break;
            }
        }
        if(!skuFound)
        {
            window.alert("SKU not found. Please enter valid SKU");
        }        
    }
    else{
        window.alert("SKU must be an integer");
    }  
}

function main() {
    "use strict";
    var inventory_list, command;
    
    display_menu();
    
    inventory_list = [[4824, "Shirt", 10, 15.99],
                      [6343, "Jeans", 22, 39.99],
                      [3223, "Socks", 36, 9.99],
                      [2233, "Hat", 12, 14.99],
                      [9382, "Jacket", 5, 49.99]];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display(inventory_list);
            } else if (command === "update") {
                update(inventory_list);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();