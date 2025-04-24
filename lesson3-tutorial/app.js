{
    // 1. Union type: number | string
    var rating = "unrated";
    // 2. Literal type: "light" | "dark"
    var theme = "dark";
    // 4. Use the type to declare a variable
    var currentUserRole = "editor";
    // 5. Log everything
    console.log("Rating:", rating);
    console.log("Theme:", theme);
    console.log("Role:", currentUserRole);
}
{
    // 1. Literal type for delivery status
    var status_1 = "pending";
    // 2. Union type for delivery ETA
    var deliveryETA = "unknown";
    // 4. Use the type
    var chosenMethod = "paypal";
    // 5. Log everything
    console.log("Order Status:", status_1);
    console.log("ETA:", deliveryETA);
    console.log("Payment:", chosenMethod);
}
