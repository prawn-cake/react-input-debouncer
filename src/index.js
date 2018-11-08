/* Debounce a react input.

   Usage:

   ...somewhere in the render method...
   <input
       type="text"
       onChange={ debounce(e => {this.setState({value: e.target.value})}, 1000) }
    />
 */
const debounce = (() => {
    let isTimeoutSet = false;

    return (callback, timeout) => {
        return (event) => {
            event.persist();
            if (!isTimeoutSet) {
                isTimeoutSet = true;
                setTimeout(() => {
                    isTimeoutSet = false;
                    callback(event);
                }, timeout);
            }
        };
    };
})();


module.exports = debounce;
