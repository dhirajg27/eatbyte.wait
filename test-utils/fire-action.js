"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Used for testing to fire actions against a reducer.
 *
 * @param {Function} reducer Reducer to test
 * @param {Object} currentState The current state of the reducer
 * @param {String} type The action type to fire
 * @param {Object} payload The payload (optional) to fire
 * @return {Object} Updated state as a result of the action
 */
function fireAction(reducer, currentState, type, payload = {}) {
    return reducer(currentState, {
        type,
        payload
    });
}
exports.default = fireAction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztHQVFHO0FBQ0gsb0JBQW1DLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sR0FBRyxFQUFFO0lBQzFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1FBQzNCLElBQUk7UUFDSixPQUFPO0tBQ1IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUxELDZCQUtDIn0=