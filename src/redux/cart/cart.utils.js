export const groupItemsInCart = (prevItems, newItem) => {
    const itemExists = prevItems.find((item) => item.id === newItem.id);

    if (itemExists) {
        return prevItems.map((item) =>
            item.id === newItem.id
                ? {
                      ...item,
                      quantity: item.quantity + 1,
                  }
                : item
        );
    }

    return [...prevItems, { ...newItem, quantity: 1 }];
};
