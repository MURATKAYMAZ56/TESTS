'use strict';

/**
 * Dispatches all items.
 *
 * @param {Function} dispatchItem Function that dispatches an item
 * @param {[Number]} items        Items to dispatch
 * @param {String} address        Customer's address
 *
 * @returns {Promise} A promise which resolves with the result of dispatching
 * each item to the address
 */
function placeOrder(dispatchItem, items, address) {
    // TODO: Write your code here
    return new Promise((resolve, reject) => {
        try {
            items.forEach(item => dispatchItem(item, address));
            resolve();
        }
        catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    placeOrder
};
