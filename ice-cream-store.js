// ice-cream-store

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    toppings: ["chocolate", "peanauts"]
};

let order = (Fruit_name, call_production) => {
    call_production();
};

// once we get the order we can start producing ice-cream
let production = () => {};

order("", production);