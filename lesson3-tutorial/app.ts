{
    // 1. Union type: number | string
    let rating: number | "unrated" = "unrated";

    // 2. Literal type: "light" | "dark"
    let theme: "light" | "dark" = "dark";

    // 3. Create a custom literal union type
    type UserRole = "admin" | "editor" | "viewer";

    // 4. Use the type to declare a variable
    let currentUserRole: UserRole = "editor";

    // 5. Log everything
    console.log("Rating:", rating);
    console.log("Theme:", theme);
    console.log("Role:", currentUserRole);
}

{
    // 1. Literal type for delivery status
    let status: "pending" | "shipped" | "delivered" = "pending";

    // 2. Union type for delivery ETA
    let deliveryETA: number | "unknown" = "unknown";

    // 3. Custom type for payment method
    type PaymentMethod = "credit" | "paypal" | "applePay";

    // 4. Use the type
    let chosenMethod: PaymentMethod = "paypal";

    // 5. Log everything
    console.log("Order Status:", status);
    console.log("ETA:", deliveryETA);
    console.log("Payment:", chosenMethod);
}