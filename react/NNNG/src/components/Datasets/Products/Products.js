export const calculateFinalPrice = (items) => {
    return items.map(item => ({
        ...item,
        FinalPrice: (item.InitialPrice * (1 - item.Discount / 100)).toFixed(2)
    }));
};


export const Updated_Bottles = [
    {
        id: 1,
        name: "Glass Bottle Set (6pcs)",
        InitialPrice: 25,
        Discount: 30,
    },
    {
        id: 2,
        name: "Plastic Water Bottle (1pc)",
        InitialPrice: 10,
        Discount: 10,
    },
    {
        id: 3,
        name: "Stainless Steel Water Bottle (1pc)",
        InitialPrice: 20,
        Discount: 15,
    },
    {
        id: 4,
        name: "Thermal Flask (1pc)",
        InitialPrice: 35,
        Discount: 20,
    },
    {
        id: 5,
        name: "Reusable Glass Bottles (4pcs)",
        InitialPrice: 30,
        Discount: 25,
    },
    {
        id: 6,
        name: "Juice Bottle Set (6pcs)",
        InitialPrice: 18,
        Discount: 40,
    },
    {
        id: 7,
        name: "Infuser Water Bottle (1pc)",
        InitialPrice: 15,
        Discount: 20,
    },
    {
        id: 8,
        name: "Collapsible Water Bottle (1pc)",
        InitialPrice: 12,
        Discount: 10,
    },
    {
        id: 9,
        name: "Glass Water Carafe (1pc)",
        InitialPrice: 20,
        Discount: 25,
    },
    {
        id: 10,
        name: "Sports Water Bottle (1pc)",
        InitialPrice: 22,
        Discount: 35,
    }
];


export const Bottles = calculateFinalPrice(Updated_Bottles);



// Thermosteel Bottles

export const Updated_Thermosteel_Bottles = [
    {
        id: 1,
        name: "1L Thermosteel Bottle",
        InitialPrice: 30,
        Discount: 25,
    },
    {
        id: 2,
        name: "750ml Thermosteel Bottle",
        InitialPrice: 25,
        Discount: 20,
    },
    {
        id: 3,
        name: "500ml Thermosteel Bottle",
        InitialPrice: 20,
        Discount: 15,
    },
    {
        id: 4,
        name: "1.5L Thermosteel Bottle",
        InitialPrice: 35,
        Discount: 30,
    },
    {
        id: 5,
        name: "500ml Thermosteel Bottle - Kids",
        InitialPrice: 18,
        Discount: 10,
    },
    {
        id: 6,
        name: "Leakproof Thermosteel Bottle",
        InitialPrice: 28,
        Discount: 25,
    },
    {
        id: 7,
        name: "Double-Walled Thermosteel Bottle",
        InitialPrice: 40,
        Discount: 35,
    },
    {
        id: 8,
        name: "Wide-Mouth Thermosteel Bottle",
        InitialPrice: 22,
        Discount: 20,
    },
    {
        id: 9,
        name: "Personalized Thermosteel Bottle",
        InitialPrice: 30,
        Discount: 20,
    }
];

export const Thermosteel_Bottles = calculateFinalPrice(Updated_Thermosteel_Bottles);


//Dinner_set 

export const Initial_Dinner_set = [
    {
        id: 1,
        name: "32pcs Dinner Set",
        InitialPrice: 20,
        Discount: 50,
    },
    {
        id: 4,
        name: "Dinner Plate Set (6pcs)",
        InitialPrice: 19,
        Discount: 20,
    },
    {
        id: 6,
        name: "Cooking Pot (3pcs)",
        InitialPrice: 30,
        Discount: 15,
    },
    {
        id: 7,
        name: "Non-Stick Pan Set (2pcs)",
        InitialPrice: 24,
        Discount: 25,
    },
    {
        id: 8,
        name: "Serving Tray Set (3pcs)",
        InitialPrice: 15,
        Discount: 40,
    }
];

export const Dinner_set = calculateFinalPrice(Initial_Dinner_set);




//Kids_Lunch_BOx


export const Updated_Kids_Lunch_Box = [
    {
        id: 1,
        name: "Kids' Lunch Box Set (3pcs)",
        InitialPrice: 18,
        Discount: 25,
    },
    {
        id: 2,
        name: "Office Lunch Box (1pc)",
        InitialPrice: 15,
        Discount: 20,
    },
    {
        id: 3,
        name: "Insulated Lunch Box (1pc)",
        InitialPrice: 25,
        Discount: 30,
    },
    {
        id: 4,
        name: "Thermal Steel Lunch Box (1pc)",
        InitialPrice: 35,
        Discount: 35,
    },
    {
        id: 5,
        name: "Leakproof Lunch Box (1pc)",
        InitialPrice: 20,
        Discount: 20,
    },
    {
        id: 6,
        name: "Bento Lunch Box (2pcs)",
        InitialPrice: 22,
        Discount: 30,
    },
    {
        id: 7,
        name: "Double Decker Lunch Box (1pc)",
        InitialPrice: 30,
        Discount: 25,
    },
    {
        id: 8,
        name: "Microwave Safe Lunch Box (1pc)",
        InitialPrice: 18,
        Discount: 15,
    },
    {
        id: 9,
        name: "Collapsible Lunch Box (1pc)",
        InitialPrice: 10,
        Discount: 10,
    },
    {
        id: 10,
        name: "Personalized Lunch Box (1pc)",
        InitialPrice: 28,
        Discount: 20,
    }
];


export const Kids_Lunch_Box = calculateFinalPrice(Updated_Kids_Lunch_Box);



//Office lunch Box


export const Updated_Office_Lunch_Box = [
    {
        id: 1,
        name: "Office Lunch Box (1pc)",
        InitialPrice: 15,
        Discount: 20,
    },
    {
        id: 2,
        name: "Insulated Office Lunch Box",
        InitialPrice: 25,
        Discount: 25,
    },
    {
        id: 3,
        name: "Thermal Steel Office Lunch Box",
        InitialPrice: 35,
        Discount: 30,
    },
    {
        id: 4,
        name: "Leakproof Office Lunch Box",
        InitialPrice: 20,
        Discount: 15,
    },
    {
        id: 5,
        name: "Bento Office Lunch Box",
        InitialPrice: 22,
        Discount: 20,
    },
    {
        id: 6,
        name: "Double Decker Office Lunch Box",
        InitialPrice: 30,
        Discount: 25,
    },
    {
        id: 7,
        name: "Microwave Safe Office Lunch Box",
        InitialPrice: 18,
        Discount: 10,
    },
    {
        id: 8,
        name: "Collapsible Office Lunch Box",
        InitialPrice: 10,
        Discount: 5,
    },
    {
        id: 9,
        name: "Personalized Office Lunch Box",
        InitialPrice: 28,
        Discount: 15,
    }
];

export const Office_Lunch_Box = calculateFinalPrice(Updated_Office_Lunch_Box);
 // these Office_Lunch_Box and Bottle , Dinner_set are final array of objects while Updated_Bottles and etc updated ones are iniital array of objects


