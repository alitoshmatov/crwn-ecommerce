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

export const reduceItemCountUtil = (prevItems, newItem) => {
    const existingItem = prevItems.find((item) => item.id === newItem.id);

    if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== newItem.id);
    }

    return prevItems.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity - 1 } : item
    );
};
