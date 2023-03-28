"use strict";

import { linkedList} from "./linkedList";

const list = linkedList();
list.append(13);
list.append(16);
list.append(1323);
list.append(17);
console.log(list.toString())