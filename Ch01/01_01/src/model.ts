let displayName: string = "Jess' standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123456";
let createDate: Date = new Date();
// let originalCost: any = 425;
// let originalCost: number | string = 425;
type Cost = number | string;
let originalCost: Cost = 425;
originalCost = "Hi";

if (typeof originalCost === "number") {
  let cost: number = originalCost;
} else {
  let x = originalCost;
}

// enum InventoryItemType {
//   Computer = "computer",
//   Furniture = "furniture",
// }

interface InventoryItem {
  displayName: string;
  //   inventoryType: InventoryItemType;
  inventoryType: "computer" | "furniture";
  readonly trackingNumber: string;
  createDate: Date;
  originalCost?: number;

  addNote?(note: string): string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
  displayName: "MAcbook",
  inventoryType: "computer",
  trackingNumber: "MBP123",
  createDate: new Date(),
});
