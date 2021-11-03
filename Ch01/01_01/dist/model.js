var displayName = "Jess' standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123456";
var createDate = new Date();
var originalCost = 425;
originalCost = "Hi";
if (typeof originalCost === "number") {
    var cost = originalCost;
}
else {
    var x = originalCost;
}
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) { }
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "MAcbook",
    inventoryType: "computer",
    trackingNumber: "MBP123",
    createDate: new Date(),
});
