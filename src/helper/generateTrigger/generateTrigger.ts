/**
 * Created on 02.05.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

/**
 * Generates trigger of dispatched actions to identify which component triggered an action
 *
 * @param {String} pathToComponent : String : The path to the component which triggered the action
 * @returns {function(String): string} : Returns function which puts out the whole trigger string
 */
export function generateTrigger(pathToComponent: string) {
    /**
     * Trigger of dispatched actions to identify which component triggered an action
     *
     * @param {String} functionOfComponent : String : The function which triggered the action
     * @returns {string} : Returns the whole trigger string
     */
    return function trigger(functionOfComponent: string) {
        return `${pathToComponent}.${functionOfComponent}`;
    };
}
