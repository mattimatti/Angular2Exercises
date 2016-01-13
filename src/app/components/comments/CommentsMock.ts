// Mock an outrageous amount of Comments

import  {Comment} from '../../models/Comment';


/**
 * The initial seed
 * @type {Number}
 */

const otrageousAmount = 120;


let comments = [];

for (var i = 0; i < otrageousAmount; ++i) {
	comments.push(Comment.createNew());
}


export default comments;