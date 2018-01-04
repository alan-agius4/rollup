import { Expression } from './nodes/shared/Expression';
import SpreadElement from './nodes/SpreadElement';
import TaggedTemplateExpression from './nodes/TaggedTemplateExpression';
import NewExpression from './nodes/NewExpression';
import Property from './nodes/Property';
import CallExpression from './nodes/CallExpression';

type CallExpressionType = TaggedTemplateExpression | CallExpression | NewExpression | Property

interface callOptions {
	withNew: boolean,
	args?: (Expression | SpreadElement)[],
	caller: CallExpressionType
}

export default class CallOptions implements callOptions {
	withNew: boolean;
	args: (Expression | SpreadElement)[];
	caller: CallExpressionType;

	static create (callOptions: callOptions) {
		return new this(callOptions);
	}

	constructor ({ withNew = false, args = [], caller = undefined } = {}) {
		this.withNew = withNew;
		this.args = args;
		this.caller = caller;
	}

	equals (callOptions: CallOptions) {
		return callOptions && this.caller === callOptions.caller;
	}
}
