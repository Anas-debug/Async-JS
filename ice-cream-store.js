// ice-cream-store

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    toppings: ["chocolate", "peanauts"]
};

let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    }, 2000);

    call_production();
};

// once we get the order we can start producing ice-cream
let production = () => {
    setTimeout(() => {
        console.log('production has started');
    }, 0000);
};

order(0, production);