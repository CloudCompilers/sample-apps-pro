import * as events from "events"

/* @klotho::pubsub {
*  id = "myTestEmitter"
* }
*/
export const MyEmitter = new events.EventEmitter();

import "./hello_handler" // import after emitter set up to register handlers
import "./other/handler"
